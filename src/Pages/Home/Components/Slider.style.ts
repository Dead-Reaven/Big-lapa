import { theme } from '../../../styles/Theme.styles'
import styled from 'styled-components'

const SliderStyled = styled.div`
  color: ${theme.colors.background};
  height: calc(100vh - 100px);
  background-color: ${theme.colors.green};
`
const H1 = styled.h1`
  text-align: left;
  font-size: 56px;
  font-weight: 700;
  line-height: 120%;
`
const SubText = styled.p`
  text-align: justify;
  font-size: 18px;
  line-height: 140%;
`

const YellowBlock = styled.div`
  background: ${theme.colors.yellow};
`
const img = styled.img`
  align-self: flex-end;
`

export { SliderStyled, img, YellowBlock, SubText, H1 }
