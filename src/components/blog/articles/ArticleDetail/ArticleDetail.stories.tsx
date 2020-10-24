import * as React from 'react';
import {ArticleDetail} from './ArticleDetail';
import {articleDetail} from "../../../../services/data/random/ArticleDetail";

export default {
  title: 'Blog/Articles',
};

export const detail = () => (
  <ArticleDetail
    article={articleDetail()}
  />
);
