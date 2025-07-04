import { useState } from 'react';
import { ButtonPrimary } from '../Buttons/ButtonComponents';
import './Gallery.css';

// Array com todos os slides disponíveis (usando imagens que existem)
const slides = [
  {
    id: 1,
    image: "/images/iphone-15-pro-max.jpg",
    title: 'iPhone 15 Pro Max',
    description: 'Smartphone premium com design atemporal para o dia a dia.',
  },
  {
    id: 2,
    image: "/images/rizenproc.png",
    title: 'Processador Ryzen',
    description: 'Performance e velocidade para suas tarefas diárias.',
  },
  {
    id: 3,
    image: "/images/ipodmax.png",
    title: 'iPod Max',
    description: 'O favorito dos audiófilos com qualidade superior.',
  },
  {
    id: 4,
    image: "/images/gws.png",
    title: 'Gaming Headset',
    description: 'Som imersivo para máximo conforto nos jogos.',
  },
  {
    id: 5,
    image: "/images/tecnobits.png",
    title: 'TecnoBits Store',
    description: 'Estilo icônico da nossa marca.',
  },
  {
    id: 6,
    image: "/images/iphone-15-pro-max.jpg",
    title: 'iPhone 15 Pro Max',
    description: 'Design natural com flexibilidade aumentada.',
  },
  {
    id: 7,
    image: "/images/rizenproc.png",
    title: 'Ryzen Processor',
    description: 'Tecnologia responsiva para cada tarefa.',
  },
  {
    id: 8,
    image: "/images/ipodmax.png",
    title: 'iPod Max',
    description: 'Visual retrô com toques modernos.',
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
    <div className="gallery-container">
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
          <img src="/images/Ornament.png" alt='Desenho de estrelas amarelas' />
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
    </div>
  );
};

export default Gallery;
