import { Grid } from '@mui/material'
import React, { FunctionComponent, useState, useEffect } from 'react'
import ItemList from './itemList'

interface AuthorType {
  name: string
  lastname: string
}

interface PriceType {
  amount: number
  currency: string
  decimals: string
}
  
interface ItemData {
  id: String,
  title: String, 
  price: { 
    currency: String, 
    amount: Number, 
    decimals: Number
  },
  picture: String, 
  condition: String, 
  free_shipping: Boolean
}

interface PropsType {
  props: {
    author: AuthorType
    categories: []
    items: ItemData[]
  }
}

const ProductList = (props: PropsType) => {
  const [itemList, setItemList] = useState([])
  console.info(props.props);
  
  // useEffect(() => {
  //   if (props) {
  //     setItemList(props.props)
  //   }
  // }, [props])
  

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          {/* {itemList.map((item) => {
            console.log(item);
            return <ItemList key={item.id} props={item} />
          })} */}
        </Grid>
      </Grid>
    </>
  )
}


export default ProductList



