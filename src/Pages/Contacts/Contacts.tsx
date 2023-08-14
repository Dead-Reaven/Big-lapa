import { useState } from 'react'
import FeedbackModal from '../../Components/FeedbackModal/FeedbackModal'
import ContactUs from './Components/ContactUs'
import { StyledContacts } from './Contacts.style'
import PhotoModal from './img/ModalPhoto.webp'

function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <StyledContacts data-testid="contacts-page">
      <FeedbackModal
        title="Дякуємо за звернення!"
        image={PhotoModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ContactUs setIsModalOpen={setIsModalOpen} />
    </StyledContacts>
  )
}

export default Contacts
