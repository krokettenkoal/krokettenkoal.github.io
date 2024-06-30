import { v4 as uuid } from "uuid";
import { get } from "svelte/store";
import { Achievement, highscore } from "./Highscore";
import { isUuid } from "$lib/utils";
import { TypedEvent } from "$lib/quiz/TypedEvent";
export const NEW_ANSWER = {
    text: ""
};
export const NEW_QUESTION = {
    text: "",
    answers: []
};
export const NEW_QUIZ = {
    title: "New quiz",
    questions: [],
};
export class QuizAnswer {
    id;
    text;
    correct;
    constructor({ id, text, correct } = NEW_ANSWER) {
        this.id = id ?? uuid();
        this.text = text;
        this.correct = correct;
    }
}
export class QuizQuestion {
    id;
    text;
    difficulty;
    answers;
    submitted;
    constructor({ id, text, difficulty, answers } = NEW_QUESTION) {
        this.id = id ?? uuid();
        this.text = text;
        this.difficulty = difficulty ?? 1;
        this.answers = answers.map(ans => new QuizAnswer(ans));
        this.submitted = false;
    }
    get correctAnswers() {
        return this.answers.filter(ans => ans.correct);
    }
    /**
     * Submits the specified answer(s) and calculates the according score
     * @param answers The answer(s) ticked by the user
     */
    submit(...answers) {
        const accumulate = (score, answer) => {
            return score + (answer.correct
                ? this.difficulty / this.correctAnswers.length
                : -1 / (this.answers.length - this.correctAnswers.length));
        };
        this.submitted = true;
        return {
            score: answers.reduce(accumulate, 0),
            correctAnswers: answers.filter(ans => ans.correct).length,
            totalCorrectAnswers: this.correctAnswers.length,
            wrongAnswers: answers.filter(ans => !ans.correct).length
        };
    }
    reset() {
        this.submitted = false;
    }
}
export class QuizResult {
    score;
    levelUp;
    personalRecord;
    achievements;
    constructor({ score, levelUp, personalRecord }) {
        this.score = score;
        this.levelUp = levelUp;
        this.personalRecord = personalRecord;
        this.achievements = new Set();
        if (this.levelUp)
            this.achievements.add(Achievement.LevelUp);
        if (this.personalRecord)
            this.achievements.add(Achievement.PersonalBest);
    }
    get hasAchievements() {
        return this.achievements.size > 0;
    }
}
/**
 * Class representing an answerable quiz
 */
export class Quiz {
    id;
    title;
    icon;
    description;
    questions;
    baseScore;
    score;
    startTime;
    endTime;
    onComplete;
    currentIdx;
    constructor({ id, title, icon, questions, description, baseScore } = NEW_QUIZ) {
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
        this.onComplete = new TypedEvent();
    }
    get current() {
        if (this.currentIdx < 0 || this.currentIdx >= this.questions.length)
            return null;
        return this.questions[this.currentIdx];
    }
    get started() {
        return this.currentIdx >= 0;
    }
    get done() {
        return this.currentIdx >= this.questions.length;
    }
    get hasNext() {
        return this.currentIdx < this.questions.length - 1;
    }
    get maxScore() {
        return this.questions.reduce((score, q) => score + q.difficulty * this.baseScore, 0);
    }
    get totalTime() {
        if (this.startTime < 0 || this.endTime < 0)
            return -1;
        return Math.trunc((this.endTime - this.startTime) / 1000);
    }
    start() {
        if (this.currentIdx >= 0)
            return;
        this.currentIdx = 0;
        this.startTime = Date.now();
    }
    next() {
        this.currentIdx++;
    }
    /**
     * Submits the specified answers to the current question
     * @param answers The answers selected by the user
     * @event onComplete Raised if the submitted question is the last in the quiz
     * @returns The score achieved with the specified answers
     */
    submit(...answers) {
        if (!this.current)
            return null;
        const result = this.current.submit(...answers);
        result.score = result.score * this.baseScore;
        this.score = Math.max(this.score + result.score, 0);
        if (!this.hasNext) {
            this.endTime = Date.now();
            const hs = get(highscore);
            const qRes = {
                score: result.score,
                levelUp: result.score >= hs.pointsForNextLevel,
            };
            qRes.personalRecord = hs.add(this.id, Math.trunc(this.score));
            this.onComplete.emit(new QuizResult(qRes));
        }
        return result;
    }
    reset() {
        this.score = 0;
        this.currentIdx = -1;
        this.questions.forEach(q => q.reset());
    }
    static serializeProperty(key, value) {
        switch (key) {
            case 'id':
                if (isUuid(value))
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
    serialize() {
        return JSON.stringify(this, Quiz.serializeProperty, 2);
    }
}
//# sourceMappingURL=Quiz.js.map