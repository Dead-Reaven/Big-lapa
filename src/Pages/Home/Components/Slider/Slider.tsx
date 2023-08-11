import TitleH1 from '../../../../Components/UI/TitleH1.style'
import Container from '../../../../Components/UI/Container.style'
import { SliderStyled, TextContainer, Bullet } from './Slider.style'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'

function Slider() {
  return (
    <SliderStyled>
      <Container>
        <TextContainer>
          <TitleH1>Притулок для тварин</TitleH1> <br />
          <TitleH3>Знайдіть свого вірного хвоста у нашому притулку</TitleH3>
        </TextContainer>
      </Container>
      <Bullet />
    </SliderStyled>
  )
}

export default Slider
