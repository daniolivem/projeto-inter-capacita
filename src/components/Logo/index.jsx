import './Logo.css';

const Logo = ({ $footer }) => {
  return (
    <div className="logo-container">
      <div className='content-icon'>

        <img src="/images/logo.png" alt='Logo Icon' className='icon-logo' />
      </div>
      <div className='content-image'>
        <img src="/images/tecnobits.png" alt='Logo Image' className='logo-image' />

      </div>
    </div>
  );
};

export default Logo;
