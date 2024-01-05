import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Question, QuestionProps } from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objetcs/slug";

export function makeQuestion(
    override: Partial<QuestionProps> = {}
) {
    const question = Question.create({
        authorId: new UniqueEntityID(),
        title: 'Example Question',
        content: 'Example content',
        ...override
    })

    return question
}