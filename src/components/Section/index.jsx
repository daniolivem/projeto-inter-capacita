import {
  SectionContent,
  SectionHeader,
  SectionLink,
  SectionTitle,
  StyledSection,
} from './styles';
import { FaArrowRightLong } from 'react-icons/fa6';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  console.log(link);
  // Determina o alinhamento do título padrão 'left' se não for fornecido ou for diferente de 'center'
  const alignment = titleAlign === 'center' ? 'center' : 'left';
  return (
    <StyledSection>
      <SectionHeader $align={alignment}>
        {title && <SectionTitle $align={alignment}>{title}</SectionTitle>}
        {link &&
          link.text &&
          link.href && ( // Renderiza o link apenas se ele existir e tiver texto e href
            <SectionLink href={link.href}>
              {link.text} <FaArrowRightLong size={15} />
            </SectionLink>
          )}
      </SectionHeader>

      <SectionContent>
        {children}{' '}
        {/* Aqui o conteúdo passado entre as tags <Section> será renderizado */}
      </SectionContent>
    </StyledSection>
  );
};

export default Section;
