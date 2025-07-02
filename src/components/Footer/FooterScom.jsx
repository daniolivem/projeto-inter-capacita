import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo';
import { Container } from './styles';

// const FooterLink = ({ href, children }) => <a href={href}>{children}</a>;

const FooterCopy = ({ children }) => <div>{children}</div>;

const FooterScom = () => {
  return (
    <Container>
      <div className='footer-content'>
        {/* div cabeçalho */}
        <div className='footer-logo'>
          <Logo $footer />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className='footer-social'>
            {/* Redes sociais */}
            <ul>
              <li className='footer-social-icon'>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: '20px' }}
                />
              </li>
              <li className='footer-social-icon'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: '20px' }}
                />
              </li>
              <li className='footer-social-icon'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: '20px' }}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className='content-info'>
          {/* div links informações */}
          <div className='footer-info'>
            <nav>
              <ul>
                <li className='footer-info-title'>Informações</li>
                <li>Sobre Drip Store</li>
                <li>Segurança</li>
                <li>Wishlist</li>
                <li>Blog</li>
                <li>Trabalhe conosco</li>
                <li>Meus pedidos</li>
              </ul>
            </nav>
          </div>

          {/* div links categorias */}
          <div className='footer-categories'>
            <nav>
              <ul>
                <li className='footer-categories-title'>Categorias</li>
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* address */}
        <address className='footer-address'>
          <strong className='footer-address-title'>Contato</strong>

          <div>
            <p className='p-address'>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-160
            </p>
          </div>

          <a href='tel: +558530513411'>(85) 3051-3411</a>
        </address>
      </div>

      {/* div copyright */}
      <div className='footer-copyright'>
        <FooterCopy>© {new Date().getFullYear()} Digital College</FooterCopy>
      </div>
    </Container>
  );
};

export default FooterScom;

/**
 
<Container>
          <div className='footer-copyright'>
            <FooterCopy>
              © {new Date().getFullYear()} Digital College
            </FooterCopy>
          </div>
        </Container>



 */
