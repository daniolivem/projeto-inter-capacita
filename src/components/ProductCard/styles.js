import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 292px;
  height: 100%;
  max-height: 439px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .card-product {
    width: 292px;
    height: 321px;
    flex-shrink: 0;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
    padding: 38px 20px 0;
    position: relative;

    .discount {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: var(--card-tag-color);
      color: var(--dark-gray-2);
      padding: 5px 15px;
      border-radius: 29px;
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.75px;
      text-transform: uppercase;
    }

    img {
      width: 248px;
      height: 134px;
      transform: rotate(-30deg);
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
    }
  }

  p {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--light-gray);
    line-height: 24px;
    letter-spacing: 0.75px;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: var(--dark-gray-2);
  }

  .card-info {
    display: flex;
    gap: 12px;
    align-items: center;

    .original-price {
      color: var(--light-gray, #8f8f8f);
      font-feature-settings:
        'liga' off,
        'clig' off;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0.75px;
      text-decoration: line-through;
    }

    .discount-price {
      color: var(--dark-gray, #1f1f1f);
      font-feature-settings:
        'liga' off,
        'clig' off;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.75px;
    }
  }

  /* Responsividade */
  @media (max-width: 1400px) {
    max-width: 220px;
    height: auto;

    .card-product {
      height: 265px;

      img {
        width: 190px;
      }
    }

    h4 {
      font-size: 1.1rem;
    }

    .card-info {
      .original-price {
        font-size: 1.3rem;
        line-height: 28px;
        letter-spacing: -0.75px;
      }
      .discount-price {
        font-size: 1.3rem;
        line-height: 28px;
        letter-spacing: -0.75px;
      }
    }
  }

  @media (max-width: 460px) {
    width: 100%;
    min-width: 163px;
    height: 290px;
    align-items: flex-start;

    a {
      width: 100%;
      max-width: 163px;
    }

    .card-product {
      width: 100%;
      padding: 0px;
      height: 179px;

      .discount {
        left: 30px;
      }

      img {
        width: 120px;
        top: 40px;
        left: 14px;
        transform: rotate(-30deg);
      }
    }

    h4 {
      font-size: 0.8rem;
    }

    .card-info {
      gap: 8px;

      .original-price {
        font-size: 0.8rem;
        line-height: 20px;
        letter-spacing: -0.75px;
      }

      .discount-price {
        font-size: 0.8rem;
        line-height: 20px;
        letter-spacing: -0.75px;
      }
    }
  }
`;
