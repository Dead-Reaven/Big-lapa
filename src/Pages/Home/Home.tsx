import Donation from './Components/Donation/Donation'
import { StyledHome } from './Home.styles'
import HopeSection from './Components/HopeSection/HopeSection'
import HowToSupport from './Components/HowToSupportSection/HowToSupport'
import Partners from './Components/Partners/Partners'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <HopeSection />
      <HowToSupport />
      <Donation />
      <Partners />
    </StyledHome>
  )
}

export default Home
