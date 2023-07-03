import { theme } from '../../../../styles/Theme.styles'
import styled from 'styled-components'
import mainPhoto from '../../../../assets/img/main_photo.png'
import Container from '../../../../styles/Container.style'

const SliderStyled = styled.div`
  height: calc(100vh - 96px);
  color: ${theme.colors.background};
  background-color: ${theme.colors.green};
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto 1 0;
  gap: 10%;
  margin-top: 10%;
`
const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 2.5% 5.83%;

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    ${TextContainer} {
      /*  */
    }
  }
`

const H1 = styled.pre`
  font-size: 3.8vw;
  font-weight: 700;
  line-height: 120%;
`
const SubText = styled.pre`
  display: flex;
  font-size: 1.25vw;
  line-height: 140%;
  flex: auto 1 0;
`

const YellowBlock = styled.div`
  width: 48%;
  background: ${theme.colors.yellow} url(${mainPhoto}) bottom no-repeat;
  background-size: contain;
  border-radius: 5%;
`

export { SliderStyled, YellowBlock, SubText, H1, TextContainer, FlexContainer }
