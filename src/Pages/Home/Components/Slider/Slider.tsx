import {
  SliderStyled,
  YellowBlock,
  H1,
  SubText,
  TextContainer,
  FlexContainer,
} from './Slider.style'
import { ReactComponent as Bullet } from '../../../../assets/img/bullet_first.svg'

function Slider() {
  return (
    <SliderStyled>
      <FlexContainer>
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
      </FlexContainer>
    </SliderStyled>
  )
}

export default Slider
