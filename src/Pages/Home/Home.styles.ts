import styled from 'styled-components'

const StyledHome = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: ${({ theme }) => theme.headerHeight};
`
const GridContainer = styled.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`

export { StyledHome, GridContainer }
