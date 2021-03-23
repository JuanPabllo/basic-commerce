import { MainButton } from './style';

export const Button: React.FC = ({ children }) => {
  const parapfvr = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return <MainButton onClick={parapfvr}>{children}</MainButton>;
};
