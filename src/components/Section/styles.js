import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding-top: ${props => (props.$paddingBottom ? '0px' : '100px')};
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: ${props => props.$paddingBottom & '0px'};
  margin-left: 315px;

  @media (max-width: 1400px) {
    padding: 38px 30px;
    margin-left: 0px;
  }

  @media (max-width: 460px) {
    padding-left: 10px;
    padding-bottom: ${props => props.$paddingBottom & '0px'};
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.$align === 'center' ? 'center' : 'space-between'};
  flex-direction: ${props => (props.$align === 'center' ? 'column' : 'row')};
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1400px) {
    max-width: 1215px;
  }

  @media (max-width: 460px) {
    height: 24px;
    margin-bottom: 20px;
    padding-right: 21px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.75px;
  line-height: 38px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin-bottom: 20px;

  @media (max-width: 460px) {
    font-size: 1rem;
    margin-bottom: 0px;
  }
`;

export const SectionLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-color);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
