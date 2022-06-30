import styled from "../../theme/styled-components"
import Image from "next/image"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { H2, P } from "../../ui/typo"

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`

export const StyledCard = styled(Card)``

export const StyledCardContent = styled(CardContent)``

export const StyledPrice = styled(H2)`
  font-size: ${({ theme }) => theme.text.fontSize[24]};
  `

export const StyledPriceWrapper = styled.div`
  margin-right: 8px;
`

export const StyledLocation = styled(P)`
  font-size: ${({ theme }) => theme.text.fontSize[12]};
  `

export const StyledDescription = styled(P)`
  font-size: ${({ theme }) => theme.text.fontSize[18]};
  margin: 16px 0;
  `

export const StyledImage = styled(Image).attrs(() => ({
  width: 180,
  height: 180
}))`
  margin: 16px;
  border-radius: 4px;
  `

export const StyledIcon = styled(Image).attrs(() => ({
  width: 16,
  height: 16,
}))``

export const AnchorLink = styled.a`
  text-decoration: none;
`


