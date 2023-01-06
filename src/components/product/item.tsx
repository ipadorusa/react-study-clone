import { Product } from "../../types";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title
} : Product) => {
  return (
    <li>
      <p>{category}</p>
      <p>{description}</p>
      {id}
      <img src={image} />
      <span>${price}</span>
      <span>{rating.count}</span>
      <span>{title}</span>
    </li>
  )
}

export default ProductItem;
