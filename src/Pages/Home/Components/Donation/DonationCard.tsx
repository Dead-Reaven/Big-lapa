import React, { ReactNode } from 'react'
import StyledDonationCard from './DonationCard.style'
import Flex from '../../../../styles/Flex.styles'

interface Props {
  children?: ReactNode
}

function DonationCard(props: Props) {
  return (
    <StyledDonationCard>
      <Flex direction="column" align="center" gap="35px">
        {props.children}
      </Flex>
    </StyledDonationCard>
  )
}

export default DonationCard