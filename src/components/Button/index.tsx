import { useRouter } from 'next/router';

import { MainButton } from './style';

interface Iroute {
  route?: string;
}

export const Button: React.FC<Iroute> = ({ children, route }) => {
  const router = useRouter();

  return <MainButton onClick={() => router.push(`${route}`)}>{children}</MainButton>;
};
