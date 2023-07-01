import { styled } from 'styled-components'
// import device from '../styles/Sizes'

interface Props {
  fontSize?: string
  paddingtop?: string
  paddingbottom?: string
  color?: string
  padding?: string
}
const size = {
  mobile: '393px',
  tablet: '768px',
  laptop: '1280px',
  desktop: '1440px',
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
}

const Container = styled.div<Props>`
  margin: 0 auto;
  padding: ${({ theme, padding }) => padding || theme.paddings.container};
  padding-top: ${({ paddingtop }) => paddingtop || '0'};
  padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.bodyText};

  @media screen and (${device.mobile}) {
    max-width: 393px;
  }
  @media screen and (${device.tablet}) {
    max-width: 768px;
  }
  @media screen and (${device.laptop}) {
    max-width: 1280px;
  }
  @media screen and (${device.desktop}) {
    max-width: 1440px;
  }
`
export default Container
