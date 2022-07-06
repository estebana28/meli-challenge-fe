import React, { FunctionComponent } from 'react'
import Grid from '@mui/material/Grid'
import { getFormatedPrice, getConditionFormat } from '../../lib/aux'
import { StyledImage, StyledSold, StyledTitle, StyledPrice, StyledButton, StyledDescriptionTitle, StyledDescription } from "./styled"

interface PropsType {
  props: any
}

const ProductDescription: FunctionComponent = (props: any) => {  
  const { picture, sold_quantity, condition, description, price, title } = props.props
  console.log(props);
  

  return (
    <>
      <Grid container direction="row">
        <Grid item xs={7}>
          <StyledImage src={picture} alt={title} />
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column">
          <StyledSold>{`${getConditionFormat(condition)} - ${sold_quantity} vendidos`}</StyledSold>
          <StyledTitle>{title}</StyledTitle>
          <StyledPrice>{getFormatedPrice(price.currency, price.amount)}</StyledPrice>
          <StyledButton>Comprar</StyledButton>
        </Grid>
        </Grid>
      </Grid>
      <StyledDescriptionTitle>Descripción del producto</StyledDescriptionTitle>
      <StyledDescription>{description}</StyledDescription>
    </>
  )
}

export default ProductDescription