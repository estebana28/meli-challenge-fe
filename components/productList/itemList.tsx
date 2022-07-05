import React, { FunctionComponent } from 'react'
import Grid from '@mui/material/Grid';
import { Root, StyledCard, StyledCardContent, StyledImage, StyledPrice, StyledLocation, StyledDescription, StyledIcon, AnchorLink, StyledPriceWrapper } from "./itemList.styled";
import Link from 'next/link';
import { getFormatedPrice } from "../../lib/aux"

interface PropsType {
  props: any
  item: any
}


const ItemList: FunctionComponent<PropsType> = (props: any) => {
  const { price, address, title, thumbnail } = props.props
  //console.log(props.props);
  


  return (
    <Root>
      <StyledCard>
        <StyledCardContent>
          <Grid container justifyContent="center">
            <Grid item xs={3}>
              <Link href={"/"} passHref>
                <AnchorLink>
                  <StyledImage src={thumbnail} alt={title} />
                </AnchorLink>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Grid container direction="column">
                <Grid container justifyContent="space-between" alignItems="center">
                  <div>
                    <Grid container  alignItems="center">
                      <StyledPriceWrapper>
                        <StyledPrice>{getFormatedPrice(price)}</StyledPrice>
                      </StyledPriceWrapper>
                      {true && <StyledIcon src={"/assets/ic_shipping.png"} />}
                    </Grid>
                  </div>
                  <StyledLocation>{address.state_name}</StyledLocation>
                </Grid>
                <Grid item>
                  <Link href={"/"} passHref>
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