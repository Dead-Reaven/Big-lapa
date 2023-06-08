import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import { Home, Dogs, About, Support } from './Pages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/Big-lapa" element={<MainLayout />}>
              {/* Default route and test route */}
              <Route index element={<Home />} />
              <Route path="dogs" element={<Dogs />} />
              <Route path="about" element={<About />} />
              <Route path="support" element={<Support />}></Route>
              {/* not found route */}
              {/* <Route path="*" element={<Home />} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
