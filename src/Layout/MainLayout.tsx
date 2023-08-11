import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../Components/UI/Global.styles'
import Footer from '../Components/Footer/Footer'
import Cookies from '../Components/Cookies/Cookies'
import MainSlider from '../Components/MainSlider/MainSlider'

function MainLayout() {
  return (
    <>
      <ResetStyles />
      <Header />
      <MainSlider />
      <Outlet />
      <Cookies />
      <Footer />
    </>
  )
}

export default MainLayout
