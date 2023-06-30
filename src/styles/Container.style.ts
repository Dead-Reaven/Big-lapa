import { styled } from 'styled-components'
import { theme } from './Theme.styles'

interface Props {
  fontSize?: string
  paddingtop?: string
  paddingbottom?: string
  color?: string
  padding?: string
}

const Container = styled.div<Props>`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme, padding }) => padding || theme.paddings.container};
  padding-top: ${({ paddingtop }) => paddingtop || '0'};
  padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.bodyText};

  @media (${theme.breakPoints.tablet}) {
    padding: ${({ theme, padding }) => padding || theme.paddings.containerTablet};
    padding-top: ${({ paddingtop }) => paddingtop || '0'};
    padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  }
  @media (${theme.breakPoints.mobile}) {
    padding: ${({ theme, padding }) => padding || theme.paddings.containerMobile};
    padding-top: ${({ paddingtop }) => paddingtop || '0'};
    padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  }
`
export default Container
