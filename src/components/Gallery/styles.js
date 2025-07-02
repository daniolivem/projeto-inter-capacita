import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 681px;
  padding: 78px 37px 0px 100px;
  background-color: var(--light-gray-3);
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-gallery {
    width: 100%;
    max-width: 1440px;
    height: 398px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .content-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      z-index: 2; /* Garantindo que fique acima da imagem */

      h2 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--warning-color);
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 34px;
        color: var(--dark-gray-2);
        max-width: 450px; /* Limitando largura do texto */
      }
    }

    .content-image {
      width: 100%;
      max-width: 733px;
      height: 431px;
      position: relative;
      overflow: hidden; /* Para garantir que imagens não ultrapassem o container */

      img.slide-image {
        width: 100%;
        max-width: 600px;
        height: 100%;
        object-fit: contain; /* Mantém a proporção da imagem */
        transition: opacity 0.5s ease-in-out; /* Adiciona transição suave */
      }
    }

    .content-image-icon {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
  }

  .content-setas {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 20px;
    padding: 140px 0 53px;

    div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--light-gray-2);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    /* Estilo para o slide ativo */
    div.active {
      background-color: var(--primary-color);
      transform: scale(1.2); /* Aumenta ligeiramente o tamanho */
    }

    div:hover {
      background-color: var(--primary-color);
    }
  }

  /* Responsividade */
  @media (max-width: 460px) {
    padding: 15px 25px 0;
    height: 630px;
  }

  .content-setas {
    @media (max-width: 460px) {
      padding: 40px 148px;
    }
  }

  .content-gallery {
    @media (max-width: 1200px) {
      width: 100%;
      max-width: 375px;
      height: 662px;
    }

    .content-image {
      @media (max-width: 460px) {
        width: 100%;
        max-width: 240px;
        height: 220px;
        position: absolute;
        top: -7px;
        right: 60px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .content-image-icon {
      @media (max-width: 460px) {
        width: 100%;
        max-width: 140px;
        height: 140px;
        position: absolute;
        top: 10px;
        right: -87px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .content-gallery .content-info {
    @media (max-width: 460px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 200px;

      h2 {
        font-size: 0.9rem;
        color: var(--primary-color);
      }

      p {
        font-size: 0.9rem;
        line-height: 22px;
        letter-spacing: 0.25px;
        text-align: center;
      }

      .content-image-text {
        width: 297px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
