import './Section.css';
import { FaArrowRightLong } from 'react-icons/fa6';

const Section = ({ title, titleAlign = 'left', link, children, $paddingBottom, className = '' }) => {
  console.log(link);
  // Determina o alinhamento do título padrão 'left' se não for fornecido ou for diferente de 'center'
  const alignment = titleAlign === 'center' ? 'center' : 'left';
  
  const sectionClasses = `section ${$paddingBottom ? 'padding-bottom' : ''} ${className}`;
  const headerClasses = `section-header ${alignment === 'center' ? 'center' : ''}`;
  
  return (
    <section className={sectionClasses}>
      <div className={headerClasses}>
        {title && <h2 className="section-title">{title}</h2>}
        {link &&
          link.text &&
          link.href && ( // Renderiza o link apenas se ele existir e tiver texto e href
            <a href={link.href} className="section-link">
              {link.text} <FaArrowRightLong size={15} />
            </a>
          )}
      </div>

      <div className="section-content">
        {children}{' '}
        {/* Aqui o conteúdo passado entre as tags <Section> será renderizado */}
      </div>
    </section>
  );
};

export default Section;
