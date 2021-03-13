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
  let params;

  if (search) {
    params = new URLSearchParams({
      search,
      limit: '' + limit,
      page: '' + page,
    });
  } else {
    params = new URLSearchParams({ limit: '' + limit, page: '' + page });
  }

  if (promo) params.set('promo', 'true');
  if (active) params.set('active', 'true');

  return params;
};

export const fetchProducts = async ({ queryKey }: Props) => {
  const [, queryVariables] = queryKey;

  const url =
    process.env.REACT_APP_API_URL + '/products?' + getParams(queryVariables);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong. Try again later...');
  }

  return response.json();
};
