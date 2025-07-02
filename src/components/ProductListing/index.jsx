import ProductCard from '../ProductCard';
import { Container } from './styles';

const ProductListing = ({ products, $isPageProducts }) => {
  return (
    <Container $isPageProducts={$isPageProducts}>
      <div className='content-limit'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
            tagValue={product.tagValue}
            product={product} // Pass the entire product object
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductListing;
