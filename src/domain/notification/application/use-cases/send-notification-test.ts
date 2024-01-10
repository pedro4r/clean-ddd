import { SendNotificationUseCase } from './send-notification'
import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository'

let inMemoryNotificationRepository: InMemoryNotificationRepository
let sut: SendNotificationUseCase

describe('Send Notifications', () => {
    beforeEach(() => {
        inMemoryNotificationRepository = new InMemoryNotificationRepository()
        sut = new SendNotificationUseCase(inMemoryNotificationRepository)
    })

    it('should be able to send a notification', async () => {
        const result = await sut.execute({
            recipientId: '1',
            title: 'New notification',
            content: 'New notification content',
        })

        expect(result.isRight()).toBe(true)
        expect(inMemoryNotificationRepository.items[0]).toEqual(result.value?.notification)
    })
})