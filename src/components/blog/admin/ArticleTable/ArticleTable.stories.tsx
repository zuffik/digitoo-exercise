import * as React from 'react';
import {ArticleTable} from './ArticleTable';
import {article} from '../../../../services/data/random/Article';
import {list} from '../../../../services/data/random/List';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Blog/Admin',
};
export const articleTable = () => (
  <ArticleTable
    articles={list(article)}
    onEditArticleClick={action('onEditArticleClick')}
    onRemoveArticleClick={action('onRemoveArticleClick')}
  />
);
