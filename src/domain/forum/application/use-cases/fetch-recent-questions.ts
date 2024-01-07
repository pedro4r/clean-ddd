import { Question } from '../../enterprise/entities/question';
import { QuestionsRepository } from '../repositories/questions-repositoty';

interface FetchRecentQuestionsUseCaseRequest {
    page: number
}

interface FetchRecentQuestionsUseCaseResponse {
    questions: Question[]
}

export class FetchRecentQuestionsUseCase {
    constructor(private questionRespository: QuestionsRepository) { }

    async execute({
        page
    }: FetchRecentQuestionsUseCaseRequest): Promise<FetchRecentQuestionsUseCaseResponse> {
        const questions = await this.questionRespository.findManyRecent({ page })

        return {
            questions
        }

    }
}
