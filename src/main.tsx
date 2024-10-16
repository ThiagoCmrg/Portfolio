import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/Home/home'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
    <CssBaseline/>
  </StrictMode>,
)