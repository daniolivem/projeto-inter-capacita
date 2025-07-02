import { useState, useRef, useEffect } from 'react';
import './styles.css';

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = 'Selecione uma opção',
}) => {
  // Estado para controlar se o dropdown está aberto
  const [isOpen, setIsOpen] = useState(false);
  // Referência para o container do select (usado para detectar cliques fora)
  const selectRef = useRef(null);

  // Função para alternar a abertura/fechamento do dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Função chamada quando uma opção é selecionada
  const handleOptionClick = optionValue => {
    onChange(optionValue); // Chama a função onChange passada como prop
    setIsOpen(false); // Fecha o dropdown após a seleção
  };

  // Effect para fechar o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = event => {
      // Se o clique foi fora do componente select, fecha o dropdown
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Adiciona o listener de clique no document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup: remove o listener quando o componente é desmontado
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Encontra a opção selecionada para mostrar o texto correto
  const selectedOption = options.find(option => option.value === value);

  return (
    <div className='custom-select-container' ref={selectRef}>
      {/* Botão principal do select */}
      <div
        className={`custom-select-button ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        <span className='select-label'>Ordenar por:</span>
        <span className='select-value'>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {/* Ícone da seta usando SVG */}
        <svg
          className={`select-arrow ${isOpen ? 'rotated' : ''}`}
          width='12'
          height='8'
          viewBox='0 0 12 8'
          fill='none'
        >
          <path
            d='M1 1.5L6 6.5L11 1.5'
            stroke='#666'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      {/* Dropdown com as opções - só renderiza se estiver aberto */}
      {isOpen && (
        <div className='custom-select-dropdown'>
          {options.map(option => (
            <div
              key={option.value}
              className={`select-option ${option.value === value ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
