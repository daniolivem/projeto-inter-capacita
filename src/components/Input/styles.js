import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: ${({ $inputLogin }) => ($inputLogin ? '523px' : '558px')};
  height: 60px;
  border-radius: 8px;
  padding: 24px 16px;
  background-color: var(--light-gray-3);

  &::placeholder {
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: var(--light-gray-2);
    transition: border 0.3s ease-in-out;
  }

  /* Responsividade */
  @media (max-width: 460px) {
    /* Estilos específicos para o input em mobile */
    transition: all 0.3s ease;
    width: 100%;
    min-width: ${({ $inputLogin }) => ($inputLogin ? '229px' : '315px')};
    height: 60px;
  }
`;
