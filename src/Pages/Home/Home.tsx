import Slider from './Components/Slider'
import { GridContainer, StyledHome } from './Home.styles'
import ShelterEvents from './Components/ShelterEvents'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <Slider />
        <ShelterEvents />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
