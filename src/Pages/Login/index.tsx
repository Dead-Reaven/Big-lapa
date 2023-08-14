import { Route, Routes } from 'react-router'
import NotFound from '../NotFound/NotFound'
import { StyledLogin } from './Login.style'
import ConfirmationComponent from './pages/ConfirmationPage'
import ForgotComponent from './pages/ForgotPage'
import LoginComponent from './pages/LoginPage'
import RecoveryPage from './pages/RecoveryPage'
const Login = () => {
  return (
    <StyledLogin>
      <Routes>
        <Route index path="/" element={<LoginComponent />} />

        <Route path="/authorization" element={<ForgotComponent />} />
        <Route path="authorization/confirmation" element={<ConfirmationComponent />} />
        <Route path="authorization/confirmation/recovery" element={<RecoveryPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledLogin>
  )
}

export default Login
