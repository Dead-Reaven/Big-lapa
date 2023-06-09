import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../Components/UI/Global.styles'
import Footer from '../Components/Footer/Footer'
import Cookies from '../Components/Cookies/Cookies'

function MainLayout() {
  return (
    <>
      <ResetStyles />
      <Header />
      <Outlet />
      <Cookies />
      <Footer />
    </>
  )
}

export default MainLayout
