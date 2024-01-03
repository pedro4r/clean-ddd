import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an Answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
        questionId: '1',
        instructorId: '2',
        content: 'New Answer'
    })

    expect(answer.content).toEqual('New Answer')
})