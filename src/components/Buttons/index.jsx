import { ButtonIcon, ButtonPrimary, ButtonSecundary } from './styles';

export const PrimaryBtn = ({ children }) => {
  return <ButtonPrimary>{children}</ButtonPrimary>;
};
export const SecundaryBtn = () => {
  return <ButtonSecundary>{children}</ButtonSecundary>;
};
export const IconBtn = () => {
  return <ButtonIcon>{children}</ButtonIcon>;
};

export const ShopBtn = ({ children }) => {
  return <ButtonShop>{children}</ButtonShop>;
};
