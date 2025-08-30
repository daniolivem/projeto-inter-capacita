import Section from '../../components/Section';
import './HomePage.css';
import {
  ButtonPrimary,
} from '../../components/Buttons/ButtonComponents';
import Gallery from '../../components/Gallery';
import FeaturedProducts from '../../components/FeaturedProducts';
import BestSellers from '../../components/BestSellers';


const HomePage = () => {

  return (
    <div>
      <div className='banner'>
        <img src="/images/banner-principal.png" alt="asa" />
      </div>
      <Gallery />

      {/* Seção de Produtos em destaque */}
      <Section title='Produtos em destaque'>
        <FeaturedProducts />
      </Section>


      {/* Seção de Campeões de vendas */}
      <Section
        title='Campeões de vendas'
  
      >
        <BestSellers />
      </Section>
    </div>
  );
};

export default HomePage;
