import { Outlet } from 'react-router-dom'
import ResetStyles from '../Components/UI/Global.styles'
import AdminHeader from '../Components/AdminHeader/AdminHeader'
import Container from '../Components/UI/Container.style'

function AdminLayout() {
  return (
    <Container style={{ padding: '2.7%' }}>
      <ResetStyles />
      <AdminHeader />
      <Outlet />
    </Container>
  )
}

export default AdminLayout
