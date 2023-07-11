import { Outlet } from 'react-router-dom'
import ResetStyles from '../styles/Global.styles'
import AdminHeader from '../Components/AdminHeader/AdminHeader'
import Container from '../styles/Container.style'

function AdminLayout() {
  return (
    <Container padding="2.7% ">
      <ResetStyles />
      <AdminHeader />
      <Outlet />
    </Container>
  )
}

export default AdminLayout
