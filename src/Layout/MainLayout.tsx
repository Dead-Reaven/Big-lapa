import { Outlet } from 'react-router-dom'
import Menu from '../Components/Menu'
import ResetStyles from '../styles/Global.styles'

function MainLayout() {
  return (
    <>
      <ResetStyles />
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayout
