import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './AuthHoc/AuthProvider'
import { RouteGuard } from './AuthHoc/RouteGuard'
import ScrollToTop from './Components/Helpers/ScrollToTop'
import { theme } from './Components/UI/Theme.styles'
import AdminLayout from './Layout/AdminLayout'
import LoginLayout from './Layout/LoginLayout'
import MainLayout from './Layout/MainLayout'
import { About, Contacts, Dog, Dogs, Home, NotFound } from './Pages'
import Admin from './Pages/Admin/Admin'
import Login from './Pages/Login'
import { SuccessMessageProvider } from './successContextMess'

const queryClient = new QueryClient()

function App() {
  return (
    <SuccessMessageProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <HashRouter basename="/">
              <ScrollToTop />
              <Routes>
                <Route element={<MainLayout />}>
                  {/* Default route and test route */}
                  <Route index path="/" element={<Home />} />
                  <Route path="dogs" element={<Dogs />} />
                  <Route path="dog/:id/:name" element={<Dog />} />
                  <Route path="about" element={<About />} />
                  <Route path="contacts" element={<Contacts />}></Route>
                  {/* not found route */}
                  <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<LoginLayout />}>
                  <Route path="login/*" element={<Login />}></Route>
                </Route>
                <Route element={<AdminLayout />}>
                  <Route
                    path="admin/*"
                    element={
                      <RouteGuard>
                        <Admin />
                      </RouteGuard>
                    }
                  ></Route>
                </Route>
              </Routes>
            </HashRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </AuthProvider>
    </SuccessMessageProvider>
  )
}

export default App
