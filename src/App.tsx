import './App.css'
import { useEffect, useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)
  const [oppositeCount, setOppositeCount] = useState(0)

  useEffect(() => {
    setCount((prev) => prev + 1)
    return
  }, [])

  const oppositeButtonHandler = () => {
    setCount((prev) => prev - 1)
    setOppositeCount((prev) => prev + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            🪂 Натисніть на мене : {count}
          </button>
          <button onClick={oppositeButtonHandler}>
            🪂 Ні, на мене : {oppositeCount}
          </button>

          <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
    </div>
  )
}

export default App
