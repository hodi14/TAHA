import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
    return (
      <>
        <Head>
            <title> Taha EsmatTalab </title>
        </Head>
        <Header />
        <main>{children}</main>
      </>
    )
  }