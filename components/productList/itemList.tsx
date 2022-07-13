import React, { FunctionComponent } from 'react'
import Grid from '@mui/material/Grid';
import { Root, StyledCard, StyledCardContent, StyledImage, StyledPrice, StyledLocation, StyledDescription, StyledIcon, AnchorLink, StyledPriceWrapper } from "./itemList.styled";
import Link from 'next/link';
import { getFormatedPrice } from "../../lib/aux"

interface PriceType {
  amount: number
  currency: string
  decimals: string
}
interface PropsType {
  price: PriceType
}

const ItemList: FunctionComponent<PropsType> = ({ price, address, title, picture, id, free_shipping }) => {
  console.log(price);

  return (
    <Root>
      <StyledCard>
        <StyledCardContent>
          <Grid container wrap='nowrap' spacing={2}>
            <Grid item>
              <Link href={`/items/${id}`} passHref>
                <AnchorLink>
                  <StyledImage src={picture} alt={title} />
                </AnchorLink>
              </Link>
            </Grid>
            <Grid item xs={10}>
              <Grid container direction="column">
                <Grid container justifyContent="space-between" alignItems="center">
                  <div>
                    <Grid container  alignItems="center">
                      <StyledPriceWrapper>
                        <StyledPrice>{getFormatedPrice(price.currency, price.amount)}</StyledPrice>
                      </StyledPriceWrapper>
                      {free_shipping && <StyledIcon src={"/assets/ic_shipping.png"} />}
                    </Grid>
                  </div>
                  <StyledLocation>{address?.state_name}</StyledLocation>
                </Grid>
                <Grid item xs>
                  <Link href={`/items/${id}`} passHref>
                    <AnchorLink>
                      <StyledDescription>{title}</StyledDescription>
                    </AnchorLink>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledCardContent>
      </StyledCard>
    </Root>
  )
}

export default ItemList