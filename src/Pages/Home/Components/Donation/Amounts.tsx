import React from 'react'
import Amount from './Amount'
import { Grid } from './Donation.style'

function Amounts() {
  return (
    <Grid>
      <Amount text="20 грн" />
      <Amount text="50 грн" />
      <Amount text="100 грн" />
      <Amount text="200 грн" />
      <Amount isInput={true} />
    </Grid>
  )
}

export default Amounts
