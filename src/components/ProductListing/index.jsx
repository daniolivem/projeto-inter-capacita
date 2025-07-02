import ProductCard from '../ProductCard';
import './ProductListing.css';

const ProductListing = ({ products, isPageProducts }) => {
  return (
    <div className={`product-listing-container ${isPageProducts ? 'is-page-products' : ''}`}>
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
    </div>
  );
};

export default ProductListing;
