import ProductCard from '../ProductCard';
import './ProductListing.css';

const ProductListing = ({ products, isPageProducts }) => {
  return (
    <div className={`product-listing-container ${isPageProducts ? 'is-page-products' : ''}`}>
      <div className='content-limit'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
