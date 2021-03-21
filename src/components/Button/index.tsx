import { MainButton } from './style';

export const Title: React.FC = ({ children }) => {
  return <MainButton className="buttonHover">{children}</MainButton>;
};
