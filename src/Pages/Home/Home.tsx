import Donation from './Components/Donation/Donation'
import Main from './Components/Main'
import { GridContainer, StyledHome } from './Home.styles'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <Main />
        <Donation />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
