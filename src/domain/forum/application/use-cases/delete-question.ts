import { QuestionsRepository } from '../repositories/questions-repositoty';

interface DeleteQuestionUseCaseRequest {
    authorId: string
    questionId: string
}

interface DeleteQuestionUseCaseResponse { }

export class DeleteQuestionUseCase {
    constructor(private questionRespository: QuestionsRepository) { }

    async execute({
        authorId,
        questionId
    }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {

        const question = await this.questionRespository.findById(questionId)

        if (!question) {
            throw new Error('Question not found')
        }

        if (authorId !== question.authorId.toString()) {
            throw new Error('Not allowed')
        }

        await this.questionRespository.delete(question)

        return {}

    }
}
