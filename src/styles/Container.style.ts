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
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5.83%;
  @media (min-width: 1440px) {
    padding: 0 84px;
  }
`
export default Container
