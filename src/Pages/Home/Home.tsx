import Donation from './Components/Donation/Donation'

import { GridContainer, StyledHome } from './Home.styles'
import ShelterEvents from './Components/ShelterEventsSection/ShelterEvents'
import HopeSection from './Components/HopeSection/HopeSection'
import HowToSupport from './Components/HowToSupportSection/HowToSupport'
import Partners from './Components/Partners/Partners'
import slides from '../../API/mainSliderImg'
import MainSlider from '../../Components/MainSlider/MainSlider'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <MainSlider data={slides} />
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
