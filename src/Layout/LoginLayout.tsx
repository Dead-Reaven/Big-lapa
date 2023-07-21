import { Outlet } from 'react-router'
import { Footer, Header } from '../Components'
import Cookies from '../Components/Cookies/Cookies'
import ResetStyles from '../Components/UI/Global.styles'

const LoginLayout = () => {
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

export default LoginLayout
