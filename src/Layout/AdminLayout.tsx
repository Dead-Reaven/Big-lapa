import { Outlet } from 'react-router-dom'
import ResetStyles from '../Components/UI/Global.styles'
import AdminHeader from '../Pages/Admin/Components/Header/AdminHeader'
import Container from '../Components/UI/Container.style'
import SideBar from '../Pages/Admin/Components/SideBar/SideBar'
import Flex from '../Components/UI/Flex.styles'

function AdminLayout() {
  return (
    <Container style={{ padding: '0 2.7%' }}>
      <ResetStyles />
      <AdminHeader />
      <Flex>
        <SideBar />
        <Outlet />
      </Flex>
    </Container>
  )
}

export default AdminLayout
