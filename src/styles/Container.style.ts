import { styled } from 'styled-components'
// import device from '../styles/Sizes'

interface Props {
  fontSize?: string
  paddingtop?: string
  paddingbottom?: string
  color?: string
  padding?: string
}

const Container = styled.div<Props>`
  margin: 0 auto;
  padding: ${({ theme, padding }) => padding || theme.paddings.container};
  padding-top: ${({ paddingtop }) => paddingtop || '0'};
  padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.bodyText};
`
export default Container
