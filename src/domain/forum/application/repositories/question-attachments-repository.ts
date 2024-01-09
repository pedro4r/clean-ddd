import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export interface QuestionAttachmentsRepository {
    findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>
    deleteManyByQuestionId(questionId: string): Promise<void>
}