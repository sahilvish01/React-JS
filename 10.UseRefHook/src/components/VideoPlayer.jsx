// Video player using useRef

import { useRef } from "react"

export default function VideoPlayer()
{
    const video = useRef(null);

    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
            <video ref={video} src="/videoplayback.mp4"></video>
            <div>
                <button onClick={() => video.current.play()}>Play</button>
                <button onClick={() => video.current.pause()}>Pause</button>
                <button onClick={() => {video.current.currentTime = 0; video.current.play();}}> Restart </button>
            </div>
        </div>
    )
}