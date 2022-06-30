import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderComponent from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." />
        <title>Mercado Libre Argentina - Envíos Gratis en el día</title>
      </Head>
      <HeaderComponent />
    </div>
  )
}

export default Home
