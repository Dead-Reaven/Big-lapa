import styled from 'styled-components'

interface Props {
  $marginBottom?: string
}

const TitleH1 = styled.h1<Props>`
  text-align: left;

  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.h1};

  @media (max-width: 1279px) {
    font-size: ${({ theme }) => theme.fontSizes.tabletH1};
  }

  @media (max-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileH1};
  }
`

export default TitleH1
