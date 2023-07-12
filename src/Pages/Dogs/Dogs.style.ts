import styled from 'styled-components'

const DogsStyled = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: ${({ theme }) => theme.headerHeight};
`

export { DogsStyled }
