import { Grid } from "@mui/material"
import styled from "../../theme/styled-components"
import Image from 'next/image'


export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};;
  height: 56px;
  padding: 0 46px;
`

export const StyledImage = styled(Image)`
  margin-right: 24px;
`

export const Container = styled(Grid).attrs((props) => ({
  container: true,
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
}))`
  height: 56px;
`
