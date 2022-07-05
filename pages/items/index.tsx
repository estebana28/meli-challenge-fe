import type { NextPage } from 'next'
import Head from 'next/head'
import { getAPIBaseURL } from "../../lib/.config";
import Breadcrumb from '../../components/breadcrumb';
import HeaderComponent from "../../components/header";
import ProductList from '../../components/productList';
import styled from "../../theme/styled-components"

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.bggray};
  min-height: 100vh;
`

const ItemsResults: NextPage = (props) => {
  
  return (
    <Root>
      <Head>
        <title>Mercado Libre Argentina - Resultado de busqueda</title>
        <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." />
      </Head>
      <HeaderComponent />
      <Breadcrumb />
      <ProductList props={props} />
    </Root>
  )
}


export async function getServerSideProps(context: any) {
  const searchValue = context.query.search;
  console.log(searchValue);
  const url = getAPIBaseURL()
  const options = {
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer" + process.env.VERCEL,
      "Content-Type": "application/json",
    }
  }
  // const response = await fetch(url)
  // .then(res => res.json())
  // .then(res => console.log(res))

  //console.log(response);
  
  try {
    await fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
  } catch (error) {
    console.log(error, "ERRORASO");
    
  }
  

  return {
    props: {
      
    },
  }
}

export default ItemsResults

