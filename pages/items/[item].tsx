import type { NextPage } from 'next'
import Head from 'next/head'
import Breadcrumb from '../../components/breadcrumb';
import HeaderComponent from "../../components/header";

const ItemDescription: NextPage = () => {
  return (
    <div>
      <Head>
        {/* Agregar data del producto */}
        <title>Mercado Libre Argentina - ACA</title>
        <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." />
      </Head>
      <HeaderComponent />
      <Breadcrumb />
      <h1>Soy un h1 en items result</h1>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default ItemDescription