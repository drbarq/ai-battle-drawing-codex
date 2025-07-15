import '../styles/globals.css';
import { PlantProvider } from '../context/PlantContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <PlantProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlantProvider>
  );
}

export default MyApp;
