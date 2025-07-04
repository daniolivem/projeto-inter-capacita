import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const FooterLink = ({ href, children }) => <a href={href}>{children}</a>;

const FooterCopy = ({ children }) => <div>{children}</div>;

const Footer = () => (
  <footer className='footer'>
    {/* div cabeçalho */}
    <div className='footer-header'>
      <img className='footer-logo' src="/images/tecnobits.png" alt='Logo da loja' />
      <h3 className='footer-title'>Digital Store</h3>
    </div>

    {/* div descrição */}
    <div>
      <p className='footer-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* div links informações */}
    <div className='footer-info'>
      <nav>
        <ul className='footer-info-list'>
          <li className='footer-info-title'>
            <strong>Informações</strong>
          </li>
          <li className='footer-a'>Sobre Drip Store</li>
          <li className='footer-a'>Segurança</li>
          <li className='footer-a'>Wishlist</li>
          <li className='footer-a'>Blog</li>
          <li className='footer-a'>Trabalhe conosco</li>
          <li className='footer-a'>Meus pedidos</li>
        </ul>
      </nav>
    </div>

    {/* div links categorias */}
    <div className='footer-categories'>
      <nav>
        <ul className='footer-categories-list'>
          <li className='footer-categories-title'>
            <strong>Categorias</strong>
          </li>
          <li className='footer-c'>Camisetas</li>
          <li className='footer-c'>Calças</li>
          <li className='footer-c'>Bonés</li>
          <li className='footer-c'>Headphones</li>
          <li className='footer-c'>Tênis</li>
        </ul>
      </nav>
    </div>

    {/* address */}
    <address className='footer-address'>
      <strong className='footer-address-title'>Contato</strong>
      <p className='p-address'>
        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-160
      </p>
    </address>
    <div className='footer-phone'>
      <a href='tel: +558530513411'>(85) 3051-3411</a>
    </div>

    <div className='footer-social'>
      {/* Redes sociais */}
      <ul>
        <li className='footer-social-icon'>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li className='footer-social-icon'>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li className='footer-social-icon'>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </ul>
    </div>

    <div className='footer-line'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1240'
        height='1'
        viewBox='0 0 1240 1'
        fill='none'
      >
        <path opacity='0.3' d='M1240 0H0V1H1240V0Z' fill='white' />
      </svg>
    </div>
    {/* div copyright */}
    <div className='footer-copy'>
      <FooterCopy>© {new Date().getFullYear()} Digital College</FooterCopy>
    </div>
    <div className='footer-content'>
      <div className='footer-info'>...</div>
      <div className='footer-categories'>...</div>
      <address className='footer-address'>...</address>
      <div className='footer-phone'>...</div>
    </div>
  </footer>
);

export default Footer;
