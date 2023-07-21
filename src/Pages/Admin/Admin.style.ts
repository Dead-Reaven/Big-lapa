import { styled } from 'styled-components'

const StyledAdmin = styled.div`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 40px;

  @media screen and (max-width: 767px) {
    margin-left: 40px;
    padding: 20px;
  }
`

export { StyledAdmin }
