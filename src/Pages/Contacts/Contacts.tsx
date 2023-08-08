import { useState } from 'react'
import FeedbackModal from '../../Components/FeedbackModal/FeedbackModal'
import ContactUs from './Components/ContactUs'
import Slider from './Components/Slider'
import { GridContainer, StyledContacts } from './Contacts.style'
import PhotoModal from './img/ModalPhoto.webp'
function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <StyledContacts data-testid="contacts-page">
      <GridContainer>
        <FeedbackModal
          title="Дякуємо за звернення!"
          image={PhotoModal}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <Slider />
        <ContactUs setIsModalOpen={setIsModalOpen} />
      </GridContainer>
    </StyledContacts>
  )
}

export default Contacts
