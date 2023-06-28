import React from 'react'
import Container from '../../../../styles/Container.style'
import Flex from '../../../../styles/Flex.styles'
import TitleH2 from '../../../../styles/TitleH2.styles'
import TitleH3 from '../../../../styles/TitleH3.styles'
import Button from '../../../../styles/Button.styles'
import Dogs from './../../../../assets/img/Dogs_donation.png'
import FirstRectangle from '../../../../assets/img/First_green_rectangle.svg'
import SecondRectangle from '../../../../assets/img/Second_green_rectangle.svg'

import DonationCard from './DonationCard'
import Amounts from './Amounts'
import StyledAdress from './Adress.style'
import StyledDogs from './Dogs.style'
import DonationContent from './DonationContent.style'
import StyledDonation from './Donation.style'

function Donation() {
  return (
    <StyledDonation>
      <Container paddingtop="45px" paddingbottom="175px">
        <DonationContent>
          <Flex direction="column" align="center">
            <TitleH2>Безпечний донат</TitleH2>
            <Flex gap="24px" width="100%">
              <DonationCard>
                <div>
                  <TitleH3>Разовий внесок</TitleH3>
                  <span>
                    Нагодуй пса вже сьогодні –<br /> твоя допомога важлива!
                  </span>
                </div>
                <Amounts />
                <Button>Зробити внесок</Button>
              </DonationCard>
              <DonationCard>
                <div>
                  <TitleH3>Негрошова допомога</TitleH3>
                  <p>
                    Існує багато способів допомоги – оберіть свій!
                    <br /> Допомога вуличним собакам не обмежується лише фінансами.
                    <br /> Ми постійно потребуємо кормів, медикаментів,
                    <br />
                    розповсюдження інформації тощо.
                  </p>
                </div>
                <StyledAdress />
              </DonationCard>
            </Flex>
          </Flex>
        </DonationContent>
        <StyledDogs src={Dogs} />
      </Container>
    </StyledDonation>
  )
}

export default Donation
