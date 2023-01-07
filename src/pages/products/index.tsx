import { useQuery } from 'react-query';
import ProductItem from '../../components/product/item';
import { Product } from '../../types';
import { fetcher, QueryKeys } from '../../queryClient';

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: 'GET',
      path: '/products',
    }),
  );
  return (
    <>
      <h2>상품목록</h2>
      <ul className='products'>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
