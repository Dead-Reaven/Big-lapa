import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../styles/Global.styles'
import Container from '../styles/Container.style'
import Footer from '../Components/Footer/Footer'

function MainLayout() {
  return (
    <>
      <Container>
        <ResetStyles />
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  )
}

export default MainLayout
