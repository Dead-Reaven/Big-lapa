import styled from 'styled-components'

const StyledHome = styled.div`
  color: ${({ theme }) => theme.colors.dark};
`
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, calc(100vh - 100px));
  grid-template-areas: 'main';
`

export { StyledHome, GridContainer }
