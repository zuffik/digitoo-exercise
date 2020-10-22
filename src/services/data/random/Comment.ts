import {Comment} from "../../types/entity/Comment";
import * as faker from "faker";

export const comment = (): Comment => ({
    author: faker.name.firstName() + ' ' + faker.name.lastName(),
    articleId: faker.random.uuid(),
    postedAt: faker.date.past().toISOString(),
    content: faker.lorem.paragraph(),
    score: Math.round(faker.random.number(20) - 10),
    commentId: faker.random.uuid()
})
