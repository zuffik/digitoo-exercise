import * as React from 'react';
import {CommentForm} from './CommentForm';
import {action} from '@storybook/addon-actions';
import {boolean} from '@storybook/addon-knobs';

export default {
  title: 'Blog/Comments',
};

export const form = () => (
  <CommentForm count={5} onSubmit={action('onSubmit')} loading={boolean('loading', false)} />
);
