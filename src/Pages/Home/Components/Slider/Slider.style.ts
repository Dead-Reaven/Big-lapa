import { theme } from '../../../../styles/Theme.styles'
import styled from 'styled-components'

const SliderStyled = styled.div`
  color: ${theme.colors.background};
  background-color: ${theme.colors.green};
`
const TextContainer = styled.div`
  padding: 0 40px 0px 0px;
  width: 100%;
  text-align: justify;
`

const H1 = styled.pre`
  font-size: 56px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 10%;
`
const SubText = styled.pre`
  font-size: 18px;
  line-height: 140%;
`

const YellowBlock = styled.div`
  width: 100%;
  height: 90%;
  background: ${theme.colors.yellow};
`
const img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`

export { SliderStyled, img, YellowBlock, SubText, H1, TextContainer }
