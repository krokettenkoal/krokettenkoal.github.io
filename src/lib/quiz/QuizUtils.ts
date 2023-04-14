import type { Quiz } from "./Quiz";

const QUIZ_FILE_TEMPLATE = 'import type {IQuiz} from "$lib/quiz/Quiz";\n' +
  'import { Quiz } from "$lib/quiz/Quiz";\n' +
  '\n' +
  "const data: IQuiz = {QUIZ_DATA}\n" +
  '\n' +
  'const quiz = new Quiz(data);\n' +
  'export default quiz;'

export function createQuizFile(data: Quiz): string {
  const ds = data.serialize();
  return QUIZ_FILE_TEMPLATE.replace("{QUIZ_DATA}", ds);
}