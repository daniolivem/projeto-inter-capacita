import Section from '../../components/Section';
import Collection1 from '/collection-1.png';
import Collection2 from '../../assets/images/samsung-galaxy-book-4-pro-16.avif';
import Collection3 from '/collection-3.png';
import './HomePage.css';

import {
  ButtonPrimary,
} from '../../components/Buttons/ButtonComponents';
import Gallery from '../../components/Gallery';
import ProductListing from '../../components/ProductListing';
import FeaturedProducts from '../../components/FeaturedProducts';
import MarketingBottom from '/nike-bottom.png';
import products from '../../data/products.json';

// const cardsCircle = [
//   {
//     id: 1,
//     image: Camiseta,
//     title: 'Camisetas',
//   },
//   {
//     id: 2,
//     image: Pants,
//     title: 'Calças',
//   },
//   {
//     id: 3,
//     image: Sneakers,
//     title: 'Tênis',
//   },
//   {
//     id: 4,
//     image: Chap,
//     title: 'Chapéus',
//   },
//   {
//     id: 5,
//     image: Headphone,
//     title: 'Headphones',
//   },
// ];

const HomePage = () => {
  const windowWidth = window.innerWidth;

  // Dados dos produtos em destaque
  const featuredProducts = [
    {
      title: 'Processadores',
      image: Collection1,
      discount: 15,
      buttonText: 'Comprar',
      onBuy: () => console.log('Comprar Processadores')
    },
    {
      title: 'Samsung',
      image: Collection2,
      tag: '15% off',
      buttonText: 'Comprar',
      onBuy: () => console.log('Comprar Samsung')
    },
    {
      title: 'Apple',
      image: Collection3,
      tag: '14% off',
      buttonText: 'Comprar',
      onBuy: () => console.log('Comprar Apple')
    }
  ];

  return (
    <div>
      {/* <Gallery /> */}

      {/* Seção de Produtos em destaque */}
      <Section title='Produtos em destaque'>
        <FeaturedProducts products={featuredProducts} />
      </Section>

      {/* Seção de Coleções em destaque  (icons circles)
      <Section
        title='Coleçoes em destaque'
        titleAlign={windowWidth <= 1024 ? 'left' : 'center'}
      >
        <section className='container-circles'>
          {cardsCircle.map(card => (
            <div className='content' key={card.id}>
              <div className='content-image'>
                <img src={card.image} alt={card.title} />
              </div>
              <p>{card.title}</p>
            </div>
          ))}
        </section>
      </Section> */}

      {/* Seção de Produtos em alta */}
      <Section
        title='Produtos em alta'
        link={{ text: 'Ver todos', href: '/collections' }}
      >
        <ProductListing products={products} />
      </Section>

      {/* Seção Marketing Bottom */}
      <Section $paddingBottom>
        <section className='container-bottom'>
          <div className='content-bottom-left'>
            <div className='content-bottom-image'>
              <img src={MarketingBottom} alt='Marketing Bottom' />
            </div>
          </div>

          <div className='content-bottom-right'>
            <h4>Oferta especial</h4>
            <h3>Air Jordan edição de colecionador</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quam consequuntur dolorum laborum est neque quisquam assumenda.
              Suscipit, provident? Debitis cum minima temporibus animi sint modi
              nihil excepturi molestiae ipsa.
            </p>
            <ButtonPrimary className="mobile desktop">
              Ver Oferta
            </ButtonPrimary>
          </div>
        </section>
      </Section>
    </div>
  );
};

export default HomePage;
