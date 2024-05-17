import {useState, useEffect} from 'react'

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition=e=>{
    console.log('mouse event')
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=>{
    window.addEventListener('mousemove', logMousePosition)

    return (()=>{
      window.removeEventListener('mousemove', logMousePosition)
    })
  },[])
    
  return (
    <div className='flex flex-col items-center'>
      Hook X- {x}, Y- {y}
    </div>
  )
}

export default HookMouse