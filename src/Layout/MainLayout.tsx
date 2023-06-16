import { Outlet } from 'react-router-dom'
import Menu from '../Components/Menu'
import ResetStyles from './Reset.styles'

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
