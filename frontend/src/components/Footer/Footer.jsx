import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

// DADOS DO RODAPÉ

const infoLinks = [
  { href: '#', text: 'Sobre TecnoBits' },
  { href: '#', text: 'Segurança' },
  { href: '#', text: 'Wishlist' },
  { href: '#', text: 'Blog' },
  { href: '#', text: 'Trabalhe conosco' },
  { href: '#', text: 'Meus pedidos' },
];

const socialLinks = [
  { href: '#', icon: faFacebook, label: 'Facebook' },
  { href: '#', icon: faInstagram, label: 'Instagram' },
  { href: '#', icon: faTwitter, label: 'Twitter' },
];

// coluna de links
const FooterColumn = ({ title, links }) => (
  <div className="footer-info"> {/* Usando a classe genérica para as colunas de links */}
    <h3 className="footer-info-title">{title}</h3>
    <ul className="footer-info-list">
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);


// --- COMPONENTE PRINCIPAL ---
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      {/*Logo e Descrição */}
      <div className='footer-header'>
        <a href="/" aria-label="Página Inicial">
          <img className='footer-logo' src="/images/MaybeFooterLogo.png" alt='Logo da loja TecnoBits' />
        </a>
        <p className='footer-description'>
          Na TecnoBits, tecnologia de ponta está ao seu alcance. Somos uma loja especializada em hardware, oferecendo uma seleção completa de processadores, placas de vídeo, memórias e muito mais, trabalhando com as melhores marcas para garantir qualidade e confiança.
        </p>
      </div>

      {/*Informações  */}
      <FooterColumn title="Informações" links={infoLinks} />

      {/*Contato */}
      <div className='contats-container'>
        <h3 className='footer-address-title'>Contato</h3>
        <address className='footer-address'>
          Av. Carlos Jereissati, 100 - Centro, Maracanaú - CE, 61900-010
        </address>
        <div className='footer-phone'>
          <p>(85) 9959-3879</p>
        </div>
        <div className='footer-social'>
          <ul>
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='footer-copy'>
        <p>© {currentYear} Projeto Integrador - Fullstack Capacita Brasil</p>
      </div>
    </footer>
  );
};

export default Footer;