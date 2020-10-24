import * as React from 'react';
import {ArticleDetail as ArticleDetailDTO} from '../../../../services/types/entity/ArticleDetail';
import {ArticleCreationInfo} from '../ArticleCreationInfo/ArticleCreationInfo';
import styles from './ArticleDetail.module.sass';

interface Props {
  article: ArticleDetailDTO;
  image: React.ReactNode;
}

export const ArticleDetail: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h2 className="mb-4">{props.article.title}</h2>
      <ArticleCreationInfo format="D.M.YYYY" createdAt={props.article.createdAt} author="No author?" />
      <div className="my-4">{props.image}</div>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: props.article.content}} />
    </>
  );
};
