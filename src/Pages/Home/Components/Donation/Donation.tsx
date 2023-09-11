import { useState } from 'react'
import Dogs from '../../../../Assets/Home/dogs donation.webp'
import Flex from '../../../../Components/UI/Flex.styles'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import {
  DonationContainer,
  DonationContent,
  DonationFlex,
  DonationText,
  StyledAdress,
  StyledDogs,
  StyledDonation,
  StyledDonationCard,
} from './Donation.style'
import DonationForm from './DonationForm'
import NovaPoshta from './img/Nova_Poshta.png'

function Donation() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <StyledDonation id="donation">
      {/*       <FeedbackModal
        title="Дякуємо за донат!"
        body="Завдяки вашій підтримці, ми маємо змогу забезпечити собак необхідною кількістю їжі, медикаментів та засобів для догляду. Дякуємо, що піклуєтеся про наших хвостиків!"
        image={PhotoModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
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
                  <DonationForm setIsModalOpen={setIsModalOpen} />
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
                          Старокостянтинів відділення №1 Журба Оксана Василівна Нова пошта
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
