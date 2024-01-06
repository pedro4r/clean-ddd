import { QuestionsRepository } from '../repositories/questions-repositoty';

interface EditQuestionUseCaseRequest {
    authorId: string
    questionId: string
    title: string
    content: string
}

interface EditQuestionUseCaseResponse { }

export class EditQuestionUseCase {
    constructor(private questionRespository: QuestionsRepository) { }

    async execute({
        authorId,
        questionId,
        title,
        content
    }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse> {
        const question = await this.questionRespository.findById(questionId)

        if (!question) {
            throw new Error('Question not found')
        }

        if (authorId !== question.authorId.toString()) {
            throw new Error('Not allowed')
        }

        question.title = title
        question.content = content

        await this.questionRespository.save(question)

        return {}

    }
}
