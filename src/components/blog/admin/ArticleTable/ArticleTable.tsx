import * as React from 'react';
import {List} from '../../../../services/types/entity/List';
import {Article} from '../../../../services/types/entity/Article';
import {Column, useSortBy, UseSortByColumnProps, useTable} from 'react-table';
import {TableBasicActionButtons} from '../../../table/TableBasicActionButtons/TableBasicActionButtons';
import {TableSortInfo} from '../../../table/TableSortInfo/TableSortInfo';
import {TextEllipsis} from '../../../elementary/TextEllipsis/TextEllipsis';
import {Pagination} from "../../../elementary/Pagination/Pagination";

interface Props {
  articles: List<Article>;
  onEditArticleClick: (articleId: string) => void;
  onRemoveArticleClick: (articleId: string) => void;
    onOffsetChange: (offset: number, limit: number) => void;
}

export const ArticleTable: React.FC<Props> = (props: Props) => {
  const {onEditArticleClick, onRemoveArticleClick} = props;
  const columns = React.useMemo(
    (): Column<Article>[] => [
      {
        Header: 'Article title',
        accessor: 'title',
      },
      {
        Header: 'Perex',
        accessor: 'perex',
      },
      {
        Header: 'Author',
        accessor: () => 'no author?',
      },
      {
        Header: '# of comments',
        accessor: () => 10, // no comments?
      },
      {
        Header: 'Actions',
        accessor: 'articleId',
        disableSortBy: true,
        Cell: ({value}) => (
          <TableBasicActionButtons
            onEditClick={() => onEditArticleClick(value)}
            onRemoveClick={() => onRemoveArticleClick(value)}
          />
        ),
      } as Column<Article>,
    ],
    [onEditArticleClick, onRemoveArticleClick]
  );
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable(
    {
      columns,
      data: props.articles.items,
    },
    useSortBy
  );
  return (
    <>
      <div className="table-responsive-md">
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((group) => (
              <tr {...group.getHeaderGroupProps()}>
                {group.headers.map((col) => {
                  const sortByCol: UseSortByColumnProps<Article> = (col as unknown) as UseSortByColumnProps<
                    Article
                  >;
                  return (
                    <th
                      {...col.getHeaderProps(sortByCol.getSortByToggleProps())}
                      className="text-nowrap align-top"
                    >
                      <div className="d-flex flex-row justify-content-between">
                        {col.render('Header')}
                        {sortByCol.canSort && (
                          <TableSortInfo isSorted={sortByCol.isSorted} desc={sortByCol.isSortedDesc} />
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      <TextEllipsis maxWidth={400}>{cell.render('Cell')}</TextEllipsis>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination onOffsetChange={props.onOffsetChange} pagination={props.articles.pagination}/>
    </>
  );
};
