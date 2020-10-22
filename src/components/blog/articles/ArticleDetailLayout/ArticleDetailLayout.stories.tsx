import * as React from "react";
import { ArticleDetailLayout } from "./ArticleDetailLayout";
import {articleDetail} from "../../../../services/data/random/ArticleDetail";
import {list} from "../../../../services/data/random/List";
import {article} from "../../../../services/data/random/Article";

export default {
  title: "Blog/Articles",
};

export const detailLayout = () => (
  <ArticleDetailLayout
    image={<img src="https://picsum.photos/500/200" alt="random" width="100%"/>}
    article={articleDetail()}
    relatedArticles={list(article)}
  />
);
