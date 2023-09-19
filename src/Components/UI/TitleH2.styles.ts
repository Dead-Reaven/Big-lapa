import styled from 'styled-components'
import { theme } from './Theme.styles'

interface Props {
  $marginBottom?: string
}

const TitleH2 = styled.h2<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '45px'};

  @media (max-width: 1279px) {
    font-size: ${({ theme }) => theme.fontSizes.tabletH2};
  }

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileH2};
  }
`

export default TitleH2
