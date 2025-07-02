import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  background-color: var(--dark-gray);
  width: 100%;
  height: 454px;
  padding: 72px 100px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer-content {
    width: 100%;
    max-width: 1440px;
    display: flex;
    height: 100%;
    border-bottom: 1px solid var(--white);
    justify-content: space-between;
    padding-bottom: 5px;

    .footer-logo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      max-width: 307px;
      gap: 40px;
      padding-top: 5px;

      p {
        font-weight: 400;
        color: var(--white);
      }

      .footer-social ul {
        display: flex;
        gap: 35px;

        li {
          color: var(--white);
        }
      }
    }

    .content-info {
      display: flex;
      gap: 102px;

      .footer-info {
        width: 100%;
        max-width: 135px;
        height: 100%;

        ul {
          display: flex;
          flex-direction: column;

          color: var(--white);

          li {
            line-height: 38px;
          }
          .footer-info-title {
            font-weight: 700;
            margin-bottom: 28px;
          }
        }
      }
    }

    .footer-categories {
      width: 100%;
      max-width: 96px;

      ul {
        display: flex;
        flex-direction: column;

        color: var(--white);

        li {
          line-height: 38px;
        }

        .footer-categories-title {
          font-weight: 700;
          margin-bottom: 28px;
        }
      }
    }

    .footer-address {
      width: 100%;
      max-width: 233px;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--white);
      gap: 14px;

      div {
        width: 100%;
        max-width: 230px;
        line-height: 26px;
        padding-top: 14px;
      }
    }
  }

  .footer-copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 29px 0;
    color: var(--white);
  }

  /* Responsividade */

  @media (max-width: 460px) {
    padding: 50px 89px 0 20px;
    width: 100%;
    min-width: 375px;
    height: 805px;

    .footer-content {
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      height: 100%;

      .footer-logo {
        width: 100%;
        min-width: 307px;
        gap: 20px;

        p {
          font-size: 0.8rem;
          font-weight: 500;
        }

        .footer-social ul {
          width: 100%;
          min-width: 124px;
          height: 20px;
        }
      }

      .content-info {
        width: 100%;
        min-width: 320px;
        height: 218px;
        display: flex;

        .footer-info {
          height: 100%;

          ul {
            li {
              line-height: 27px;
            }

            .footer-info-title {
              font-weight: 600;
              margin-bottom: 10px;
            }
          }
        }

        .footer-categories {
          height: 100%;

          ul {
            li {
              line-height: 29px;
              font-weight: 400;
            }

            .footer-categories-title {
              font-weight: 600;
              margin-bottom: 10px;
            }
          }
        }
      }

      .footer-address {
        width: 100%;
        min-width: 281px;
        height: 156px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        div {
          min-width: 100%;
          line-height: 31px;
          padding-top: 5px;
        }

        a {
          padding-top: 15px;
        }
      }
    }

    .footer-copyright {
      padding: 23px 0 46px;
    }
  }
`;
