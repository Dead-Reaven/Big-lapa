import Main from './Components/Main'
import { GridContainer, StyledHome } from './Home.styles'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <Main />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
