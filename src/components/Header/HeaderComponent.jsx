import Logo from '../Logo';
import CartImage from '../../assets/icons/buy.svg?react'; // Importação padrão com ?react
import './Header.css';
import SearchIcon from '../../assets/icons/Search.svg';
import MenuIcon from '../../assets/icons/Menu.svg';
import MenuVertIcon from '../../assets/icons/Menu-vertical.svg';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { PrimaryBtn } from '../Buttons/ButtonComponents';
import { InputDefault } from '../Input';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'; // Import useCart hook

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para controlar a visibilidade do campo de pesquisa
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);
  const navigate = useNavigate();

  // Obter a localização atual
  const location = useLocation();

  // Use o hook useCart para acessar o número de itens
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  // Verifica se estamos em uma página de autenticação
  const isAuthPage = ['/login', '/register', '/create-account'].includes(
    location.pathname
  );

  // Verificar o tamanho da tela quando o componente montar e quando a janela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 460;
      setIsMobile(newIsMobile);

      // Quando não for mobile, sempre mostrar a busca
      // Quando for mobile, manter o estado atual ou ocultar se estiver mudando para mobile
      if (!newIsMobile) {
        setShowSearch(true);
      } else if (isMobile !== newIsMobile) {
        // Quando mudar de desktop para mobile, esconder a busca
        setShowSearch(false);
      }
    };

    // Definir o estado inicial
    handleResize();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', handleResize);

    // Limpar listener quando o componente desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenu(!showMenu);
  };

  // Função para lidar com a mudança no campo de pesquisa
  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  // Função para mostrar ou ocultar o campo de pesquisa
  const toggleSearch = () => {
    // No modo mobile, alternamos a visibilidade do campo de pesquisa
    if (isMobile) {
      setShowSearch(!showSearch);
    } else {
      // No desktop, limpamos o termo de busca e focamos no input
      setSearchTerm('');
      // Pode adicionar lógica para focar no input aqui se necessário
    }
  };

  // Função para lidar com a pesquisa
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Formata o termo de busca para a URL (substitui espaços por hifens e converte para minúsculas)
      const formattedSearchTerm = searchTerm
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
      navigate(`/products?filter=${formattedSearchTerm}`);
    }

    // Se estiver no modo mobile e tiver um termo de busca, esconde o campo depois de buscar
    if (isMobile && searchTerm.trim()) {
      setShowSearch(false);
    }
  };

  // Função para lidar com a tecla Enter
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // NOVO: Função para determinar se um link está ativo
  const isActiveLink = path => {
    // Para a home, verificamos se estamos exatamente na raiz
    if (path === '/') {
      return location.pathname === '/';
    }

    // Para outras rotas, verificamos se o pathname começa com o path
    // Isso permite que /produtos/categoria também marque "Produtos" como ativo
    return location.pathname.startsWith(path);
  };

  const headerClasses = `header-container ${isAuthPage ? 'auth-page' : ''}`;
  const dropshadowClasses = `header-dropshadow ${isAuthPage ? 'auth-page' : ''}`;
  const navClasses = `header-nav ${isMenuOpen ? 'mobile-open' : ''}`;

  return (
    // Passamos o estado showSearch como prop para o Container para controlar a altura no mobile
    <header className={headerClasses}>
      <div className={dropshadowClasses}>
        <div className='header-main'>
          {/* Renderização condicional para o botão de menu */}
          {!isAuthPage && (
            <button className='hamburger-menu' onClick={handleMenuClick}>
              {isMenuOpen ? (
                <img
                  src={MenuVertIcon}
                  alt='Ícone de menu vertical'
                  style={{ height: '24px' }}
                />
              ) : (
                <img src={MenuIcon} alt='Ícone de menu' />
              )}
            </button>
          )}

          <div className={`content-logo ${isAuthPage ? 'center-logo' : ''}`}>
            <Logo />
          </div>

          {!isAuthPage && (
            <>
              <div className='search-input'>
                {/* Mostrar o input apenas quando showSearch for true OU quando não estiver no modo mobile */}
                {(showSearch || !isMobile) && (
                  <InputDefault
                    type='text'
                    placeholder='Pesquisar produtos...'
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyPress}
                    className={
                      isMobile && showSearch ? 'mobile-search-active' : ''
                    }
                  />
                )}

                <div
                  className='search-icon'
                  // No mobile, ao clicar na lupa, alternamos a visibilidade do campo
                  // No desktop, executamos a pesquisa
                  onClick={isMobile ? toggleSearch : handleSearch}
                >
                  <img src={SearchIcon} alt='Ícone de pesquisa' />
                </div>

                <NavLink to='/register' className='nav-link'>Cadastre-se</NavLink>
              </div>

              <div className='user-actions'>
                <PrimaryBtn>
                  <Link to='/login' className='btn-nav-link'>Entrar</Link>
                </PrimaryBtn>

                <Link to="/shopping-cart" className="icon-link"> 
                  <CartImage />
                  {cartItemCount > 0 && ( // Only display count if greater than 0
                    <span className="cart-badge">{cartItemCount}</span>
                  )}
                </Link>
              </div>
            </>
          )}
        </div>

        {!isAuthPage && (
          <nav className={navClasses}>
            <ul className="nav-list">
              {/* ATUALIZADO: Usando end prop para match exato na home */}
              <li>
                <NavLink
                  to='/'
                  end
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/produtos'
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Produtos
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/categorias'
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Categorias
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/orders'
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Meus Pedidos
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
