import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { Container } from './Styles';

export const Products: React.FC = () => {

  const getData = useCallback(async () => {
    try {
      const { data }: any = await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Container>
      </Container>
    </>
  );
}