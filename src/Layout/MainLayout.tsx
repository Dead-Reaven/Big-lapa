import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ResetStyles from '../styles/Global.styles'

function MainLayout() {
  return (
    <>
      <ResetStyles />
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout
