import './style.css';
import NikeImg from '../../assets/images/White-Sneakers.png';
import ConfeteIcon from '../../assets/icons/confete.png';
import { ButtonShop } from '../../components/Buttons/styles';

const BuySuccessPage = () => {
  return (
    <div class='container-main'>
      <div class='container'>
        <div className='content-icon-title'>
          <div class='confete-icon'>
            <img src={ConfeteIcon} alt='Confete de festa' />
          </div>

          <div class='content-title'>
            <h2>
              Compra Realizada <br /> com sucesso!{' '}
            </h2>
          </div>
        </div>

        <div class='linha-divisor'></div>

        <div class='section-info'>
          <h2>Informações Pessoais</h2>
          <p>
            <span>Nome:</span>
            <strong> Francisco Antonio Pereira</strong>
          </p>
          <p>
            <span>CPF:</span>
            <strong> 123485913-43</strong>
          </p>
          <p>
            <span>E-mail:</span>
            <strong> francisco@gmail.com</strong>
          </p>
          <p>
            <span>Telefone:</span>
            <strong> (85) 5555-5555</strong>
          </p>
        </div>

        <div class='linha-divisor'></div>

        <div class='section-info'>
          <h2>Informações de Entrega</h2>
          <p>
            <span>Endereço:</span>
            <strong> Rua João Pessoa, 333</strong>
          </p>
          <p>
            <span>Bairro:</span>
            <strong> Centro</strong>
          </p>
          <p>
            <span>Cidade:</span>
            <strong>Fortaleza, Ceará</strong>
          </p>
          <p>
            <span>CEP:</span>
            <strong>433-8800</strong>
          </p>
        </div>

        <div class='linha-divisor'></div>

        <div class='section-payment'>
          <h2>Informações de Pagamento</h2>
          <p>
            <span>Titular do cartão:</span>
            <strong>FRANCISCO A P</strong>
          </p>
          <p>
            <span>Final:</span>
            <strong> **** **** **** 1234</strong>
          </p>
        </div>

        <div class='linha-divisor'></div>

        <div class='section-resumo'>
          <h4>Resumo da compra</h4>

          <div class='container-imagem-texto'>
            <div class='lado-esquerdo'>
              <img src={NikeImg} alt='Ícone de menu' className='tenis' />
            </div>
            <div class='lado-direito'>
              <p>Tênis Nike Revolution 6 Next Nature</p>
              <p>Masculino</p>
            </div>
          </div>
        </div>

        <div class='container-total-valor'>
          <div class='total-valor'>
            <span>Total</span>
            <span>R$ 219,00</span>
          </div>
          <div class='info-parcelas'>
            <p>ou 10x de 21,90 sem juros </p>
          </div>
        </div>

        <div className='content-print'>
          <a href=''>Imprimir recibo</a>
        </div>
      </div>

      <ButtonShop>Voltar para Home</ButtonShop>
    </div>
  );
};

export default BuySuccessPage;
