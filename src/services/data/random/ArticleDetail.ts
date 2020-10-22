import * as faker from "faker";
import {ArticleDetail} from "../../types/entity/ArticleDetail";
import {HTML} from "./html/HTML";
import * as _ from 'lodash';
import {comment} from "./Comment";

export const articleDetail = (): ArticleDetail => ({
    articleId: faker.random.uuid(),
    createdAt: faker.date.past().toISOString(),
    lastUpdatedAt: faker.date.past().toISOString(),
    perex: faker.lorem.paragraph(),
    title: faker.lorem.sentence(),
    imageId: faker.random.uuid(),
    content: HTML[Math.round(faker.random.number(HTML.length - 1))],
    comments: _.times(1 + Math.round(faker.random.number(10)), comment)
})
