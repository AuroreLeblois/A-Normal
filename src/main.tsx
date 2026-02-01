import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'react-kariu'
import { customThemeDark } from './style/customTheme'
import App from './App'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider initialTheme="dark" customThemes={{ dark: customThemeDark }}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
