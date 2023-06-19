import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme.styles'
import MainLayout from './Layout/MainLayout'
import { Home, Dogs, About, Support } from './Pages'
import NotFound from './Components/NotFound'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/Big-lapa/">
        <Routes>
          <Route element={<MainLayout />}>
            {/* Default route and test route */}
            <Route index path="/" element={<Home />} />
            <Route path="dogs" element={<Dogs />} />
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />}></Route>
            {/* not found route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
