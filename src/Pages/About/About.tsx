import { AboutStyled } from './About.style'
import AboutContent from './Components/AboutContent/AboutContent'
import Slider from './Components/Slider/Slider'

function About() {
  return (
    <AboutStyled data-testid="about-page">
      <Slider />

      <AboutContent />
    </AboutStyled>
  )
}

export default About
