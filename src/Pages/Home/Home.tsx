import Main from './Components/Main'
import ShelterEvents from './Components/ShelterEvents'
import { GridContainer, StyledHome } from './Home.styles'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <Main />
        <ShelterEvents />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
