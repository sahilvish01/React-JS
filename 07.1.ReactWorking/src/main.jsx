import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Fruit from './Fruit.jsx'
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Fruit></Fruit> */}
    {/* <Clock></Clock> */}
  </StrictMode>,
)
