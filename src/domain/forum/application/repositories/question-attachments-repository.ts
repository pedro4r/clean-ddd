import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export interface QuestionAttachmentRepository {
    findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>
}