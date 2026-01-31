import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'react-kariu'
import App from './App'
import './App.css'

// Set favicon with correct base path
const favicon = document.getElementById('favicon') as HTMLLinkElement
if (favicon) {
  favicon.href = `${import.meta.env.BASE_URL}dice.svg`
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider initialTheme="dark">
      <App />
    </ThemeProvider>
  </StrictMode>
)
