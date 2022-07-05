import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import axios from "axios"
import { getAPIBaseURL } from "../../lib/.config";
import Breadcrumb from '../../components/breadcrumb';
import HeaderComponent from "../../components/header";
import ProductList from '../../components/productList';
import styled from "../../theme/styled-components"
import { rejects } from 'assert';

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
  const url = getAPIBaseURL()
  
  const apiResponse = await new Promise((resolve, reject) => {
    axios.get(`${url}/items?q=${searchValue}`)
    .then(res => resolve(res.data))
  }).catch((error) => console.log(error))

  return {
    props: {
      apiResponse
    },
  }
}

export default ItemsResults

