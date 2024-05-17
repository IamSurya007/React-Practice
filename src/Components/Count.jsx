import  { useEffect, useState } from 'react'

const Count = () => {
    const [time, setTime] = useState(0)

    const tick=()=>{
        setTime(prev=> prev+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return(()=>{
            clearInterval(interval)
        })
    },[time])

  return (
    <div className=' flex flex-col items-center size-max'>
        <h1>{time}</h1>
        
    </div>
  )
}

export default Count