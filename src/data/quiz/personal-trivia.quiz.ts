import type {IQuiz} from "$lib/quiz/Quiz";
import { Quiz } from "$lib/quiz/Quiz";

const data: IQuiz = {
  "id": "personal-trivia",
  "title": "Personal trivia",
  "icon": "AccountHeart",
  "description": "How many (fun) facts about me can you guess? Try out my **personal trivia quiz**!",
  "questions": [
    {
      "text": "What's my second name? 🥈",
      "difficulty": 3,
      "answers": [
        {
          "text": "Lucian"
        },
        {
          "text": "Laurentz",
          "correct": true
        },
        {
          "text": "Karl"
        },
        {
          "text": "Igor"
        }
      ]
    },
    {
      "text": "Which programming language(s) do I really like? 🧑‍💻",
      "difficulty": 2,
      "answers": [
        {
          "text": "JavaScript"
        },
        {
          "text": "Typescript",
          "correct": true
        },
        {
          "text": "C#",
          "correct": true
        },
        {
          "text": "PHP"
        }
      ]
    },
    {
      "text": "Where did I work before studying at St. Pölten UAS? 🏢",
      "difficulty": 1,
      "answers": [
        {
          "text": "TU Wien"
        },
        {
          "text": "Die Presse"
        },
        {
          "text": "DER STANDARD",
          "correct": true
        },
        {
          "text": "FH Campus Wien"
        }
      ]
    },
    {
      "text": "What's my favourite video game? 🎮",
      "difficulty": 2,
      "answers": [
        {
          "text": "The Elder Scrolls V: Skyrim"
        },
        {
          "text": "The Witcher 3: Wild Hunt",
          "correct": true
        },
        {
          "text": "Rocket League"
        },
        {
          "text": "Red Dead Redemption 2"
        },
        {
          "text": "Sons of the Forest"
        },
        {
          "text": "LEGO Star Wars: The Skywalker Saga"
        },
        {
          "text": "Fallout 4"
        },
        {
          "text": "Far Cry New Dawn"
        }
      ]
    },
    {
      "text": "Am I a PC gamer or a console gamer? 🆚",
      "difficulty": 2,
      "answers": [
        {
          "text": "PC",
          "correct": true
        },
        {
          "text": "Console"
        }
      ]
    },
    {
      "text": "What's my favourite alcoholic beverage? 🍷🍸🍹🍺",
      "difficulty": 2,
      "answers": [
        {
          "text": "White Wine"
        },
        {
          "text": "Martini Extra Dry"
        },
        {
          "text": "Bloody Mary"
        },
        {
          "text": "Beer",
          "correct": true
        }
      ]
    }
  ],
  "baseScore": 100
}

const quiz = new Quiz(data);
export default quiz;