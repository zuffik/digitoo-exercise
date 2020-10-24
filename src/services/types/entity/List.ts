import {Pagination} from './Pagination';

export interface List<T> {
  pagination: Pagination;
  items: T[];
}
