import Section from '../../components/Section';
import './HomePage.css';

import {
  ButtonPrimary,
} from '../../components/Buttons/ButtonComponents';
import Gallery from '../../components/Gallery';
import FeaturedProducts from '../../components/FeaturedProducts';
import BestSellers from '../../components/BestSellers';
import MarketingBottom from '/nike-bottom.png';


const HomePage = () => {

  return (
    <div>
      {/* <Gallery /> */}

      {/* Seção de Produtos em destaque */}
      <Section title='Produtos em destaque'>
        <FeaturedProducts />
      </Section>


      {/* Seção de Campeões de vendas */}
      <Section
        title='Campeões de vendas'
        link={{ text: 'Ver todos', href: '/collections' }}
      >
        <BestSellers />
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
