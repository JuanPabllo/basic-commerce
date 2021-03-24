import { MainButton } from './style';

interface Iroute {
  onClick: () => void;
}

export const Button: React.FC<Iroute> = ({ children, onClick }) => {
  return <MainButton onClick={onClick}>{children}</MainButton>;
};
