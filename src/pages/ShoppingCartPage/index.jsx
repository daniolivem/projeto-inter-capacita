import React, { useState, useEffect } from 'react'; // Adicione useState e useEffect
import './ShoppingCartPage.css';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { InputDefault } from '../../components/Input';

const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const [cep, setCep] = useState(''); // Estado para o CEP
  const [shippingCost, setShippingCost] = useState(0); // Estado para o custo do frete
  // const [shippingOptions, setShippingOptions] = useState([]); // Opcional: para múltiplas opções de frete

  const subtotal = getCartTotal();
  // Remova o cálculo de desconto fixo daqui se ele depender do frete ou outras lógicas
  // const discount = subtotal * 0.50; 
  // O total será recalculado com base no shippingCost

  // Função para simular o cálculo de frete
  // Em um cenário real, isso faria uma chamada API para um serviço de cálculo de frete
  const calculateShipping = async (currentCep) => {
    if (currentCep.replace(/\D/g, '').length === 8) { // Verifica se o CEP tem 8 dígitos
      console.log(`Calculando frete para o CEP: ${currentCep}`);
      // Lógica de simulação de frete:
      // Esta é uma simulação MUITO simples. Substitua pela sua lógica real ou chamada API.
      if (currentCep.startsWith('01000')) { // Exemplo: CEP de São Paulo Capital
        setShippingCost(10.50);
        // setShippingOptions([{ name: 'SEDEX', cost: 15.00, days: 2 }, { name: 'PAC', cost: 10.50, days: 5 }]);
      } else if (currentCep.startsWith('20000')) { // Exemplo: CEP do Rio de Janeiro Capital
        setShippingCost(15.75);
      } else if (currentCep.startsWith('70000')) { // Exemplo: CEP de Brasília
        setShippingCost(12.00);
      } else {
        setShippingCost(25.00); // Um valor padrão para outros CEPs
      }
    } else {
      setShippingCost(0); // Reseta o frete se o CEP for inválido/incompleto
    }
  };

  const handleCepChange = (event) => {
    const newCep = event.target.value;
    setCep(newCep);
    // Opcional: calcular automaticamente ao digitar 8 dígitos
    if (newCep.replace(/\D/g, '').length === 8) {
      calculateShipping(newCep);
    }
  };

  const handleCalculateShippingClick = () => {
    calculateShipping(cep);
  };

  // Recalcula o total sempre que o subtotal ou o custo do frete mudar
  // Adicione o desconto aqui se ele for fixo ou baseado apenas no subtotal
  const discountPercentage = 0.50; // Ex: 50% de desconto sobre o subtotal
  const discount = subtotal * discountPercentage;
  const total = subtotal + shippingCost - discount;

  const handleContinueShopping = () => {
    navigate('/produtos');
  };

  const handleGoToCheckout = () => {
    navigate('/finalizar-compra'); // Adicione esta linha para redirecionar
  };

  return (
    <div className='shopping-cart-page'>
      <div className='breadcrumb'>
        <span>Home</span> / <span>Carrinho</span>
      </div>

      

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className='cart-content'>
          <div className='cart-items-and-actions-container'>
            <div className="cart-header">
              <p className="header-product-info">MEU CARRINHO</p> {/* Ajustado para abranger imagem e nome */}
              <p className="header-quantity">QUANTIDADE</p>
              <p className="header-unit-price">UNITÁRIO</p>
              <p className="header-total">TOTAL</p>
            </div>
            <div className='cart-items-list'>
              {cartItems.map(item => (
                <div key={item.id} className='cart-item'>
                  <div className="cart-item-product-info"> {/* Novo container para imagem e nome */}
                    <img
                      src={item.imageUrl || '/src/assets/images/kseriesv8.png'} // Fallback para imagem padrão
                      alt={item.name}
                      className='cart-item-image'
                    />
                    <div className='cart-item-details'>
                      <h3>{item.name}</h3>
                      {/* O preço unitário será exibido em sua própria coluna */}
                    </div>
                  </div>

                  <div className="cart-item-quantity"> {/* Nova div para quantidade */}
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div >
                      <button  className='remove-item-btn' onClick={() => removeFromCart(item.id)}>Remover ítem</button>
                    </div>
                  </div>
                  <div className="cart-item-unit-price"> {/* Nova div para preço unitário */}
                    <p>R$ {item.price ? item.price.toFixed(2) : '0.00'}</p>
                  </div>

                  <div className='cart-item-total-price'> {/* Renomeado para clareza e para conter apenas o total */}
                    <p>R$ {item.price ? (item.price * item.quantity).toFixed(2) : '0.00'}</p>
                  
                  </div>
                </div>
              ))}
            </div>

            <div className="coupon-shipping-container">
              <div className="coupon-section">
                <h4>Cupom de desconto</h4>
                <div className="coupon-input">
                  <InputDefault placeholder="Insira seu código" />
                  <button className="ok-button">OK</button>
                </div>
              </div>
              <div className="shipping-section">
                <h4>Calcular frete</h4>
                <div className="shipping-input">
                  <InputDefault 
                    placeholder="Insira seu CEP"
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={9} // Formato XXXXX-XXX
                  />
                  <button className="ok-button" onClick={handleCalculateShippingClick}>OK</button>
                </div>
                {/* Opcional: Mostrar opções de frete aqui */}
                {/* {shippingOptions.map(option => (
                  <div key={option.name}>
                    {option.name}: R$ {option.cost.toFixed(2)} ({option.days} dias)
                  </div>
                ))} */}
              </div>
            </div>
          </div>

          <div className='cart-summary'>
            <h3>Resumo do Pedido</h3>
            <div className='summary-row'>
              <span>Subtotal:</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className='summary-row'>
              <span>Frete:</span>
              {/* Exibe o custo do frete calculado */}
              <span>R$ {shippingCost.toFixed(2)}</span>
            </div>
            <div className='summary-row'>
              <span>Desconto:</span>
              {/* Certifique-se que o desconto está sendo calculado corretamente */}
              <span>- R$ {discount.toFixed(2)}</span>
            </div>
            <div className='summary-row total-row'>
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button className='checkout-button' onClick={handleGoToCheckout}>Ir para o Pagamento</button>
            <button className='continue-shopping-button' onClick={handleContinueShopping}>
              Continuar Comprando
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;