import { Route, Routes } from 'react-router'
import { useSuccessMessage } from '../../successContextMess'
import NotFound from '../NotFound/NotFound'
import { StyledAdmin } from './Admin.style'
import { Contacts, DogCards, Partners, Reports, Settings } from './Catalog'
import DogCard from './Catalog/DogCards/DogCard/DogCard'
import Message from './Components/UI/Message'

function Admin() {
  const { successMessage } = useSuccessMessage()

  return (
    <StyledAdmin>
      <Routes>
        <Route index path="/" element={<DogCards />} />
        <Route path="/new-card" element={<DogCard $newCard={true} />} />
        <Route path="/edit-card/:_id" element={<DogCard $newCard={false} />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {successMessage ? <Message mode="green">{successMessage}</Message> : null}
    </StyledAdmin>
  )
}

export default Admin
