import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

interface IdataPrices {
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

interface IapiCoxtextProps {
  dataApi: string[];
  dataPrices: IdataPrices;
}

interface apiProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext({} as IapiCoxtextProps);

export function ApiProvider({ children }: apiProviderProps): any {
  const [dataApi, setDataApi] = useState([]);
  const [dataPrices, setPrices] = useState({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0
  });
  const apiFetch = useCallback(async () => {
    try {
      const apiData = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
      const data = await apiData.json();
      const dados = data.items;
      //console.log(dados);
      setPrices({
        subTotal: data.subTotal,
        shippingTotal: data.shippingTotal,
        discount: data.discount,
        total: data.total
      });
      setDataApi(dados);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    apiFetch();
  }, [apiFetch]);

  return (
    <ApiContext.Provider
      value={{
        dataApi,
        dataPrices
      }}>
      {children}
    </ApiContext.Provider>
  );
}
