import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Dogs from './Pages/Dogs'
import ExamplePage from './Pages/ExamplePage'
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
              <Route path="test" element={<ExamplePage />} />
              <Route path="dogs" element={<Dogs />} />
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
