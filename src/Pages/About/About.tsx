import { AboutStyled } from './About.style'
import AboutContent from './AboutContent'

function About() {
  return (
    <AboutStyled data-testid="about-page">
      <AboutContent />
    </AboutStyled>
  )
}

export default About
