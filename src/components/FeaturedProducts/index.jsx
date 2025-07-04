import './FeaturedProducts.css';
import { ButtonSecundary } from '../Buttons/ButtonComponents';
import { featuredProductsData } from '../../data/featuredProducts';

const FeaturedProducts = () => {
  // Mapeamento das imagens usando caminhos públicos
  const imageMap = {
    '../assets/images/rizenproc.png': '/images/rizenproc.png',
    '../assets/images/gws.png': '/images/gws.png',
    '../assets/images/ipodmax.png': '/images/ipodmax.png'
  };

  // Processa os dados adicionando as imagens corretas
  const featuredProducts = featuredProductsData.map(product => ({
    ...product,
    image: imageMap[product.image] || product.image,
    onBuy: () => console.log(`Comprar ${product.title}`)
  }));

  // Validação de segurança
  if (!featuredProducts || featuredProducts.length === 0) {
    return (
      <section className='featured-products'>
        <p>Nenhum produto em destaque disponível.</p>
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
