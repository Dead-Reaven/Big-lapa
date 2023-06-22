import React from 'react'
import Container from '../../../../styles/Container.style'
import Flex from '../../../../styles/Flex.styles'
import TitleH2 from '../../../../styles/TitleH2.styles'
import DonationCard from './DonationCard'

function Donation() {
  return (
    <Container paddingtop="60px">
      <Flex direction="column" align="center">
        <TitleH2>Безпечний донат</TitleH2>
        <Flex>
          <DonationCard />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Donation
