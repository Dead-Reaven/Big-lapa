import dog1 from '../../../../assets/hopeSection/dog1.png'
import dog2 from '../../../../assets/hopeSection/dog2.png'
import dog3 from '../../../../assets/hopeSection/dog3.png'
import dog4 from '../../../../assets/hopeSection/dog4.png'

import {
  StyledContainer,
  StyledDogList,
  StyledParagraphList,
  StyledSection,
  StyledP,
  StyledImages,
  StyledTitle,
} from './HopeSection.style'

function HopeSection() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledDogList>
          <li>
            <StyledImages src={dog1} alt="dog1" />
          </li>
          <li>
            <StyledImages src={dog2} alt="dog2" />
          </li>
          <li>
            <StyledImages src={dog3} alt="dog3" />
          </li>
          <li>
            <StyledImages src={dog4} alt="dog4" />
          </li>
        </StyledDogList>

        <StyledParagraphList>
          <li>
            <StyledTitle>Подаруй собакам нову надію на щасливе життя! </StyledTitle>
          </li>
          <li>
            <StyledP>
              Приєднуйтесь до нашої спільноти людей з великим серцем, які допомагають цим
              беззахисним тваринам знайти своїх вірних друзів. Наш веб-сайт для збору
              пожертв є зв`язком між вами та цими тваринами, які потребують допомоги.
              Разом ми можемо змінити їхнє життя на краще
            </StyledP>
            <StyledP>
              Кожен ваш вклад має велике значення для поліпшення їхнього добробуту. Ваша
              підтримка допомагає нам забезпечувати безперебійну медичну допомогу, належне
              харчування, безпечний притулок та всебічний догляд для собак
            </StyledP>
            <StyledP>
              Ваша допомога має велике значення для покращення життя цих тварин. Кожен ваш
              внесок допомагає нам забезпечити собакам необхідну медичну допомогу, належне
              харчування, безпечне місце проживання і належний догляд.
            </StyledP>
          </li>
        </StyledParagraphList>
      </StyledContainer>
    </StyledSection>
  )
}

export default HopeSection
