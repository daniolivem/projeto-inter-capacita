import { useCart } from '../../contexts/CartContext'; // Importe o hook
import { ButtonPrimary } from '../Buttons/ButtonComponents';
import './ProductCard.css';
import { Link } from 'react-router-dom'; // Import Link

function ProductCard({ product }) {
  const { addToCart } = useCart(); // Use o hook para acessar a função
  const { id, image, name, price, priceDiscount, tagValue } = product; // Desestruturar props de 'product'

  // Formatar os preços para exibição em formato R$ XX,XX
  const formatPrice = value => {
    if (typeof value !== 'number') {
      // Adiciona uma verificação para garantir que o valor é um número
      // ou retorna um valor padrão ou lança um erro, dependendo da lógica desejada.
      console.error('Invalid price value:', value);
      return 'N/A';
    }
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleAddToCart = () => {
    // Pass the image URL as 'imageUrl' when adding to cart
    // Certifique-se que product.id está disponível se for usado no CartContext
    addToCart({ ...product, imageUrl: image }); // Usar a imagem do produto desestruturada
  };

  return (
    <div className="product-card">
      {/* Link envolve a maior parte do card, exceto o botão de adicionar ao carrinho */}
      <Link to={`/produtos/${id}`} className='product-link'>
        <div className='card-product'>
          {tagValue && <div className='discount'>{tagValue}</div>}
          <img src={image} alt={name} />
        </div>
        {/* Esta categoria parece estática, pode ser dinâmica se necessário */}
        <h4>{name}</h4>
        <div className='card-info'>
          {priceDiscount && priceDiscount > 0 ? (
            <>
              <p className='original-price'>R$ {formatPrice(price)}</p>
              <p className='discount-price'>R$ {formatPrice(priceDiscount)}</p>
            </>
          ) : (
            <p>R$ {formatPrice(price)}</p>
          )}
        </div>
      </Link>
      {/* Botão Adicionar ao Carrinho fica fora do Link para ter sua própria ação */}
      <ButtonPrimary className="mobile btn-add-to-cart desktop" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </ButtonPrimary>
    </div>
  );
}

export default ProductCard;
