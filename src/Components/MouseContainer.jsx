import {useState} from 'react'
import HookMouse from './HookMouse'

const MouseContainer = () => {
    const [display, setDisplay]= useState(true)
  return (
    <div className=' flex flex-col items-center'>
        {display && <HookMouse/>}
        <button onClick={()=> setDisplay(!display)} className=' rounded-md bg-blue-500 shadow-lg px-6 py-3 transform hover:shadow-xl transition duration-300'>Toggle display</button>
    </div>
  )
}

export default MouseContainer