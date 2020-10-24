import * as React from 'react';
import classNames from 'classnames';
import styles from './TextEllipsis.module.sass';

interface Props extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  maxWidth?: number;
}

export const TextEllipsis: React.FC<Props> = (props: Props) => {
  const maxWidth = props.maxWidth || 'none';
  return (
    <span
      {...props}
      className={classNames(props.className, styles.text)}
      style={{...props.style, maxWidth: typeof maxWidth == 'number' ? maxWidth + 'px' : maxWidth}}
    />
  );
};
