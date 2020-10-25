import * as React from 'react';
import ReactPaginate from "react-paginate";
import {Pagination as PaginationDTO} from "../../../services/types/entity/Pagination";

interface Props {
    onOffsetChange: (offset: number, limit: number) => void;
    limit?: number;
    pagination: PaginationDTO;
}

export const Pagination: React.FC<Props> = (props: Props) => {
    const limit = props.limit || 10;
    return (
        <>
            <ReactPaginate previousClassName="page-item"
                           previousLinkClassName="page-link"
                           nextClassName="page-item"
                           nextLinkClassName="page-link"
                           containerClassName="pagination justify-content-center"
                           pageClassName="page-item"
                           pageLinkClassName="page-link"
                           activeClassName="page-item active"
                           activeLinkClassName="page-link"
                           onPageChange={item => props.onOffsetChange(item.selected * limit, limit)}
                           disableInitialCallback
                           pageCount={Math.ceil(props.pagination.total / limit)}
                           marginPagesDisplayed={3}
                           pageRangeDisplayed={3}
                           initialPage={props.pagination.offset / limit}/>
        </>
    );
};
