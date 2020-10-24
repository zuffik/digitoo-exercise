import * as React from 'react';
import {ArticleForm} from "./ArticleForm";
import {boolean} from "@storybook/addon-knobs";
import {articleDetail} from "../../../../services/data/random/ArticleDetail";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Blog/Admin'
}

export const articleForm = () => (
    <ArticleForm article={boolean('article', false) ? articleDetail() : undefined} onSubmit={action('onSubmit')} loading={boolean('loading', false)}/>
);
