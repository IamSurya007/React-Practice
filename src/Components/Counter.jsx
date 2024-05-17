import  {useState} from 'react'

const Counter = () => {
    const initial=0
    const [count, setCount]= useState(initial)
   

  return (
    <div className=' flex flex-col items-center space-y-2'>
        <h1>count:{count}</h1>
        <div className='space-x-5'>
        <button onClick={()=> setCount(initial)} className=' rounded-md bg-red-400 px-4'>Reset</button>
        <button onClick={()=> setCount(prev=>prev+1)} className=' rounded-md bg-slate-600 px-4'>Inc</button>
        <button onClick={()=> setCount(prev=>prev-1)} className=' rounded-md bg-slate-600 px-4'>Dec</button>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Counter