import { Route, Routes } from 'react-router'
import { StyledAdmin } from './Admin.style'
import {
  DogCards,
  Partners,
  Sliders,
  Reports,
  Contacts,
  Settings,
  NewCard,
  EditCard,
} from './Catalog'
import NotFound from '../NotFound/NotFound'

function Admin() {
  return (
    <StyledAdmin>
      <Routes>
        <Route index path="/" element={<DogCards />} />
        <Route path="/new-card" element={<NewCard />} />
        <Route path="/edit-card" element={<EditCard />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledAdmin>
  )
}

export default Admin
