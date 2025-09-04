import './ProductViewPage.css';
import { useParams } from "react-router-dom";
import products from '../../data/products.json';
import { ButtonPrimary } from '../../components/Buttons/ButtonComponents';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaBoltLightning, FaPix, FaTruck, FaCalendarDays } from 'react-icons/fa6';
import { InputDefault } from '../../components/Input';
import { AiOutlineThunderbolt } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import StarRating from '../../components/StarRating';
  

function ProductViewPage() {
  // Obtém o ID do produto da URL
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Calcula o percentual de desconto do produto 
  const descontoPercentual = product.priceDiscount && product.priceDiscount > 0
    ? `${Math.round(((product.price - product.priceDiscount) / product.price) * 100)}%`
    : "0%";

  // Importa o contexto do carrinho
  // e define a função para adicionar produtos ao carrinho
  const { addToCart } = useCart();

  // Adiciona o produto ao carrinho
  const handleAddToCart = () => {
    addToCart({
      ...product,
      price: product.priceDiscount > 0 ? product.priceDiscount : product.price,
      imageUrl: product.image, // usa o campo 'image' do JSON
      quantity: 1,
    });
  };
  // Navegação para a página de carrinho
  const navigate = useNavigate();
  const comprarAgora = () => {
    navigate('/shopping-cart');
  }

  const parcela = (product.price / 10).toFixed(2);

  // Estado para o CEP e o cálculo do frete
  const [cep, setCep] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingMessage, setShippingMessage] = useState("");

  // Função para calcular o frete com base no CEP
  const calculateShipping = async (currentCep) => {
    if (currentCep.replace(/\D/g, '').length === 8) { // Verifica se o CEP tem 8 dígitos
      console.log(`Calculando frete para o CEP: ${currentCep}`);
      // Lógica de simulação de frete:
      // Esta é uma simulação MUITO simples. Substitua pela sua lógica real ou chamada API.
      if (currentCep.startsWith('01000')) { // Exemplo: CEP de São Paulo Capital
        setShippingCost(10.50);
        setShippingMessage("Frete estimado: R$ 10,50 (São Paulo Capital)");
        // setShippingOptions([{ name: 'SEDEX', cost: 15.00, days: 2 }, { name: 'PAC', cost: 10.50, days: 5 }]);
      } else if (currentCep.startsWith('20000')) { // Exemplo: CEP do Rio de Janeiro Capital
        setShippingCost(15.75);
        setShippingMessage("Frete estimado: R$ 15,75 (Rio de Janeiro Capital)");
      } else if (currentCep.startsWith('70000')) { // Exemplo: CEP de Brasília
        setShippingCost(12.00);
        setShippingMessage("Frete estimado: R$ 12,00 (Brasília)");
      } else {
        setShippingCost(25.00); // Um valor padrão para outros CEPs
        setShippingMessage("Frete estimado: R$ 25,00 (Outros locais)");
      }
    } else {
      setShippingCost(0); // Reseta o frete se o CEP for inválido/incompleto
      setShippingMessage("CEP inválido. Por favor, insira um CEP válido.");
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
  const subtotal = product.priceDiscount > 0 ? product.priceDiscount : product.price;
  const discountPercentage = 0.50; // Ex: 50% de desconto sobre o subtotal
  const discount = subtotal * discountPercentage;
  const total = subtotal + shippingCost - discount;

  


  if (!product) {
    return <h2>Produto não encontrado.</h2>;
  }

  return (
    <div className="principal">
      <div className="titulo">
        <p className='textotitulo'>
          {product.category}
          <span className='pasta'>{'>'}</span>
          {product.brand}
        </p>

      </div>
      <div className='conteudo'>
        <div className='esquerda'>
          <img src={product.image} alt={product.name} className='imagem-produto' />
        </div>

        <div className='direita'>
          <div className="direitainfo">
            <div className='direitatitulo'>
              <span><FaBoltLightning className='prontaentrega'/>Pronta entrega</span>
              <span><StarRating rating={product.rating || 0}/></span>
              <span><FaCalendarDays className='calendario'/>12 meses de garantia</span>
            </div>
            <h2 className='descricao'>{product.description}</h2>
            <p className='desconto'>De: {product.price.toFixed(2)} por:</p>
            <p className='preco'>R$ {product.priceDiscount}</p>
            <div className='avista'>
              <FaPix className='pix' />
              À vista no PIX com {descontoPercentual} de desconto
            </div>
            <div className='parcelado'><FaCreditCard className='cartao'/>
              Ou em até 10x de R$ {parcela} sem juros no cartão
            </div>
            <div className="frete">
              <div className='freteinfo'>
                <FaTruck className='caminhao'/>
                Em estoque
              </div>
            </div>
             <div className='botoes'>
              <ButtonPrimary className='compraragr mobile' onClick={() => {comprarAgora(); handleAddToCart();}}>
                COMPRAR AGORA
              </ButtonPrimary>
              <ButtonPrimary className='addcarrinho mobile' onClick={handleAddToCart}>
                ADICIONAR AO CARRINHO
              </ButtonPrimary>
            </div>
          <div className="frete">
                          <h4><FaTruck className='caminhao'/>CONSULTE FRETE</h4>
                          <div className="frete-entrada">
                            <InputDefault 
                              placeholder="Insira seu CEP"
                              value={cep}
                              onChange={handleCepChange}
                              maxLength={9} // Formato XXXXX-XXX
                            />
                            <ButtonPrimary className='botao-ok mobile' onClick={handleCalculateShippingClick}>
  OK
</ButtonPrimary>
                          </div>
                          {shippingMessage && <p className='valorfrete'>{shippingMessage}</p>}
                        </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewPage;
