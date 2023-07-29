import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root') as HTMLElement

// Use createRoot instead of ReactDOM.render
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
