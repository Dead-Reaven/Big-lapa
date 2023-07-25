import { Outlet } from 'react-router'
import Container from '../Components/UI/Container.style'
import ResetStyles from '../Components/UI/Global.styles'
import AdminHeader from '../Pages/Admin/Components/Header/AdminHeader'

const LoginLayout = () => {
  return (
    <Container style={{ padding: '0 2.7%' }}>
      <ResetStyles />
      <AdminHeader />
      <Outlet />
    </Container>
  )
}

export default LoginLayout
