import Donation from './Components/Donation/Donation'

import { GridContainer, StyledHome } from './Home.styles'
import HopeSection from './Components/HopeSection/HopeSection'
import HowToSupport from './Components/HowToSupportSection/HowToSupport'
import Partners from './Components/Partners/Partners'

import MainSlider from '../../Components/MainSlider/MainSlider'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <GridContainer>
        <MainSlider />
        <HopeSection />
        <HowToSupport />
        <Donation />
        <Partners />
      </GridContainer>
    </StyledHome>
  )
}

export default Home
