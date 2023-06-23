import Donation from './Components/Donation/Donation'
import Slider from './Components/Slider/Slider'
import { GridContainer, StyledHome } from './Home.styles'
import ShelterEvents from './Components/ShelterEvents'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <Slider />
        <Donation />
        <ShelterEvents />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
