import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css';
import { ButtonShop } from '../../components/Buttons/ButtonComponents';
import { useCart } from '../../contexts/CartContext';

const BuySuccessPage = () => {
  const { clearCart } = useCart();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, []);

  if (!state) {
    navigate('/');
    return null;
  }

  const {
    nome,
    cpf,
    rua,
    numero,
    bairro,
    cidade,
    estado,
    cep,
    numeroCartao,
    nomeCartao,
    validade,
    cartItems,
    subtotal,
    shippingCost,
    discount,
    total,
  } = state;

  const mascararCartao = (num) => {
    if (!num || num.length < 4) return 'Não informado';
    return `**** **** **** ${num.slice(-4)}`;
  };

  const formatCurrency = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="container-main">
      <div className="container">
        <div className="content-icon-title">
          <div className="content-icon">
            <img src="/images/confete.png" alt="Confete de festa" />
          </div>
          <div className="content-title">
            <h2>
              Compra realizada <br /> com sucesso!
            </h2>
            <p className="subtext" style={{ textAlign: 'center', marginTop: 10 }}>
              Obrigado por comprar conosco! Abaixo estão os detalhes do seu pedido.
            </p>
          </div>
        </div>

        <div className="linha-divisor"></div>

        <section className="section-info">
          <h2>Informações Pessoais</h2>
          <p>
            <span>Nome:</span>
            <strong>{nome}</strong>
          </p>
          <p>
            <span>CPF:</span>
            <strong>{cpf}</strong>
          </p>
        </section>

        <div className="linha-divisor"></div>

        <section className="section-info">
          <h2>Endereço de Entrega</h2>
          <p>
            <span>Rua:</span>
            <strong>
              {rua}, {numero}
            </strong>
          </p>
          <p>
            <span>Bairro:</span>
            <strong>{bairro}</strong>
          </p>
          <p>
            <span>Cidade/Estado:</span>
            <strong>
              {cidade} - {estado}
            </strong>
          </p>
          <p>
            <span>CEP:</span>
            <strong>{cep}</strong>
          </p>
        </section>

        <div className="linha-divisor"></div>

        <section className="section-payment">
          <h2>Informações de Pagamento</h2>
          <p>
            <span>Nome no cartão:</span>
            <strong>{nomeCartao}</strong>
          </p>
          <p>
            <span>Número do cartão:</span>
            <strong>{mascararCartao(numeroCartao)}</strong>
          </p>
          <p>
            <span>Validade:</span>
            <strong>{validade}</strong>
          </p>
        </section>

        <div className="linha-divisor"></div>

        <section className="section-resumo">
          <h2>Resumo da Compra</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="container-imagem-texto">
              <div className="lado-esquerdo">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="lado-direito">
                <p>{item.name}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço unitário: {formatCurrency(item.price)}</p>
                <p>Subtotal: {formatCurrency(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}

          <div className="container-total-valor">
            <div className="total-valor">
              <span>Subtotal:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="total-valor">
              <span>Frete:</span>
              <span>{formatCurrency(shippingCost)}</span>
            </div>
            <div className="total-valor">
              <span>Desconto:</span>
              <span>- {formatCurrency(discount)}</span>
            </div>
            <div className="total-valor" style={{ fontWeight: '700', fontSize: '1.1rem' }}>
              <span>Total:</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </section>

        <div className="linha-divisor"></div>

        <div className="content-print">
          <button className="print-button" onClick={() => window.print()}>
            🧾 Imprimir recibo
          </button>
        </div>

        <div style={{ marginTop: 20, width: '100%', maxWidth: 778, display: 'flex', justifyContent: 'center'}}>
          <ButtonShop onClick={() => navigate('/')}>Voltar para Home</ButtonShop>
        </div>
      </div>
    </div>
  );
};

export default BuySuccessPage;
