import {
  SliderStyled,
  img as DogImg,
  YellowBlock,
  H1,
  SubText,
  TextContainer,
} from './Slider.style'
import Container from '../../../styles/Container.style'
import mainPhoto from '../../../assets/img/main_photo.png'
import Flex from '../../../styles/Flex.styles'

function Slider() {
  return (
    <SliderStyled>
      <Container>
        <Flex justify="space-between" align="center" fullheight>
          <TextContainer>
            <H1>
              Подаруй другу шанс, <br />
              врятуй тварину!
            </H1>
            <SubText>
              Допоможи домашнім тваринам повернутся додому. <br />
              Ми розділяємо щастя, об&apos;єднуючи тварин та їх господарів.
            </SubText>
          </TextContainer>
          <YellowBlock>
            <DogImg src={mainPhoto} alt="Home main dog" />
          </YellowBlock>
        </Flex>
      </Container>
    </SliderStyled>
  )
}

export default Slider
