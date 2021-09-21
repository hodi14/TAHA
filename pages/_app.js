import '../public/assets/fonts/fontawesome-pro-5.15.1-web-ulabs/css/all.min.css'
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'; 
import '../node_modules/mdbreact/dist/css/mdb.css';
import '../styles/css/styles.css';
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';

export default function MyApp({ Component, pageProps }) {
  const [isLoaded, setLoad] = useState(false);
  if (!isLoaded) {
    console.log("loading...");
  }
  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
