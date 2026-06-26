import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StopWatch1 from './components/StopWatch1.jsx'
import StopWatch2 from './components/StopWatch2.jsx'
import Login from './components/Login.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'

createRoot(document.getElementById('root')).render(

    // <App />
    // <StopWatch1></StopWatch1>
    // <StopWatch2/>
    // <Login/>
    <VideoPlayer></VideoPlayer>
    
)