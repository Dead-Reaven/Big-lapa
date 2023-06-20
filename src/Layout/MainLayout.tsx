import { Outlet } from 'react-router-dom'
import Menu from '../Components/Menu/Menu'
import ResetStyles from '../styles/Global.styles'
import Container from '../styles/Container.style'

function MainLayout() {
  return (
    <Container>
      <ResetStyles />
      <Menu />
      <Outlet />
    </Container>
  )
}

export default MainLayout
