import { styled } from 'styled-components'

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddings.container};
`
export default Container
