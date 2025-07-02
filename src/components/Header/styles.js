import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  /* Altura diferente para páginas de autenticação */
  height: ${props => (props.$isAuthPage ? '98px' : '192px')};
  background-color: var(--white);
  filter: drop-shadow(0 10px 30px 0 rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: center;
  transition: height 0.3s ease;

  .dropshadow {
    padding: ${props => (props.$isAuthPage ? '39px 0' : '39px 100px 29px')};
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => (props.$isAuthPage ? '0' : '40px')};
    transition: height 0.3s ease;
  }

  /* Estilo especial para centralizar a logo em páginas de autenticação */
  .content-logo {
    &.center-logo {
      display: flex;
      justify-content: flex-start;
      justify-content: left;
      margin-left: 48px;
      width: 100%;
    }
  }

  .header-main {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .search-input {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      gap: 48px;

      .search-icon {
        position: absolute;
        margin-left: 350px;

        & img {
          cursor: pointer;
        }

        & img:hover {
          filter: brightness(0.8);
        }
      }
      & a {
      }
    }

    .header-buttons {
      display: flex;
      align-items: center;
      gap: 70px;
    }

    .cart-icon-container {
      position: relative;
      display: inline-block;

      .cart-item-count {
        position: absolute;
        top: -10px; /* Adjust as needed */
        right: -13px; /* Adjust as needed */
        background-color: var(--pink); /* Use your pink color variable */
        color: var(--white);
        background-color: #c92071;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 15px;
        min-height: 15px;
        width: 15px;
        height: 15px;
        line-height: 15px;
      }
    }

    @media (max-width: 460px) {
      display: none;
    }

    @media (max-width: 1400px) {
      font-size: 0.9rem;
    }

    @media (max-width: 460px) {
      display: none;
    }
  }

  & .search-icon img {
    @media (max-width: 460px) {
      width: 20px;
    }
  }

  .header-nav {
    width: 100%;
    max-width: 426px;
    height: 30px;
    position: absolute;
    top: 134px;
    left: 438px;

    & ul {
      display: flex;
      gap: 32px;
      line-height: 28px;
      letter-spacing: 0.75px;
    }

    /* Adiciona classe para o menu quando aberto */
    &.menu-open {
      @media (max-width: 460px) {
        display: block !important;
      }
    }
  }

  /* Regras para o modo mobile */
  @media (max-width: 460px) {
    width: 100%;
    max-width: 455px;
    /* Altura varia de acordo com o estado do $showMobileSearch e se é página de autenticação */
    height: ${props => {
      if (props.$isAuthPage) return '66px';
      return props.$showMobileSearch ? '192px' : '66px';
    }};
    padding: 20px;
    transition: height 0.4s ease;
  }

  .dropshadow {
    @media (max-width: 460px) {
      padding: ${props => (props.$isAuthPage ? '10px 0' : '0')};
      width: 100%;
      max-width: 425px;
    }
  }

  .header-main {
    @media (max-width: 460px) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .header-buttons {
      @media (max-width: 1400px) {
        gap: 20px;
      }

      @media (max-width: 460px) {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: baseline;
        gap: 0px;
        position: absolute;
        right: 0;
      }
    }

    .menu-button {
      display: none;
      background-color: transparent;
      position: absolute;
      left: 0;
      cursor: pointer;

      @media (max-width: 460px) {
        display: block;
      }
    }
  }

  .header-main .search-input {
    @media (max-width: 460px) {
      width: 6%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      gap: 2px;

      /* Estilos para o input quando visível no mobile */
      & input {
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        width: 80%;
        margin: 0 auto;
        z-index: 100;
        transition: all 0.3s ease;
      }

      /* Classe adicionada quando o input está ativo no mobile */
      & input.mobile-search-active {
        display: block;
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    .search-icon {
      @media (max-width: 460px) {
        margin-left: 0px;
        display: flex;
        /* Garantir que o ícone fique em cima do input */
        z-index: 101;
        position: absolute;
        left: 285px;
      }
    }
  }

  .dropshadow .header-nav {
    @media (max-width: 460px) {
      width: 100%;
      max-height: 400px;
      height: 30px;
      position: absolute;
      top: 70px;
      left: 0;
      display: none;
    }

    & ul {
      @media (max-width: 460px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0px;
        position: absolute;
        left: 0;
        padding: 0 20px;
      }
    }
  }

  @media (max-width: 460px) {
    // Adicione esta regra de mídia para telas menore (mobile)
    width: 100%;
    max-width: 455px;
    /* Altura varia de acordo com o estado do $showMobileSearch */
    height: ${props => (props.$showMobileSearch ? '192px' : '66px')};
    padding: 20px;
    transition: height 0.3s ease;
  }

  .dropshadow {
    @media (max-width: 460px) {
      padding: 0;
      width: 100%;
      max-width: 425px;
    }
  }

  .header-main {
    @media (max-width: 460px) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .header-buttons {
      @media (max-width: 460px) {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: baseline;
        gap: 0px;
        position: absolute;
        right: 0;
      }
    }

    .menu-button {
      display: none;
      background-color: transparent;
      position: absolute;
      left: 0;
      cursor: pointer;

      @media (max-width: 460px) {
        display: block;
      }
    }
  }

  .header-main .search-input {
    @media (max-width: 460px) {
      width: 6%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 48px;
      gap: 2px;
    }

    .search-icon {
      @media (max-width: 460px) {
        margin-left: 0px;
        display: flex;
      }
    }
  }

  .dropshadow .header-nav {
    @media (max-width: 460px) {
      width: 100%;
      max-height: 400px;
      height: 30px;
      position: absolute;
      top: 70px;
      left: 0;
      display: none;
    }

    & ul {
      @media (max-width: 460px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0px;
        position: absolute;
        left: 0;
        padding: 0 20px;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: var(--light-gray);
  transition: all 0.2s ease;
  text-underline-offset: 4px;

  &:hover {
    color: var(--primary-color);
    text-decoration: underline 2px solid;
    text-decoration-color: var(--primary-color);
    text-underline-offset: 4px;
  }

  /* NOVO: Estilo para quando o link está ativo */
  &.active {
    color: var(--primary-color);
    text-decoration: underline 2px solid;
    text-decoration-color: var(--primary-color);
    font-weight: 700;
  }

  @media (max-width: 460px) {
    display: none;
  }
`;

export const BtnNavLink = styled(NavLink)`
  color: var(--light-gray-3);
`;
