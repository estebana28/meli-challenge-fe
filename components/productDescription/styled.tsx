import styled from "../../theme/styled-components"
import Image from "next/image"
import { H2, P, H3 } from "../../ui/typo"
import { PrimaryButton } from "../../ui/button"


export const StyledSold = styled.span`
  font-size: ${({ theme }) => theme.text.fontSize[14]};
`
export const StyledTitle = styled(H3)`
  font-size: ${({ theme }) => theme.text.fontSize[24]};
`

export const StyledPrice = styled(H2)`
  font-size: ${({ theme }) => theme.text.fontSize[46]};
`

export const StyledButton = styled(PrimaryButton)`
  .MuiButtonBase-root.MuiButton-root {
    margin-right: 32px;
  }
`

export const StyledDescriptionTitle = styled(H3)`
  font-size: ${({ theme }) => theme.text.fontSize[28]};
  color: ${({ theme }) => theme.colors.primary};
`

export const StyledDescription = styled(P)`
  font-size: ${({ theme }) => theme.text.fontSize[16]};
`

export const StyledImage = styled(Image).attrs(() => ({
  width: 680,
  height: 680
}))`
`


