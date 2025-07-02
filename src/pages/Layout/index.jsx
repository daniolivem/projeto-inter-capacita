import FooterScom from '../../components/Footer/FooterScom';
import Header from '../../components/Header';

import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <FooterScom />
    </Container>
  );
};

export default Layout;
