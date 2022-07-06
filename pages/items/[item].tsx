import type { NextPage } from 'next'
import Head from 'next/head'
import axios from "axios"
import { getAPIBaseURL } from "../../lib/.config";
import Breadcrumb from '../../components/breadcrumb';
import HeaderComponent from "../../components/header";
import ProductDescription from '../../components/productDescription';

const ItemDescription: NextPage = (props) => {
  const { description } = props.apiResponse.response.item
  
  
  return (
    <div>
      <Head>
        {/* Agregar data del producto */}
        <title>Mercado Libre Argentina - ACA</title>
        <meta name="product description" content={description} />
      </Head>
      <HeaderComponent />
      <Breadcrumb />
      <ProductDescription props={props.apiResponse.response.item} />
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