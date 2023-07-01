import { styled } from 'styled-components'
import device from '../styles/Sizes'

interface Props {
  fontSize?: string
  paddingtop?: string
  paddingbottom?: string
  color?: string
  padding?: string
}

const Container = styled.div<Props>`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme, padding }) => padding || theme.paddings.container};
  padding-top: ${({ paddingtop }) => paddingtop || '0'};
  padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.bodyText};

  @media screen and ${device.mobile} {
    width: 393px;
  }
  @media screen and ${device.tablet} {
    width: 768px;
  }
  @media screen and ${device.laptop} {
    width: 1280px;
  }
  @media screen and ${device.desktop} {
    max-width: 1440px;
  }
`
export default Container
