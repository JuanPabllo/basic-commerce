import App from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import '../globals.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

