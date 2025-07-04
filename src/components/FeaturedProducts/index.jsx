import './FeaturedProducts.css';
import { ButtonSecundary } from '../Buttons/ButtonComponents';
import { featuredProductsData } from '../../data/featuredProducts';
import RyzenProc from '../../assets/images/rizenproc.png';
import IpodMax from '../../assets/images/ipodmax.png';
import Samsung from '../../assets/images/gws.png';


const FeaturedProducts = () => {
  // Mapeamento das imagens (necessário devido aos imports)
  const imageMap = {
    '../assets/images/rizenproc.png': RyzenProc,
    '../assets/images/gws.png': Samsung,
    '../assets/images/ipodmax.png': IpodMax
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
