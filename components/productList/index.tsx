import { Grid } from '@mui/material'
import React, { FunctionComponent, useState, useEffect } from 'react'
import ItemList from './itemList'

interface PropsType {
  props: any
}

interface ItemType {
  item: {}
  id: string
}

const ProductList: FunctionComponent<PropsType> = (props) => {
  const [itemList, setItemList] = useState([])
  useEffect(() => {
    if (props) {
      setItemList(props.props.apiResponse.response)
    }
  }, [props])
  

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          {itemList.map((item: ItemType) => {
            return <ItemList key={item.id} props={item} />
          })}
        </Grid>
      </Grid>
    </>
  )
}


export default ProductList



