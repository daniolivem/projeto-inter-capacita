import './FeaturedProducts.css';
import { ButtonSecundary } from '../Buttons/ButtonComponents';

const FeaturedProducts = ({ products }) => {
  return (
    <section className='featured-products'>
      {products.map((product, index) => (
        <div className='featured-card' key={index}>
          <div className='featured-card-info'>
            <div className='featured-card-tag'>
              {product.discount && (
                <>
                  <span>{product.discount}%</span>
                  <span>OFF</span>
                </>
              )}
              {!product.discount && <span>{product.tag}</span>}
            </div>

            <h3>{product.title}</h3>
            <ButtonSecundary onClick={product.onBuy}>
              {product.buttonText || 'Comprar'}
            </ButtonSecundary>
          </div>

          <div className='featured-card-image'>
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;
