import * as React from 'react';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa';
import styles from './TableSortInfo.module.sass';
import classNames from 'classnames';

interface Props {
    desc?: boolean;
    isSorted?: boolean;
}

export const TableSortInfo: React.FC<Props> = (props: Props) => {
    return (
        <div className="pl-2">
            <FaCaretUp
                className={classNames(styles.icon, {[styles.iconActive]: props.isSorted && props.desc})}
            />
            <FaCaretDown
                className={classNames(styles.icon, {[styles.iconActive]: props.isSorted && !props.desc})}
            />
        </div>
    );
};
