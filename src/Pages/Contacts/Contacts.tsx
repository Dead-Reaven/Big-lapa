import ContactUs from './Components/ContactUs'
import Slider from './Components/Slider'
import { GridContainer, StyledContacts } from './Contacts.style'
function Contacts() {
  return (
    <StyledContacts data-testid="contacts-page">
      <GridContainer>
        <Slider />
        <ContactUs />
      </GridContainer>
    </StyledContacts>
  )
}

export default Contacts
