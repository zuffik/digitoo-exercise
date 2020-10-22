import * as React from "react";
import { Article } from "../../../../services/types/entity/Article";
import { ArticleCreationInfo } from "../ArticleCreationInfo/ArticleCreationInfo";
import { Link } from "react-router-dom";
import { Routes } from "../../../../services/routes/Routes";
import { ArticleMiniature } from "../ArticleMiniature/ArticleMiniature";

interface Props {
  article: Article;
  image: React.ReactNode;
}

export const ArticleListItem: React.FC<Props> = (props: Props) => {
  return (
    <div className="row">
      <div className="col-12 col-sm-4 col-lg-2">{props.image}</div>
      <div className="col-12 col-sm-8 col-lg-10">
        <ArticleMiniature
          title={props.article.title}
          perex={props.article.perex}
        >
          <div className="my-2">
            <ArticleCreationInfo
              createdAt={props.article.createdAt}
              author="No author?"
            />
          </div>
        </ArticleMiniature>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <Link
            to={Routes.articleDetail(props.article.articleId)}
            className="p-2"
          >
            Read whole article
          </Link>
          <span className="ml-4 text-black-50">xy comments</span>
        </div>
      </div>
    </div>
  );
};