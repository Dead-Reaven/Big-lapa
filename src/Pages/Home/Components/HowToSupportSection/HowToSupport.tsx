import pic1 from '../../../../Assets/Home/financial-support.webp'
import pic2 from '../../../../Assets/Home/other-support_1.webp'
import Container from '../../../../Components/UI/Container.style'

import {
  StyledSection,
  FlexContainer,
  CardDiv,
  StyledTitle,
  StyledTextDiv,
  StyledImg,
  StyledTitle3,
  StyledParagraph,
} from './HowToSupport.style'

function HowToSupport() {
  return (
    <StyledSection>
      <Container>
        <StyledTitle>Як підтримати притулок </StyledTitle>
        <FlexContainer>
          <CardDiv>
            <StyledImg src={pic1} alt="bowl with dog food" />
            <StyledTextDiv>
              <StyledTitle3>Фінансова допомога</StyledTitle3>
              <StyledParagraph>Один клік - одна порція корму</StyledParagraph>
            </StyledTextDiv>
          </CardDiv>
          <CardDiv>
            <StyledImg src={pic2} alt="dog toys" />
            <StyledTextDiv>
              <StyledTitle3>Корм, ліки, іграшки</StyledTitle3>
              <StyledParagraph>
                З радістю приймаємо корм, засоби для обробки, ліжаки та іграшки для
                цуценят
              </StyledParagraph>
            </StyledTextDiv>
          </CardDiv>
        </FlexContainer>
      </Container>
    </StyledSection>
  )
}

export default HowToSupport
