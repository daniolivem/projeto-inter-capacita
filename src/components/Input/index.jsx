import './Input.css';

export const InputDefault = ({ className = '', $inputLogin, ...props }) => {
  const inputClasses = `input-default ${$inputLogin ? 'input-login' : ''} ${className}`;
  
  return (
    <input className={inputClasses} {...props} />
  );
};
