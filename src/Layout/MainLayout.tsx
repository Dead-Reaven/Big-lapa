import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../styles/Global.styles'
import Footer from '../Components/Footer/Footer'
import Cookies from '../Pages/Home/Components/Cookies/Cookies'

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
