import TitleH1 from '../../../../styles/TitleH1.style'
import Container from '../../../../styles/Container.style'
import { SliderStyled, YellowBlock, TextContainer, Flex, Bullet } from './Slider.style'

function Slider() {
  return (
    <SliderStyled>
      <Container>
        <Flex>
          <TextContainer>
            <TitleH1>Подаруй другу шанс, врятуй тварину!</TitleH1>
            <p>
              Допоможи домашнім тваринам повернутся додому. Ми розділяємо щастя,
              об&apos;єднуючи тварин та їх господарів.
            </p>
          </TextContainer>
          <YellowBlock />
          <Bullet />
        </Flex>
      </Container>
    </SliderStyled>
  )
}

export default Slider
