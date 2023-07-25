import { Route, Routes } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './Components/UI/Theme.styles'
import AdminLayout from './Layout/AdminLayout'
import LoginLayout from './Layout/LoginLayout'
import MainLayout from './Layout/MainLayout'
import { About, Contacts, Dog, Dogs, Home, NotFound } from './Pages'
import Admin from './Pages/Admin/Admin'
import Login from './Pages/Login'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Routes>
          <Route element={<MainLayout />}>
            {/* Default route and test route */}
            <Route index path="/" element={<Home />} />
            <Route path="dogs" element={<Dogs />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="dog" element={<Dog />} />
            {/* not found route */}
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="admin/*" element={<Admin />}></Route>
          </Route>
          <Route element={<LoginLayout />}>
            <Route path="login/*" element={<Login />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
