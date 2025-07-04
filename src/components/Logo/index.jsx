import IconLogo from '../../assets/icons/logo.png';
import ImageLogo from '../../assets/images/tecnobits.png';
import './Logo.css';

const Logo = ({ $footer }) => {
  return (
    <div className="logo-container">
      <div className='content-icon'>
        {$footer ? (
          <img src={IconLogo} alt='Logo Icon' className='icon-logo' />
        ) : (
          <img src={IconLogo} alt='Logo Icon' className='icon-logo' />
        )}
      </div>
      <div className='content-image'>
        {$footer ? (
          <img src={ImageLogo} alt='Logo Image' className='logo-image' />
        ) : (
          <img src={ImageLogo} alt='Logo Image' className='logo-image' />
        )}
      </div>
    </div>
  );
};

export default Logo;
