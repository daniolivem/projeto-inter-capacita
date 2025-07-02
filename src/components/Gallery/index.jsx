import { useState } from 'react';
import QueimaEstoque from '../../assets/images/queima-estoque.png';
import OrnamentImg from '../../assets/icons/Ornament.png';
import { ButtonPrimary } from '../Buttons/styles';
import { Container } from './styles';

import Slide01 from '../../assets/bg-removed/home-slide-01.svg';

import Slide3 from '../../assets/bg-removed/home-slide-3.png';
import Slide4 from '../../assets/bg-removed/home-slide-4.png';
import Slide5 from '../../assets/bg-removed/home-slide-5.png';
import Slide6 from '../../assets/bg-removed/home-slide-6.png';
import Slide7 from '../../assets/bg-removed/home-slide-7.png';
import Slide8 from '../../assets/bg-removed/home-slide-8.png';

// Array com todos os slides disponíveis
const slides = [
  {
    id: 1,
    image: Slide01,
    title: 'Nike Air Force 1',
    description: 'Tênis clássico com design atemporal para o dia a dia.',
  },
  {
    id: 2,
    image: Slide3,
    title: 'Nike Running Pro',
    description: 'Performance e conforto para suas corridas diárias.',
  },
  {
    id: 3,
    image: Slide4,
    title: 'Nike SB Dunk',
    description: 'O favorito dos skatistas com durabilidade superior.',
  },
  {
    id: 4,
    image: Slide3,
    title: 'Nike Air Max',
    description: 'Amortecimento visível para máximo conforto.',
  },
  {
    id: 5,
    image: Slide8,
    title: 'Nike Jordan',
    description: 'Estilo icônico inspirado no basquete.',
  },
  {
    id: 6,
    image: Slide6,
    title: 'Nike Free',
    description: 'Sensação natural com flexibilidade aumentada.',
  },
  {
    id: 7,
    image: Slide7,
    title: 'Nike React',
    description: 'Tecnologia responsiva para cada passada.',
  },
  {
    id: 8,
    image: Slide8,
    title: 'Nike Blazer',
    description: 'Nike o Visual retrô com toques modernos. ',
  },
];

const Gallery = () => {
  // Estado para controlar qual slide está ativo
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para mudar de slide quando clicar nos indicadores
  const goToSlide = index => {
    setCurrentSlide(index);
  };

  return (
    <Container>
      <div className='content-gallery'>
        <div className='content-info'>
          <h2>Melhores ofertas personalizadas</h2>
          <div className='content-image-text'>
            <img src={QueimaEstoque} alt='Texto com uma imagem de fogo' />
          </div>

          {/* Exibindo o título e descrição do slide atual */}
          <p>
            {slides[currentSlide].title}: {slides[currentSlide].description}
          </p>

          <ButtonPrimary $mobile $desktop>
            Ver Ofertas
          </ButtonPrimary>
        </div>

        <div className='content-image'>
          {/* Exibindo a imagem do slide atual */}
          <img
            src={slides[currentSlide].image}
            alt={`Tênis ${slides[currentSlide].title}`}
            className='slide-image'
          />
        </div>

        <div className='content-image-icon'>
          <img src={OrnamentImg} alt='Desenho de estrelas amarelas' />
        </div>
      </div>

      {/* Indicadores de slide ( as bolinhas) */}
      <div className='content-setas'>
        {/* Mapeando o array de slides para criar um indicador para cada slide */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            // Aplicando uma classe ativa para o slide atual
            className={currentSlide === index ? 'active' : ''}
            // Ao clicar, mudamos para o slide correspondente
            onClick={() => goToSlide(index)}
            // Adicionando um atributo de título para acessibilidade
            title={`Ver ${slide.title}`}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
