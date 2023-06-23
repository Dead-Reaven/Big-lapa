import { styled } from 'styled-components'

interface Props {
  fontSize?: string
  padding?: string
}

const Container = styled.div<Props>`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ padding, theme }) => padding || theme.paddings.container};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.bodyText};
`
export default Container
