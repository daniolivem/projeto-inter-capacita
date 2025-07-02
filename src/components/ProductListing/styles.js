import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .content-limit {
    width: 100%;
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    @media (max-width: 1400px) {
      grid-template-columns: repeat(auto-fit, minmax(248px, 1fr));
      gap: 15px;
    }

    @media (max-width: 460px) {
      grid-template-columns: ${props =>
        props.$isPageProducts
          ? 'repeat(auto-fit, minmax(163px, 1fr))'
          : 'repeat(auto-fit, minmax(200px, 1fr))'};
      gap: 9px;
    }
  }
`;
