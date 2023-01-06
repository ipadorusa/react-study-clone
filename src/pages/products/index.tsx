import { useQuery } from "react-query"
import ProductItem from "../../components/product/item"
import { Product } from "../../types"
import { fetcher, QueryKeys } from "../queryClient"


const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
    method: 'GET',
    path: '/products'
  }))
 return (
    <>
      <ul>
        {
          data?.map(product => (
            <ProductItem {...product} key={product.id} />
          ))
        }
      </ul>
    </>
  )
}

export default ProductList