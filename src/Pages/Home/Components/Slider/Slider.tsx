import {
  SliderStyled,
  YellowBlock,
  H1,
  SubText,
  TextContainer,
  Flex,
  StyledContainer,
  Bullet,
} from './Slider.style'
// import { ReactComponent as Bullet } from '../../../../assets/img/bullet_first.svg'

function Slider() {
  return (
    <SliderStyled>
      <StyledContainer>
        <Flex>
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
          <YellowBlock />
          <Bullet />
        </Flex>
      </StyledContainer>
    </SliderStyled>
  )
}

export default Slider
