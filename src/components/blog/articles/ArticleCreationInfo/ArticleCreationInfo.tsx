import * as React from 'react';
import styles from './ArticleCreationInfo.module.sass';
import moment from 'moment';

interface Props {
  createdAt: string;
  author: string;
  format?: string;
}

export const ArticleCreationInfo: React.FC<Props> = (props: Props) => {
  const format = props.format || 'DD/MM/YY';
  return (
    <div className={styles.articleCreationInfo}>
      <span className={styles.text}>{props.author}</span>
      <span className={styles.circle} />
      <span className={styles.text}>{moment(props.createdAt).format(format)}</span>
    </div>
  );
};
