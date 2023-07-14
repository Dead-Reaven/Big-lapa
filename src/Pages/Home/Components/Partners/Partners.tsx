import React from 'react'
import Container from '../../../../Components/UI/Container.style'
import { PartnersSection, PartnersTitle, PartnersFlex } from './Partners.style'
import logo1 from './img/Purina-logo.png'
import logo2 from './img/Royal-Canin-Logo.png'

function Partners() {
  const partnersList = [
    {
      id: 1,
      src: logo1,
    },
    {
      id: 2,
      src: logo2,
    },
  ]
  return (
    <PartnersSection>
      <Container>
        <PartnersTitle>Партнери</PartnersTitle>
        <PartnersFlex>
          {partnersList.map((partner) => (
            <img src={partner.src} key={partner.id} alt="partner" />
          ))}
        </PartnersFlex>
      </Container>
    </PartnersSection>
  )
}

export default Partners
