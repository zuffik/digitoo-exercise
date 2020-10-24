import * as React from 'react';
import {FaExclamationTriangle} from 'react-icons/fa';
import {IconBaseProps} from 'react-icons';
import classNames from 'classnames';
import styles from './Warning.module.sass';

interface Props extends IconBaseProps {}

export const Warning: React.FC<Props> = (props: Props) => {
  return <FaExclamationTriangle {...props} className={classNames(props.className, styles.warning)} />;
};
