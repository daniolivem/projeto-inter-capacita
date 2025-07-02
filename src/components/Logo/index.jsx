import IconLogo from '../../assets/images/Vector.svg';
import ImageLogo from '../../assets/images/DigitalStore.svg';
import IconLogo2 from '../../assets/images/Vector-white.svg';
import ImageLogo2 from '../../assets/images/DigitalStore-white.svg';
import { ContainerLogo } from './styles';

const Logo = ({ $footer }) => {
  return (
    <ContainerLogo>
      <div className='content-icon'>
        {$footer ? (
          <img src={IconLogo2} alt='Logo Icon' className='icon-logo' />
        ) : (
          <img src={IconLogo} alt='Logo Icon' className='icon-logo' />
        )}
      </div>
      <div className='content-image'>
        {$footer ? (
          <img src={ImageLogo2} alt='Logo Image' className='image-logo' />
        ) : (
          <img src={ImageLogo} alt='Logo Image' className='image-logo' />
        )}
      </div>
    </ContainerLogo>
  );
};

export default Logo;
