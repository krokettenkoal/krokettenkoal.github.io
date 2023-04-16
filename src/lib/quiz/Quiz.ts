import { v4 as uuid } from "uuid";
import { get } from "svelte/store";
import { Achievement, highscore } from "./Highscore";
import { isUuid } from "$lib/utils";
import { TypedEvent } from "$lib/quiz/TypedEvent";

export interface IQuizAnswer {
  id?: string;
  text: string;
  correct?: boolean;
}

export const NEW_ANSWER: IQuizAnswer = {
  text: ""
}

export interface IQuizQuestion {
  id?: string;
  text: string;
  answers: IQuizAnswer[];
  difficulty?: number;
}

export const NEW_QUESTION: IQuizQuestion = {
  text: "",
  answers: []
}

export interface IQuiz {
  id?: string;
  title: string;
  icon?: string;
  description?: string;
  questions: IQuizQuestion[];
  baseScore?: number;
}

export const NEW_QUIZ: IQuiz = {
  title: "New quiz",
  questions: [],
}

export interface IQuestionResult {
  score: number;
  correctAnswers: number;
  totalCorrectAnswers: number;
  wrongAnswers: number;
}

export class QuizAnswer implements IQuizAnswer {
  id: string;
  text: string;
  correct?: boolean;

  constructor({id, text, correct}: IQuizAnswer = NEW_ANSWER) {
    this.id = id ?? uuid();
    this.text = text;
    this.correct = correct;
  }
}

export class QuizQuestion implements IQuizQuestion {
  id: string;
  text: string;
  difficulty: number;
  answers: QuizAnswer[];
  submitted: boolean;

  constructor({id, text, difficulty, answers}: IQuizQuestion = NEW_QUESTION) {
    this.id = id ?? uuid();
    this.text = text;
    this.difficulty = difficulty ?? 1;
    this.answers = answers.map(ans => new QuizAnswer(ans));
    this.submitted = false;
  }

  get correctAnswers(): QuizAnswer[] {
    return this.answers.filter(ans => ans.correct);
  }

  /**
   * Submits the specified answer(s) and calculates the according score
   * @param answers The answer(s) ticked by the user
   */
  submit(...answers: QuizAnswer[]): IQuestionResult {
    const accumulate = (score: number, answer: QuizAnswer): number => {
      return score + (answer.correct
        ? this.difficulty / this.correctAnswers.length
        : -1 / (this.answers.length - this.correctAnswers.length));
    }

    this.submitted = true;

    return {
      score: answers.reduce(accumulate, 0),
      correctAnswers: answers.filter(ans => ans.correct).length,
      totalCorrectAnswers: this.correctAnswers.length,
      wrongAnswers: answers.filter(ans => !ans.correct).length
    };
  }

  reset(): void {
    this.submitted = false;
  }
}

export interface IQuizResult {
  score: number;
  levelUp?: boolean;
  personalRecord?: boolean;
}

export class QuizResult implements IQuizResult {
  score: number;
  levelUp?: boolean;
  personalRecord?: boolean;
  achievements: Set<Achievement>;

  constructor({score, levelUp, personalRecord}: IQuizResult) {
    this.score = score;
    this.levelUp = levelUp;
    this.personalRecord = personalRecord;
    this.achievements = new Set<Achievement>();

    if(this.levelUp)
      this.achievements.add(Achievement.LevelUp);

    if(this.personalRecord)
      this.achievements.add(Achievement.PersonalBest);
  }

  get hasAchievements(): boolean {
    return this.achievements.size > 0;
  }
}

/**
 * Class representing an answerable quiz
 */
export class Quiz implements IQuiz {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  questions: QuizQuestion[];
  baseScore: number;
  score: number;
  startTime: number;
  endTime: number;

  onComplete: TypedEvent<IQuizResult>;

  private currentIdx: number;

  constructor({id, title, icon, questions, description, baseScore}: IQuiz = NEW_QUIZ) {
    this.id = id ?? uuid();
    this.title = title;
    this.icon = icon;
    this.questions = questions.map(q => new QuizQuestion(q)).sort((a, b) => a.difficulty - b.difficulty);
    this.description = description;
    this.baseScore = baseScore ?? 100;
    this.currentIdx = -1;
    this.score = 0;
    this.startTime = -1;
    this.endTime = -1;
    this.onComplete = new TypedEvent<any>();
  }

  get current(): QuizQuestion|null {
    if(this.currentIdx < 0 || this.currentIdx >= this.questions.length)
      return null;

    return this.questions[this.currentIdx];
  }

  get started(): boolean {
    return this.currentIdx >= 0;
  }

  get done(): boolean {
    return this.currentIdx >= this.questions.length;
  }

  get hasNext(): boolean {
    return this.currentIdx < this.questions.length - 1;
  }

  get maxScore(): number {
    return this.questions.reduce((score: number, q: QuizQuestion): number => score + q.difficulty * this.baseScore, 0);
  }

  get totalTime(): number {
    if(this.startTime < 0 || this.endTime < 0)
      return -1;

    return Math.trunc((this.endTime - this.startTime) / 1000);
  }

  start(){
    if(this.currentIdx >= 0)
      return;

    this.currentIdx = 0;
    this.startTime = Date.now();
  }

  next(): void {
    this.currentIdx++;
  }

  /**
   * Submits the specified answers to the current question
   * @param answers The answers selected by the user
   * @event onComplete Raised if the submitted question is the last in the quiz
   * @returns The score achieved with the specified answers
   */
  submit(...answers: QuizAnswer[]): IQuestionResult|null {
    if(!this.current)
      return null;

    const result = this.current.submit(...answers);
    result.score = result.score * this.baseScore;
    this.score = Math.max(this.score + result.score, 0);

    if(!this.hasNext) {
      this.endTime = Date.now();
      const hs = get(highscore);

      const qRes: IQuizResult = {
        score: result.score,
        levelUp: result.score >= hs.pointsForNextLevel,
      };

      qRes.personalRecord = hs.add(this.id, Math.trunc(this.score));
      this.onComplete.emit(new QuizResult(qRes));
    }

    return result;
  }

  reset(): void {
    this.score = 0;
    this.currentIdx = -1;

    this.questions.forEach(q => q.reset());
  }

  private static serializeProperty(key: string|number, value: any): any {
    switch (key){
      case 'id':
        if(isUuid(value))
          return undefined;
        break;
      case 'score':
      case 'startTime':
      case 'endTime':
      case 'currentIdx':
      case 'submitted':
        return undefined;

      default: break;
    }

    return value;
  }

  serialize(): string {
    return JSON.stringify(this, Quiz.serializeProperty, 2);
  }
}