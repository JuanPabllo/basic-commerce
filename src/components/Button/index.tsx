import { useRouter } from 'next/router';

import { MainButton } from './style';

interface Iteste {
  teste: string;
}

export const Button: React.FC<Iteste> = ({ children, teste }) => {
  const router = useRouter();

  return <MainButton onClick={() => router.push(`${teste}`)}>{children}</MainButton>;
};
