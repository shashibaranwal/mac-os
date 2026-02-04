import React, {useState} from 'react'
import MacWindow from './MacWindow'

const Youtube = ({windowName, windowsState, setWindowsState}) => {

    const [zIndex, setZIndex] = useState(null);

    const handleZIndex = () => {
        setZIndex(zIndex + 1);
    }

    return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}
        default={{ x: 1100, y: 350, width: 320, height: 350 }}
        title={"Youtube"}
        onClick={handleZIndex}
        style={{ zIndex }}
    >
        <div className='youtube-window'>
        <iframe src="https://www.youtube.com/embed/videoseries?si=4V_k_tg36UnSBklU&amp;list=PLzkZQ-L5BdA92uZa_GkfHamrez2wpkl9z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </MacWindow>   
  )
}

export default Youtube