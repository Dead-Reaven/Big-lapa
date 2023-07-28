import { Navigate, Outlet } from 'react-router'

const RouteGuard = () => {
  function hasJWT() {
    let flag = false
    localStorage.getItem('access_token') ? (flag = true) : (flag = false)
    return flag
  }
  return hasJWT() ? <Outlet /> : <Navigate to="/login" />
}

export default RouteGuard
