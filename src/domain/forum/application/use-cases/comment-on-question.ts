import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { QuestionsRepository } from '../repositories/questions-repositoty'
import { QuestionCommentsRepository } from '../repositories/question-commments-repository'

interface CommentOnQuestionUseCaseRequest {
    authorId: string
    questionId: string
    content: string
}

type CommentOnQuestionUseCaseResponse = Either<
    ResourceNotFoundError,
    {
        questionComment: QuestionComment
    }
>

export class CommentOnQuestionUseCase {
    constructor(
        private questionsRepository: QuestionsRepository,
        private questionCommentsRepository: QuestionCommentsRepository,
    ) { }

    async execute({
        authorId,
        questionId,
        content,
    }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
        const question = await this.questionsRepository.findById(questionId)

        if (!question) {
            return left(new ResourceNotFoundError())
        }

        const questionComment = QuestionComment.create({
            authorId: new UniqueEntityID(authorId),
            questionId: new UniqueEntityID(questionId),
            content,
        })

        await this.questionCommentsRepository.create(questionComment)

        return right({
            questionComment,
        })
    }
}