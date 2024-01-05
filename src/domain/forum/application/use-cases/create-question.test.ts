import { AnswerQuestionUseCase } from './answer-question'
import { Answer } from '../../enterprise/entities/answer'
import { QuestionsRepository } from '../repositories/questions-repositoty'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionsRepository = {
    create: async (question: Question) => { },
}

test('create an Answer', async () => {
    const createQuestionUseCase = new CreateQuestionUseCase(fakeQuestionRepository)

    const { question } = await createQuestionUseCase.execute({
        title: 'New Question',
        authorId: '2',
        content: 'Question Content',
    })

    expect(question.id).toBeTruthy()
})
