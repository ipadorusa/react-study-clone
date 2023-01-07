import { Product } from '../../types';

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => (
  <div>
    <div className='product-detail'>
      <p className='product-detail__category'>{category}</p>
      <p className='product-detail__title'>{title}</p>
      <img className='product-detail__image ' src={image} alt='' />
      <p className='product-detail__description'>{description}</p>
      <p className='product-detail__price'>{price}</p>
      <p className='product-detail__rate'>{rate}</p>
    </div>
  </div>
);

export default ProductDetail;
