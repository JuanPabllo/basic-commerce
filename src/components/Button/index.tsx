import { useRouter } from 'next/router';

import { MainButton } from './style';

interface Isettings {
  onClick?: () => void;
  route: string;
}

export const Button: React.FC<Isettings> = ({ children, onClick, route }) => {
  const router = useRouter();

  const onClickSettings = () => {
    onClick();
    router.push(route);
  };

  return <MainButton onClick={onClickSettings}>{children}</MainButton>;
};
