import styled from 'styled-components'
import { theme } from './Theme.styles'

interface Props {
  marginBottom?: string
}

const TitleH3 = styled.h3<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ marginBottom }) => marginBottom || '5px'};

  @media (${theme.breakPoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.mobileH3};
  }
`

export default TitleH3
