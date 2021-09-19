import '../public/assets/fonts/fontawesome-pro-5.15.1-web-ulabs/css/all.min.css'
import 'mdbreact/dist/css/mdb.css';
import '../styles/css/styles.css';
import Layout from '../Components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
