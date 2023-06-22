import { styled } from 'styled-components'

interface Props {
  fontSize?: string
  paddingtop?: string
  paddingbottom?: string
  color?: string
}

const Container = styled.div<Props>`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddings.container};
  padding-top: ${({ paddingtop }) => paddingtop || '0'};
  padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.bodyText};
  background: ${({ color, theme }) => color || theme.colors.background};
`
export default Container
