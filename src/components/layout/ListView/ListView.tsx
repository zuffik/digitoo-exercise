import * as React from 'react';
import {Pagination} from '../../../services/types/entity/Pagination';
import {Alert} from '../../elementary/Alert/Alert';

interface Props<T> {
    items: T[];
    pagination: Pagination;
    render: (item: T, index: number) => React.ReactNode;
    noItemsText?: React.ReactText;
}

export const ListView = <T extends any>(props: Props<T>) => {
    return (
        <>
            {props.items.length === 0 && <Alert type="warning">{props.noItemsText || 'No items'}</Alert>}
            {props.items.map(props.render)}
            {/*todo pagination*/}
        </>
    );
};
