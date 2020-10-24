import * as React from 'react';
import {ArticlePreview} from './ArticlePreview';

export default {
  title: 'Blog/Articles',
};

export const listItem = () => (
  <ArticlePreview
    article={{
      articleId: '123',
      createdAt: '2020-01-01',
      lastUpdatedAt: '2020-01-01',
      perex: 'Lorem ipsum',
      title: 'Dolor sit amet',
      imageId: '132',
    }}
  />
);
