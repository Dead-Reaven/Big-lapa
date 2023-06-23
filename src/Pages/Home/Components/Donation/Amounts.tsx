import React from 'react'
import StyledAmount from './Amount.style'
import Grid from './Grid.styled'

function Amounts() {
  return (
    <Grid>
      <StyledAmount text="50 грн" />
      <StyledAmount text="20 грн" />
      <StyledAmount text="100 грн" />
      <StyledAmount text="200 грн" />
      <StyledAmount isInput={true} />
    </Grid>
  )
}

export default Amounts
