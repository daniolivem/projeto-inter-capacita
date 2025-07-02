import Section from '../../components/Section';
import Collection1 from '../../public/collection-1.png';
import Collection2 from '../../public/collection-2.png';
import Collection3 from '../../public/collection-3.png';
import { ContainerBottom, ContainerCircles, ContentCard } from './styles';
import Camiseta from '../../assets/images/camiseta.png';
import Pants from '../../assets/images/pants.png';
import Sneakers from '../../assets/images/sneakers.png';
import Chap from '../../assets/images/chap.png';
import Headphone from '../../assets/images/headphone.png';

import {
  ButtonPrimary,
  ButtonSecundary,
} from '../../components/Buttons/styles';
import Gallery from '../../components/Gallery';
import ProductListing from '../../components/ProductListing';
import Thumb1 from '../../public/product-thumb-1.svg';
import Thumb3 from '../../public/product-thumb-3.svg';
import Thumb4 from '../../public/product-thumb-4.svg';
import MarketingBottom from '../../public/nike-bottom.png';

const cardsCircle = [
  {
    id: 1,
    image: Camiseta,
    title: 'Camisetas',
  },
  {
    id: 2,
    image: Pants,
    title: 'Calças',
  },
  {
    id: 3,
    image: Sneakers,
    title: 'Tênis',
  },
  {
    id: 4,
    image: Chap,
    title: 'Chapéus',
  },
  {
    id: 5,
    image: Headphone,
    title: 'Headphones',
  },
];

// Array de produtos com valores de desconto pré-calculados
const products = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    image: Thumb1,
    price: 200,
    priceDiscount: 140, // 30% de desconto: 200 - (200 * 0.3) = 140
    tagValue: '30% Off',
  },
  {
    id: 2,
    name: 'Nike Air Force 2',
    image: Thumb1,
    price: 150,
    priceDiscount: 105, // 30% de desconto: 150 - (150 * 0.3) = 105
    tagValue: '30% Off',
  },
  {
    id: 3,
    name: 'Nike Air Force 3',
    image: Thumb3,
    price: 300,
    priceDiscount: 210, // 30% de desconto: 300 - (300 * 0.3) = 210
  },
  {
    id: 4,
    name: 'Nike Air Force 4',
    image: Thumb4,
    price: 100,
    priceDiscount: 70, // 30% de desconto: 100 - (100 * 0.3) = 70
  },
  {
    id: 5,
    name: 'Nike Air Force 5',
    image: Thumb1,
    price: 200,
    priceDiscount: 140, // 30% de desconto: 200 - (200 * 0.3) = 140
  },
  {
    id: 6,
    name: 'Nike Air Force 6',
    image: Thumb4,
    price: 150,
    priceDiscount: 105, // 30% de desconto: 150 - (150 * 0.3) = 105
  },
  {
    id: 7,
    name: 'Nike Air Force 7',
    image: Thumb3,
    price: 300,
    priceDiscount: 210, // 30% de desconto: 300 - (300 * 0.3) = 210
  },
  {
    id: 8,
    name: 'Nike Air Force 8',
    image: Thumb4,
    price: 100, // Sem desconto conforme o exemplo original
    priceDiscount: 70, // 30% de desconto: 100 - (100 * 0.3) = 70
  },
];

const HomePage = () => {
  const windowWidth = window.innerWidth;

  return (
    <div>
      <Gallery />

      {/* Seção de Coleções em destaque (cards) */}
      <Section title='Coleçoes em destaque'>
        <ContentCard>
          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>
                <span>30%</span>
                <span>OFF</span>
              </div>

              <h3>Novo drop Supreme</h3>
              <ButtonSecundary>Comprar</ButtonSecundary>
            </div>

            <div className='card-image'>
              <img src={Collection1} alt='Coleção 1' />
            </div>
          </div>

          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>30% off</div>
              <h3>Novo drop Supreme</h3>
              <ButtonSecundary>Comprar</ButtonSecundary>
            </div>
            <div className='card-image'>
              <img src={Collection2} alt='Coleção 1' />
            </div>
          </div>

          <div className='card'>
            <div className='card-info'>
              <div className='card-tag'>30% off</div>
              <h3>Novo drop Supreme</h3>
              <ButtonSecundary>Comprar</ButtonSecundary>
            </div>
            <div className='card-image'>
              <img src={Collection3} alt='Coleção 1' />
            </div>
          </div>
        </ContentCard>
      </Section>

      {/* Seção de Coleções em destaque  (icons circles)*/}
      <Section
        title='Coleçoes em destaque'
        titleAlign={windowWidth <= 1024 ? 'left' : 'center'}
      >
        <ContainerCircles>
          {cardsCircle.map(card => (
            <div className='content' key={card.id}>
              <div className='content-image'>
                <img src={card.image} alt={card.title} />
              </div>
              <p>{card.title}</p>
            </div>
          ))}
        </ContainerCircles>
      </Section>

      {/* Seção de Produtos em alta */}
      <Section
        title='Produtos em alta'
        link={{ text: 'Ver todos', href: '/collections' }}
      >
        <ProductListing products={products} />
      </Section>

      {/* Seção Marketing Bottom */}
      <Section $paddingBottom>
        <ContainerBottom>
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
            <ButtonPrimary $mobile $desktop>
              Ver Oferta
            </ButtonPrimary>
          </div>
        </ContainerBottom>
      </Section>
    </div>
  );
};

export default HomePage;
