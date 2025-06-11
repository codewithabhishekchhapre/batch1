import React, { useRef } from 'react'
import Lottyplayer from "./components/animations/LottiePlayer"
import run from './components/animations/data/Happy.json'

function Ref() {
     var inputfield = useRef();
     return (
          <>
          <Lottyplayer animationFile={run} height="250px" width="450px" />
               <input type="text" ref={inputfield} className='border' />
               <button onClick={() => {
                    inputfield.current.focus()
               }}>click me</button>
          </>
     )
}

export default Ref