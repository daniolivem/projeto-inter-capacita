import React from "react";
import './App.css'
import tenis from '../src/assets/tenis.png';





const Confirmacompra = () => {


  return (


    <div className="container">
      <div className="h1">
        <h3>Finalizar Compra</h3>
      </div>


{/** formulario Informacões Pessoais */}

      <div className="ladoalado">
        <div className="primeira">

          <h4 className="border">Informacões Pessoais</h4>

          <label htmlFor="nomecompleto">Nome Completo *</label>
          <input type="text" name="nomecompleto" placeholder="insira seu nome" required />

          <label htmlFor="cpf">CPF *</label>
          <input type="text" name="cpf" placeholder="insira seu CPF" />

          <label htmlFor="email">E-mail *</label>
          <input type="text" name="email" placeholder="insira seu email" />

          <label htmlFor="celular">Celular*</label>
          <input type="text" name="celular" placeholder="insira seu celular" />
        </div>


      
     {/**formulario resumo */}
        <div className="resumo">

          <h4 className="border">RESUMO</h4>

          <div className="conteudo, border">
            <div className="teniseh6">
              <div className="tenisf">
                <img src={tenis} alt='Logo Icon' className='tenis' />
              </div>
              <div className="h">
                <h6>Tênis Nike Revolution 6 Next Nature Masculino</h6>
              </div>
            </div>

          </div>



          <div class="linha">
            <span className="span">Subtotal</span>
            <span className="spanbold">R$ 219,00</span>
          </div>
          <div class="linha">
            <span className="span">Frete</span>
            <span className="spanbold">R$ 0,00</span>
          </div>
          <div class="linha">
            <span className="span">Desconto</span>
            <span className="spanbold">R$ 30,00</span>
          </div>
          <div class="linha total">
            <span>Total</span>

            <span>R$ 219,00 <h6>ou 10x de 21,90 sem juros  </h6></span>




          </div>





          <button>Realizar Pagamento</button>

        </div>


      </div>





{/**formulario   Informacões de Entrega */}

      <div className="segunda">
        <h4 className="border">Informacões de Entrega </h4>

        <label htmlFor="endereco">Endereco *</label>
        <input type="text" name="endereco" placeholder="insira seu endereco" />

        <label htmlFor="cidade">Cidade *</label>
        <input type="text" name="cidade" placeholder="insira sua cidade" />

        <label htmlFor="bairro">Bairro *</label>
        <input type="text" name="cpf" placeholder="insira seu bairro" />

        <label htmlFor="complemento">Complemento *</label>
        <input type="text" name="complemento" placeholder="insira complemento" />
      </div>





{/**formulario   Informacões de pagamento */}

      <div className="terceira">
        <h4 className="border">Informacões de pagamento</h4>

        <h6>Forma de Pagamento</h6>
        <div className="teste">

          <input type="radio" id="opcao1" name="escolha" value="1" />
          <label for="opcao1">Cartão de Credito</label>

          <input type="radio" id="opcao2" name="escolha" value="2" />
          <label for="opcao2">Boleto Bancário</label>


        </div>


        <label htmlFor="nomecartao">Nome Cartão *</label>
        <input type="text" name="nomecartao" placeholder="insira o nome do cartão" />
        <div className="dois">
          <div>
            <label htmlFor="numerocartao">Data o Número do Cartão *</label>
            <input type="text" name="numerocartao" placeholder="insira número do cartão" />
          </div>
          <div>
            <label htmlFor="validadecartao">Data de Validade do Cartão *</label>
            <input type="text" name="validadecartao" placeholder="insira a validade do cartão" />
          </div>
        </div>
        <div className="cvv">
          <label htmlFor="cvv">CVV *</label>
          <input type="text" name="cvv" placeholder="CVV *" />
        </div>
      </div>



{/**formulario  finaliza Compra */}
      <div className="quarta">

        <h4 className="border">Finaliza Compra</h4>
        <div className="finaliza">
          <div>total</div>
          <div><h3>R$ 219,00</h3>
            <p>ou 10x de 21,90 sem juros</p>
          </div>
        </div>

        <button>Realizar Pagamento</button>


      </div>
    </div>

  );
}

export default Confirmacompra;
