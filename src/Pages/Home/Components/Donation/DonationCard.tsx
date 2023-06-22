import React from 'react'
import StyledDonationCard from './DonationCard.styles'
import Flex from '../../../../styles/Flex.styles'
import TitleH3 from '../../../../styles/TitleH3.styles'

function DonationCard() {
  return (
    <StyledDonationCard>
      <Flex direction="column">
        <TitleH3>Разовий внесок</TitleH3>
        <p>
          Нагодуй пса вже сьогодні – <br /> твоя допомога важлива!
        </p>
      </Flex>
    </StyledDonationCard>
  )
}

export default DonationCard
