import styled from 'styled-components'

interface Props {
  marginBottom?: string
}

const TitleH2 = styled.h2<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ marginBottom }) => marginBottom || '45px'};
`

export default TitleH2
