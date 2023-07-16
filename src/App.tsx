import { Route, Routes } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './Components/UI/Theme.styles'
import MainLayout from './Layout/MainLayout'
import { Home, Dogs, About, Contacts, NotFound, Dog } from './Pages'
import Admin from './Pages/Admin/Admin'
import AdminLayout from './Layout/AdminLayout'

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
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
