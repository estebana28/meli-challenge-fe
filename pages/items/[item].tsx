import type { NextPage } from 'next'
import Head from 'next/head'
import axios from "axios"
import { getAPIBaseURL } from "../../lib/.config";
import Breadcrumb from '../../components/breadcrumb';
import HeaderComponent from "../../components/header";

const ItemDescription: NextPage = (props) => {
  return (
    <div>
      <Head>
        {/* Agregar data del producto */}
        <title>Mercado Libre Argentina - ACA</title>
        <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." />
      </Head>
      <HeaderComponent />
      <Breadcrumb />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const searchId = context.params.item;
  const url = getAPIBaseURL()
  
  const apiResponse = await new Promise((resolve, reject) => {
    axios.get(`${url}/items/${searchId}`)
    .then(res => resolve(res.data))
  }).catch((error) => console.log(error))
  
  return {
    props: {
      apiResponse
    },
  }
}

export default ItemDescription