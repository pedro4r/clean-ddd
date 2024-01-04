import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '@/repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return
    }
}

test('create an Answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
        content: 'New Answer',
        instructorId: '2',
        questionId: '1',

    })

    expect(answer.content).toEqual('New Answer')
})