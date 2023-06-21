import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../styles/Global.styles'
import Container from '../styles/Container.style'

function MainLayout() {
  return (
    <Container>
      <ResetStyles />
      <Header />
      <Outlet />
    </Container>
  )
}

export default MainLayout
