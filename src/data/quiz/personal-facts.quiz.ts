import type {IQuiz} from "$lib/quiz/Quiz";
import { Quiz } from "$lib/quiz/Quiz";

const data: IQuiz = {
  id: "personal-trivia",
  title: "Personal trivia",
  icon: 'AccountHeart',
  description: "How many (fun) facts about me can you guess? Try out my **personal trivia quiz**!",
  questions: [
    {
      text: "What's my second name?",
      answers: [
        { text: "Lucian" },
        { text: "Laurentz", correct: true },
        { text: "Karl" },
        { text: "Igor" }
      ]
    },
    {
      text: "Which programming languages do I really like?",
      answers: [
        { text: "JavaScript" },
        { text: "Typescript", correct: true },
        { text: "C#", correct: true },
        { text: "PHP" }
      ]
    }
  ]
}

export const PersonalTriviaQuiz = new Quiz(data);