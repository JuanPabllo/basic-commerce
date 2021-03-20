import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

interface IapiCoxtextProps {
  dataApi: string[];
}

interface apiProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext({} as IapiCoxtextProps);

export function ApiProvider({ children }: apiProviderProps): any {
  const [dataApi, setDataApi] = useState([]);
  const apiFetch = useCallback(async () => {
    try {
      const apiData = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
      const data = await apiData.json();
      const dados = data.items;
      // const dataName = dados.map((item) => item.product.name);
      //console.log(dados);
      setDataApi(dados);
    } catch (err) {
      console.log(err + 'Código: 500');
    }
  }, []);

  useEffect(() => {
    apiFetch();
  }, [apiFetch]);

  return (
    <ApiContext.Provider
      value={{
        dataApi
      }}>
      {children}
    </ApiContext.Provider>
  );
}
