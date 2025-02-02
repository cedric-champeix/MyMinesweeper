import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import ThemeProvider from './context/ThemeProvider.tsx'
import GameProvider from './context/GameProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GameProvider>
        <App/>
      </GameProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
