import { SliderStyled, YellowBlock, H1, SubText, TextContainer } from './Slider.style'
import Container from '../../../../styles/Container.style'
import Flex from '../../../../styles/Flex.styles'
import { ReactComponent as Bullet } from '../../../../assets/img/bullet_first.svg'

function Slider() {
  return (
    <SliderStyled>
      <Container>
        <Flex style={{ padding: '2.5% 0px' }} fullheight>
          <TextContainer>
            <H1>
              Подаруй другу шанс, <br />
              врятуй тварину!
            </H1>
            <SubText>
              Допоможи домашнім тваринам повернутся додому. <br />
              Ми розділяємо щастя, об&apos;єднуючи тварин та їх господарів.
            </SubText>
            <Bullet />
          </TextContainer>
          <YellowBlock />
        </Flex>
      </Container>
    </SliderStyled>
  )
}

export default Slider
