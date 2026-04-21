import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import { ThemeProvider } from 'react-kariu'
import { customThemeDark } from './style/customTheme'
import App from './App'
import './App.css'

let refreshing = false

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    void updateSW(true)
  }
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return
    refreshing = true
    window.location.reload()
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider initialTheme="dark" customThemes={{ dark: customThemeDark }}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
