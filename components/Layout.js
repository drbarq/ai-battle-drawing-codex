import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Plant Watering App</title>
        <meta name="description" content="Keep track of your plants and water them on time" />
      </Head>
      <header>
        <nav className="container">
          <Navbar />
        </nav>
      </header>
      <main className="container">{children}</main>
    </>
  );
}
