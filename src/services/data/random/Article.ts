import {Article} from '../../types/entity/Article';
import * as faker from 'faker';

export const article = (): Article => ({
  articleId: faker.random.uuid(),
  createdAt: faker.date.past().toISOString(),
  lastUpdatedAt: faker.date.past().toISOString(),
  perex: faker.lorem.sentences(2),
  title: faker.lorem.sentence(),
  imageId: faker.random.uuid(),
});
