import React from 'react'
import Grid from '@mui/material/Grid';
import { Root, StyledCard, StyledCardContent, StyledImage, StyledPrice, StyledLocation, StyledDescription, StyledIcon, AnchorLink, StyledPriceWrapper } from "./itemList.styled";
import Link from 'next/link';

function ItemList() {
  return (
    <Root>
      <StyledCard>
        <StyledCardContent>
          <Grid container justifyContent="center">
            <Grid item xs={3}>
              <Link href={"/"} passHref>
                <AnchorLink>
                  <StyledImage src={"/assets/Logo_ML.png"} />
                </AnchorLink>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Grid container direction="column">
                <Grid container justifyContent="space-between" alignItems="center">
                  <div>
                    <Grid container  alignItems="center">
                      <StyledPriceWrapper>
                        <StyledPrice>$ 1.980</StyledPrice>
                      </StyledPriceWrapper>
                      {true && <StyledIcon src={"/assets/ic_shipping.png"} />}
                    </Grid>
                  </div>
                  <StyledLocation>Capital Federal</StyledLocation>
                </Grid>
                <Grid item>
                  <Link href={"/"} passHref>
                    <AnchorLink>
                      <StyledDescription>Apple Ipod Touch 5g 16GB Negro Igual A Nuevo Completo Unico!</StyledDescription>
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