import { Route, Routes } from 'react-router'
import NotFound from '../NotFound/NotFound'
import { StyledLogin } from './Login.style'
import ForgotComponent from './pages/ForgotPage'
import LoginComponent from './pages/LoginPage'
import RecoveryPage from './pages/RecoveryPage'
const Login = () => {
  return (
    <StyledLogin>
      <Routes>
        <Route index path="/" element={<LoginComponent />} />
        <Route path="/reset-password" element={<ForgotComponent />} />
        <Route path="reset-password/recovery" element={<RecoveryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledLogin>
  )
}

export default Login
