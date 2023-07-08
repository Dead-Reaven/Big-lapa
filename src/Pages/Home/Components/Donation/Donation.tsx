import React from 'react'
import Flex from '../../../../styles/Flex.styles'
import TitleH2 from '../../../../styles/TitleH2.styles'
import TitleH3 from '../../../../styles/TitleH3.styles'
import Dogs from './../../../../assets/img/Dogs_donation.png'
import DonationCard from './DonationCard'
import Amounts from './Amounts'
import Adress from './Adress'
import {
  StyledDonation,
  // DonationContainer,
  DonationContent,
  DonationButton,
  StyledDogs,
  DonationFlex,
} from './Donation.style'
import Container from '../../../../styles/Container.style'

function Donation() {
  return (
    <StyledDonation>
      <Container paddingtop="45px" paddingbottom="175px">
        <DonationContent>
          <Flex direction="column" align="center">
            <TitleH2>Безпечний донат</TitleH2>
            <DonationFlex gap="24px" width="100%">
              <DonationCard>
                <div>
                  <TitleH3>Разовий внесок</TitleH3>
                  <span>
                    Нагодуй пса вже сьогодні –<br /> твоя допомога важлива!
                  </span>
                </div>
                <Amounts />
                <DonationButton>Зробити внесок</DonationButton>
              </DonationCard>
              <DonationCard>
                <div>
                  <TitleH3>Негрошова допомога</TitleH3>
                  <p>
                    Існує багато способів допомоги – оберіть свій!
                    <br /> Допомога вуличним собакам не обмежується лише фінансами. Ми
                    постійно потребуємо кормів, медикаментів, розповсюдження інформації
                    тощо.
                  </p>
                </div>
                <Adress />
              </DonationCard>
            </DonationFlex>
          </Flex>
        </DonationContent>
        <StyledDogs src={Dogs} />
      </Container>
    </StyledDonation>
  )
}

export default Donation
