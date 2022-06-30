import type { NextPage } from 'next'
import Head from 'next/head'
import Breadcrumb from '../../components/breadcrumb';
import HeaderComponent from "../../components/header";
import ProductList from '../../components/productList';
import styled from "../../theme/styled-components"

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.bggray};
  min-height: 100vh;
`

const ItemsResults: NextPage = () => {
  return (
    <Root>
      <Head>
        <title>Mercado Libre Argentina - Resultado de busqueda</title>
        <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." />
      </Head>
      <HeaderComponent />
      <Breadcrumb />
      <ProductList />
    </Root>
  )
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default ItemsResults