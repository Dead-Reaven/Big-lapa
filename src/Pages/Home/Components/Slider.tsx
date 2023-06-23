import { SliderStyled, img as DogImg, YellowBlock, H1, SubText } from './Slider.style'
import Container from '../../../styles/Container.style'
import mainPhoto from '../../../assets/img/main_photo.png'
import Flex from '../../../styles/Flex.styles'

function Slider() {
  return (
    <SliderStyled>
      <Container>
        <Flex justify="space-between" align="center" fullheight>
          <Flex direction="column">
            <H1>Подаруй другу шанс, врятуй тварину!</H1>
            <SubText>
              Допоможи домашнім тваринам повернутся додому. Ми розділяємо щастя,
              об&apos;єднуючи тварин та їх господарів.
            </SubText>
          </Flex>
          <YellowBlock>
            <DogImg src={mainPhoto} alt="Home main dog" />
          </YellowBlock>
        </Flex>
      </Container>
    </SliderStyled>
  )
}

export default Slider
