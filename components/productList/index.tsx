import { Grid } from '@mui/material'
import React, { FunctionComponent } from 'react'
import ItemList from './itemList'
import { useRouter } from 'next/router'

interface PropsType {
  props: any
}

const ProductList: FunctionComponent<PropsType> = (props) => {
  const itemList = [1, 2, 3]
  console.log(props.props.searchValue);

  

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          {itemList.map((item) => {
            return <ItemList key={item} />
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default ProductList

