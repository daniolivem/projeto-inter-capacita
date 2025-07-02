import './Buttons.css';

export const ButtonPrimary = ({ children, className = '', ...props }) => {
  return (
    <button className={`btn-primary ${className}`} {...props}>
      {children}
    </button>
  );
};

export const ButtonSecundary = ({ children, className = '', ...props }) => {
  return (
    <button className={`btn-secondary ${className}`} {...props}>
      {children}
    </button>
  );
};

export const ButtonIcon = ({ children, className = '', ...props }) => {
  return (
    <button className={`btn-icon ${className}`} {...props}>
      {children}
    </button>
  );
};

export const ButtonShop = ({ children, className = '', ...props }) => {
  return (
    <button className={`btn-shop ${className}`} {...props}>
      {children}
    </button>
  );
};

// Componentes anteriores mantidos para compatibilidade
export const PrimaryBtn = ({ children, ...props }) => {
  return <ButtonPrimary {...props}>{children}</ButtonPrimary>;
};

export const SecundaryBtn = ({ children, ...props }) => {
  return <ButtonSecundary {...props}>{children}</ButtonSecundary>;
};

export const IconBtn = ({ children, ...props }) => {
  return <ButtonIcon {...props}>{children}</ButtonIcon>;
};

export const ShopBtn = ({ children, ...props }) => {
  return <ButtonShop {...props}>{children}</ButtonShop>;
};
