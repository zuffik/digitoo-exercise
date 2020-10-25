import * as React from 'react';
import styles from './ImageWrapper.module.sass'

interface Props {
    children: React.ReactNode;
    height: number;
}

export const ImageWrapper: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles.root} data-testid="image-wrapper" style={{height: props.height + 'px'}}>
            {props.children}
        </div>
    );
};
