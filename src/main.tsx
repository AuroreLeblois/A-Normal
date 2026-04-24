import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'react-kariu'
import { customThemeDark } from './style/customTheme'
import App from './App'
import './App.css'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`
    void navigator.serviceWorker.register(swUrl).catch(() => {
      // Keep app startup resilient if service worker registration fails.
    })
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider initialTheme="dark" customThemes={{ dark: customThemeDark }}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
