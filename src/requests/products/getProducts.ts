import { ProductsData } from './ProductsData';

interface QueryVariables {
  search?: string;
  limit: number;
  page: number;
  promo: boolean;
  active: boolean;
}

type ProductsQueryKey = [string, QueryVariables];

interface Props {
  queryKey: ProductsQueryKey;
}

const getParams = ({ search, limit, page, promo, active }: QueryVariables) => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
  });

  if (search) params.set('search', search);
  if (promo) params.set('promo', 'true');
  if (active) params.set('active', 'true');

  return params;
};

export const getProducts = async ({
  queryKey,
}: Props): Promise<ProductsData> => {
  const [, queryVariables] = queryKey;

  const url =
    process.env.REACT_APP_API_URL + '/products?' + getParams(queryVariables);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong. Try again later...');
  }

  return response.json();
};
