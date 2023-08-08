import Flex from '../../../../Components/UI/Flex.styles'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import Dogs from '../../../../Assets/Home/dogs donation.webp'
import NovaPoshta from './img/Nova_Poshta.png'
import {
  StyledDonation,
  DonationContainer,
  DonationContent,
  StyledDogs,
  DonationFlex,
  StyledAdress,
  StyledDonationCard,
  DonationText,
} from './Donation.style'
import DonationForm from './DonationForm'

function Donation() {
  return (
    <StyledDonation id="donation">
      <DonationContainer>
        <DonationContent>
          <Flex $direction="column" $align="center">
            <TitleH2>Безпечний донат</TitleH2>
            <DonationFlex $gap="24px" $width="100%">
              <StyledDonationCard>
                <Flex $direction="column" $align="center" $gap="35px">
                  <DonationText>
                    <TitleH3>Разовий внесок</TitleH3>
                    <span>
                      Нагодуй пса вже сьогодні –<br /> твоя допомога важлива!
                    </span>
                  </DonationText>
                  <DonationForm />
                </Flex>
              </StyledDonationCard>
              <StyledDonationCard>
                <Flex $direction="column" $align="center" $gap="35px">
                  <DonationText>
                    <TitleH3>Негрошова допомога</TitleH3>
                    <p>
                      Існує багато способів допомоги – оберіть свій!
                      <br /> Допомога вуличним собакам не обмежується лише фінансами. Ми
                      постійно потребуємо кормів, медикаментів, розповсюдження інформації
                      тощо.
                    </p>
                  </DonationText>
                  <StyledAdress>
                    <Flex $justify="space-between" $align="flex-start">
                      <div>
                        <p>Наше відділення для посилок:</p>
                        <p>
                          Відділення № 19, м. Кривий Ріг, Мусоргского 3<br /> Притулок для
                          тварин “Біг Лапа”
                        </p>
                      </div>
                      <img src={NovaPoshta} alt="nova poshta logo" />
                    </Flex>
                  </StyledAdress>
                </Flex>
              </StyledDonationCard>
            </DonationFlex>
          </Flex>
        </DonationContent>
        <StyledDogs src={Dogs} />
      </DonationContainer>
    </StyledDonation>
  )
}

export default Donation
