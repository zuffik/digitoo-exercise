import * as React from 'react';
import {Pagination as PaginationDTO} from '../../../services/types/entity/Pagination';
import {Alert} from '../../elementary/Alert/Alert';
import {Pagination} from "../../elementary/Pagination/Pagination";

interface Props<T> {
    items: T[];
    pagination: PaginationDTO;
    render: (item: T, index: number) => React.ReactNode;
    noItemsText?: React.ReactText;
    onOffsetChange?: (offset: number, limit: number) => void;
    limit?: number;
}

export const ListView = <T extends any>(props: Props<T>) => {
    return (
        <>
            {props.items.length === 0 && <Alert type="warning">{props.noItemsText || 'No items'}</Alert>}
            {props.items.map(props.render)}
            {
                props.onOffsetChange && (
                    <Pagination onOffsetChange={props.onOffsetChange}
                                pagination={props.pagination}
                                limit={props.limit}/>
                )
            }
        </>
    );
};
