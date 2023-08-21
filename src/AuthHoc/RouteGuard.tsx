import { Navigate, useLocation } from 'react-router'
import { useAuth } from './useAuth'
interface Props {
  children: any
}
const RouteGuard = ({ children }: Props) => {
  const location = useLocation()
  const { auth }: any = useAuth()

  // if (!auth) {
  //   return <Navigate to="/login" state={{ from: location }} />
  // }
  return children
}

export { RouteGuard }
