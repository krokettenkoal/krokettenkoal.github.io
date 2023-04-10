import { v4 as uuid } from "uuid";
import {get} from "svelte/store";
import {highscore} from "./Highscore";

interface IQuizAnswer {
  text: string;
  correct?: boolean;
}

interface IQuizQuestion {
  text: string;
  answers: IQuizAnswer[];
  difficulty?: number;
}

export interface IQuiz {
  id?: string;
  title: string;
  icon?: string;
  description?: string;
  questions: IQuizQuestion[];
  baseScore?: number;
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

  constructor({text, correct}: IQuizAnswer) {
    this.id = uuid();
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

  constructor({text, difficulty, answers}: IQuizQuestion) {
    this.id = uuid();
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

  private currentIdx: number;

  constructor({id, title, icon, questions, description, baseScore}: IQuiz) {
    this.id = id ?? uuid();
    this.title = title;
    this.icon = icon;
    this.questions = questions.map(q => new QuizQuestion(q));
    this.description = description;
    this.baseScore = baseScore ?? 100;
    this.currentIdx = -1;
    this.score = 0;
    this.startTime = -1;
    this.endTime = -1;
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
      hs.add(this.id, Math.trunc(this.score));
    }

    return result;
  }

  reset(): void {
    this.score = 0;
    this.currentIdx = -1;

    this.questions.forEach(q => q.reset());
  }
}