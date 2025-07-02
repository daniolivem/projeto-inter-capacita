import styled from 'styled-components';

export const ContentCard = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1400px) {
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 405px;
    background-color: var(--card-destaque-color);
    border-radius: 8px;
    display: flex;
    padding-left: 30px;

    .card-info {
      width: 100%;
      max-width: 163px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--dark-gray);
      }

      .card-tag {
        width: 100%;
        max-width: 96px;
        height: 32px;
        border-radius: 29px;
        padding: 5px 15px;
        background-color: var(--card-tag-color);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 10px;

        span {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-gray-2);
          letter-spacing: 0.75px;
          line-height: 22px;
        }
      }
    }

    .card-image {
      width: 242px;
      height: 251px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    /* Responsividade */

    @media (max-width: 1400px) {
      width: 100%;
      max-width: 380px;
      padding-left: 20px;
    }

    .card-info {
      h3 {
        @media (max-width: 460px) {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

export const ContainerCircles = styled.section`
  width: 100%;
  max-width: 712px;
  height: 138px;
  display: flex;
  gap: 48px;

  .content {
    width: 100%;
    max-width: 104px;
    height: 100%;
    cursor: pointer;

    p {
      text-align: center;
      margin-top: 12px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--dark-gray-2);
    }

    .content-image {
      background-color: var(--white);
      width: 104px;
      height: 104px;
      border-radius: 150px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 64px;
        height: 64px;
      }
    }
  }

  /* Responsividade */

  @media (max-width: 1400px) {
    max-width: 835px;
  }

  @media (max-width: 460px) {
    max-width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
`;

export const ContainerBottom = styled.section`
  background-color: var(--white);
  display: flex;
  width: 100%;
  max-width: 1440px;
  height: 553px;
  align-items: center;
  padding: 0px 140px 20px 100px;
  gap: 70px;

  .content-bottom-image {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(
      180deg,
      rgba(227, 198, 247, 1) 0%,
      rgba(242, 227, 252, 1) 27%,
      rgba(255, 255, 255, 1) 64%
    );
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 466px;
    }
  }

  .content-bottom-right {
    width: 100%;
    max-width: 589px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    h4 {
      font-weight: 700;
      font-size: 0.8rem;
      line-height: 22px;
      letter-spacing: 0.75px;
      color: var(--primary-color);
    }

    h3 {
      font-weight: 700;
      font-size: 3rem;
      line-height: 48px;
      letter-spacing: 1px;
      color: var(--dark-gray-2);
    }

    p {
      font-weight: 400;
      letter-spacing: 0.75px;
      line-height: 28px;
      color: var(--dark-gray-2);
      margin-top: 10px;
    }
  }

  /* Responsividade */

  @media (max-width: 460px) {
    width: 100%;
    min-height: 375px;
    height: 700px;
    flex-direction: column;
    padding: 40px 45px 50px;
    gap: 0px;
  }

  .content-bottom-image {
    @media (max-width: 460px) {
      width: 270px;
      height: 270px;

      img {
        width: 330px;
      }
    }
  }

  .content-bottom-right {
    @media (max-width: 460px) {
      h3 {
        font-size: 1.9rem;
        line-height: 36px;
        letter-spacing: 2px;
      }

      p {
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 20px;
        color: var(--dark-gray-2);
      }
    }
  }
`;
