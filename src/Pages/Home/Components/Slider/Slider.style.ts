import { theme } from '../../../../styles/Theme.styles'
import styled from 'styled-components'
import mainPhoto from '../../../../assets/img/main_photo.png'

const SliderStyled = styled.div`
  color: ${theme.colors.background};
  background-color: ${theme.colors.green};
`
const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  text-align: justify;
  position: relative;
  & svg {
    position: absolute;
    bottom: 0px;
  }
`

const H1 = styled.pre`
  font-size: 56px;
  font-weight: 700;
  line-height: 120%;
  /* margin-bottom: 10%; */
`
const SubText = styled.pre`
  font-size: 18px;
  line-height: 140%;
`

const YellowBlock = styled.div`
  display: flex;
  flex: 100% 1 1;
  max-width: 100%;
  background: ${theme.colors.yellow} url(${mainPhoto}) bottom no-repeat;
  background-size: contain;
  border-radius: 5%;
`

export { SliderStyled, YellowBlock, SubText, H1, TextContainer }
