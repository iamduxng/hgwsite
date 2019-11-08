import App from "next/app";
import Head from "next/head";
import { title } from "./_document";
import 'styles/styles.css';
import Navbar from 'modules/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faSearch,
  faClipboardList
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faSearch, faClipboardList);

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Navbar/>
        <Component {...pageProps} router={router} />
      </>
    );
  }
}
