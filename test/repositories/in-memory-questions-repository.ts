import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repositoty";
import { Question } from "@/domain/forum/enterprise/entities/question";

export class InMemoryQuestionsRepository implements QuestionsRepository {

    public items: Question[] = []

    async create(question: Question) {
        this.items.push(question)
    }

}