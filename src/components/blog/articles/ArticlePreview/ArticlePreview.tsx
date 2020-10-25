import * as React from 'react';
import {Article} from '../../../../services/types/entity/Article';
import {ArticleCreationInfo} from '../ArticleCreationInfo/ArticleCreationInfo';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../services/routes/Routes';
import {ArticleMiniature} from '../ArticleMiniature/ArticleMiniature';
import {RemoteImage} from "../../../elementary/RemoteImage/RemoteImage";
import {ImageWrapper} from "../../../elementary/ImageWrapper/ImageWrapper";

interface Props {
  article: Article;
}

export const ArticlePreview: React.FC<Props> = (props: Props) => {
  return (
    <div className="row mb-4">
      <div className="col-12 col-sm-4 col-lg-3">
        <ImageWrapper height={200}>
            <RemoteImage imageId={props.article.imageId} />
        </ImageWrapper>
      </div>
      <div className="col-12 col-sm-8 col-lg-9">
        <ArticleMiniature title={props.article.title} perex={props.article.perex}>
          <div className="my-2">
            <ArticleCreationInfo createdAt={props.article.createdAt} author="No author?" />
          </div>
        </ArticleMiniature>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <Link to={Routes.articles.detail(props.article.articleId)} className="btn btn-link">
            Read whole article
          </Link>
          <span className="ml-4 text-black-50">xy comments</span>
        </div>
      </div>
    </div>
  );
};
