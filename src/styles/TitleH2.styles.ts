import styled from 'styled-components'
import { theme } from './Theme.styles'

interface Props {
  marginBottom?: string
}

const TitleH2 = styled.h2<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ marginBottom }) => marginBottom || '45px'};

  @media (${theme.breakPoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.mobileH2};
  }
`

export default TitleH2
