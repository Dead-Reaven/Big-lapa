import TitleH1 from '../../../../Components/UI/TitleH1.style'
import Container from '../../../../Components/UI/Container.style'
import {
  SliderStyled,
  YellowBlock,
  SliderContent,
  Flex,
  Bullet,
  SliderButton,
  MobileSliderButton,
} from './Slider.style'

function Slider() {
  return (
    <SliderStyled>
      <Container>
        <Flex>
          <SliderContent>
            <TitleH1>Підтримай друга, врятуй тварину!</TitleH1>
            <SliderButton>Детальніше</SliderButton>
          </SliderContent>
          <YellowBlock />
          <MobileSliderButton>Детальніше</MobileSliderButton>
          <Bullet />
        </Flex>
      </Container>
    </SliderStyled>
  )
}

export default Slider
