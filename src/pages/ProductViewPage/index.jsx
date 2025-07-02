import React, { useState } from 'react';
import './styles.css'; 
import { useCart } from '../../contexts/CartContext'; // Seu hook do carrinho

// Cores dos backgrounds dos thumbnails, extraídas do seu ProductViewPage.css
const THUMBNAIL_CSS_COLORS = [
  '#E2E3FF', // Cor para o thumbnail :nth-child(1)
  '#FFE8BC', // Cor para o thumbnail :nth-child(2)
  '#FFC0BC', // Cor para o thumbnail :nth-child(3)
  '#DEC699', // Cor para o thumbnail :nth-child(4)
  '#E8DFCF', // Cor para o thumbnail :nth-child(5)
];

const ProductViewPage = () => {
  const { addToCart } = useCart();

  // Mock product data
  const product = {
    id: 1,
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    price: 200.00,
    priceDiscount: 100.00,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    // Idealmente, você teria imagens diferentes para cada thumbnail/cor
    images: [
      '/src/assets/images/tenis.png', // Imagem para thumbnail 1
      '/src/assets/images/tenis.png', // Imagem para thumbnail 2 (ou tenis_variant2.png)
      '/src/assets/images/tenis.png', // Imagem para thumbnail 3 (ou tenis_variant3.png)
      '/src/assets/images/tenis.png', // Imagem para thumbnail 4 (ou tenis_variant4.png)
      '/src/assets/images/tenis.png', // Imagem para thumbnail 5 (ou tenis_variant5.png)
    ],
    sizes: [39, 40, 41, 42, 43],
    colors: ['#00FFFF', '#FF0000', '#800080', '#000000'], // Cores para os seletores de cor do produto
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null); // Cor do produto selecionada nos swatches
  const [mainImage, setMainImage] = useState(product.images[0]);

  // Estado para a cor de fundo do wrapper da imagem principal e índice do thumbnail ativo
  const [mainImageBg, setMainImageBg] = useState(
    THUMBNAIL_CSS_COLORS.length > 0 ? THUMBNAIL_CSS_COLORS[0] : 'transparent'
  );
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);


  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Handler para seleção de cor do produto (swatches)
  const handleProductColorSelect = (color) => {
    setSelectedColor(color);
    // Aqui você pode adicionar lógica se a seleção de cor do produto também deve mudar a imagem principal
    // ou o fundo da imagem principal, se houver uma correspondência.
  };

  // Handler para clique no thumbnail
  const handleThumbnailClick = (imageSrc, index) => {
    setMainImage(imageSrc);
    setActiveThumbnailIndex(index);
    if (THUMBNAIL_CSS_COLORS[index]) {
      setMainImageBg(THUMBNAIL_CSS_COLORS[index]);
    } else {
      setMainImageBg('transparent'); // Fallback
    }
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      addToCart({
        ...product, // Espalha as propriedades base do produto
        price: product.priceDiscount, // Certifique-se de enviar o preço correto para o carrinho
        selectedSize,
        selectedColor, // Esta é a cor do produto selecionada nos swatches
        imageUrl: mainImage,
      });
      console.log('Adding to cart:', product.name, 'Size:', selectedSize, 'Color:', selectedColor);
    } else {
      // Considerar substituir alert por um feedback de UI mais integrado
      alert('Por favor, selecione um tamanho e uma cor antes de adicionar ao carrinho.');
    }
  };

  return (
    // Usa a classe CSS definida em ProductViewPage.css
    <div className="product-view-container">
      <div className="breadcrumb">
        <span>Home</span><span>Produtos</span><span>{product.name}</span>
      </div>
        <div className="product-title">
        <p>Casual | Nike | REF:38416711</p>
        </div>
      <div className="product-details-section">
        <div className="image-gallery">
          {/* Wrapper para a imagem principal, com estilo para a variável CSS */}
          <div
            className="main-image-wrapper"
            style={{ '--main-image-bg-color': mainImageBg }}
          >
            <img src={mainImage} alt={product.name} className="main-image" />
          </div>

          <div className="thumbnails">
            {/* Mapeia as imagens do produto, limitado pelo número de cores de thumbnail definidas */}
            {product.images.slice(0, THUMBNAIL_CSS_COLORS.length).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`thumbnail ${activeThumbnailIndex === index ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(image, index)}
                // A cor de fundo do thumbnail em si é definida pelo CSS via :nth-child
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="rating">
          
            <link className="fa-star" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span> 4.7 (90 avaliações)</span>
          </div>
          <div className="price-info">
          <span className="current-price">R$ {product.priceDiscount.toFixed(2)}</span> &nbsp;
            {product.price > product.priceDiscount && (
              <span className="original-price">R$ {product.price.toFixed(2)}</span>
            )}
            
          </div>
          <p className="description">{product.description}</p>

          <div className="options">
            <div className="size-options">
              <h4>Tamanho</h4>
              <div className="buttons">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`option-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-options">
              <h4>Cor</h4>
              <div className="color-swatches">
                {product.colors.map((colorValue, index) => (
                  <div
                    key={index}
                    className={`color-swatch ${selectedColor === colorValue ? 'selected' : ''}`}
                    style={{ backgroundColor: colorValue }}
                    onClick={() => handleProductColorSelect(colorValue)}
                  />
                ))}
              </div>
            </div>
          </div>

          <button className="buy-button" onClick={handleAddToCart}>COMPRAR</button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductViewPage;
