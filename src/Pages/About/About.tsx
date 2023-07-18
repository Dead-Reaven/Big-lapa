import { AboutStyled } from './About.style'
import Slider from './Components/Slider/Slider'

function About() {
  return (
    <AboutStyled data-testid="about-page">
      <Slider />
    </AboutStyled>
  )
}

export default About
