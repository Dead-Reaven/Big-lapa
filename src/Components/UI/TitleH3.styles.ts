import styled from 'styled-components'

interface Props {
  $marginBottom?: string
}

const TitleH3 = styled.h3<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '5px'};

  @media (max-width: 1279px) {
    font-size: ${({ theme }) => theme.fontSizes.tabletH3};
  }

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileH3};
  }
`

export default TitleH3
