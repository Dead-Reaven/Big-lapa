import ContactUs from './Components/ContactUs'
import Slider from './Components/Slider'
import { GridContainer, StyledHome } from './Contacts.style'
function Contacts() {
  return (
    <StyledHome data-testid="contacts-page">
      <GridContainer>
        <Slider />
        <ContactUs />
      </GridContainer>
    </StyledHome>
  )
}

export default Contacts
