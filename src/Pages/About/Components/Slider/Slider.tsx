import TitleH1 from '../../../../Components/UI/TitleH1.style'
import Container from '../../../../Components/UI/Container.style'
import { SliderStyled, SliderContent, Bullet, SliderButton } from './Slider.style'

function Slider() {
  return (
    <SliderStyled>
      <Container>
        <SliderContent>
          <TitleH1>Підтримай друга, врятуй тварину!</TitleH1>
          <SliderButton>Детальніше</SliderButton>

        </SliderContent>
        <Bullet />
      </Container>

    </SliderStyled>
  )
}

export default Slider
