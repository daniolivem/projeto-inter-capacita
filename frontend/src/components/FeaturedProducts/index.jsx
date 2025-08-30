import './FeaturedProducts.css';
import { ButtonSecundary } from '../Buttons/ButtonComponents';
import { featuredProductsData } from '../../data/featuredProducts';

const FeaturedProducts = () => {
  // Processa os dados adicionando função de compra
  const featuredProducts = featuredProductsData.map(product => ({
    ...product,
    onBuy: () => window.location.href = '/404' //retorna para a página 404
  }));

  // Validação de segurança
  if (!featuredProducts || featuredProducts.length === 0) {
    return (
      <section className='featured-products'>
        
      </section>
    );
  }

  return (
    <section className='featured-products'>
      {featuredProducts.map((product, index) => (
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
              {product.buttonText || 'Ver mais'}
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
