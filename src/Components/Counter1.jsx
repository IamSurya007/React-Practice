import {useState, useEffect} from 'react'

const Counter1 = () => {

    const [count, setCount]= useState(0)
    const [name, setName]= useState('')
    useEffect(()=>{
        console.log('useEffect - changing document title')
        document.title= `Clicked ${count} times`
    }, [count])

  return (
    <div className=' flex flex-col items-center space-y-3'>
        <input
        type='text'
        placeholder='enter text'
        value={name}
        onChange={e=> setName(e.target.value)}
        />
        <button onClick={()=> setCount(count+1)} className=' bg-yellow-400 rounded-md px-5 '>Click: {count}</button>
    </div>
  )
}

export default Counter1