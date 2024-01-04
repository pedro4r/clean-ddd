import { AnswersRepository } from "../../repositories/answers-repository"
import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
    authorId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase {

    constructor(
        private answersRepository: AnswersRepository
    ) { }

    async execute({ authorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({ authorId, questionId, content })
        await this.answersRepository.create(answer)
        return answer
    }

}