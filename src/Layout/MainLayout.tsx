import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../styles/Global.styles'
import Footer from '../Components/Footer/Footer'

function MainLayout() {
  return (
    <>
      <ResetStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
