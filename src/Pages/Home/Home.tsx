import Slider from './Components/Slider'
import { GridContainer, StyledHome } from './Home.styles'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <Slider />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
