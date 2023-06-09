import Donation from './Components/Donation/Donation'
import Slider from './Components/Slider/Slider'
import { GridContainer, StyledHome } from './Home.styles'
import ShelterEvents from './Components/ShelterEventsSection/ShelterEvents'
import HopeSection from './Components/HopeSection/HopeSection'
import HowToSupport from './Components/HowToSupportSection/HowToSupport'
import Partners from './Components/Partners/Partners'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <Slider />
        <HopeSection />
        <HowToSupport />
        <Donation />
        <ShelterEvents />
        <Partners />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
