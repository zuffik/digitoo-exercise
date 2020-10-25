import * as React from 'react';
import classNames from 'classnames';
import {Colors} from '../../../../services/types/lib/bootstrap/Colors';
import {Spinner} from '../../progress/Spinner/Spinner';
import styles from './Button.module.sass';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  loading?: boolean;
  large?: boolean;
}

export const Button: React.FC<Props> = ({loading, color, large, ...props}: Props) => {
  const btnColor = color || 'primary';
  const disabled = loading || props.disabled;
  return (
    <button
      {...props}
      data-testid="btn"
      className={classNames(props.className, styles.btn, 'btn', `btn-${btnColor}`, large && 'btn-lg')}
      disabled={disabled}
    >
      <span
          data-testid="btn-label"
          className={classNames(styles.inner, {
          [styles.innerHidden]: loading,
        })}
      >
        {props.children}
      </span>
      <span
          data-testid="btn-spinner"
          className={classNames(styles.spinner, {
          [styles.spinnerVisible]: loading,
        })}
      >
        <Spinner size={20} />
      </span>
    </button>
  );
};
