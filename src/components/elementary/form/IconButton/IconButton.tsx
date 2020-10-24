import * as React from 'react';
import classNames from 'classnames';
import styles from './IconButton.module.sass';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const IconButton: React.FC<Props> = (props: Props) => {
    return (
        <button {...props} className={classNames(props.className, styles.btn)}/>
    );
};
