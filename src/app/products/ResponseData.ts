import { ItemProps } from 'components/ItemCard';

interface Meta {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface ResponseData {
  items: ItemProps[];
  meta: Meta;
  links: Links;
}
