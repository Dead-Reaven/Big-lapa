import styled from 'styled-components'

interface Props {
  marginBottom?: string
}

const TitleH3 = styled.h2<Props>`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ marginBottom }) => marginBottom || '5px'};
`

export default TitleH3
