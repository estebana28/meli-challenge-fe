import { Grid } from '@mui/material'
import React from 'react'
import ItemList from './itemList'

function ProductList() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
        </Grid>
      </Grid>
    </>
  )
}

export default ProductList