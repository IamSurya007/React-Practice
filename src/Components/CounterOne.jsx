// import React from 'react'
import { useReducer } from "react"

const initialState=0

const reducer=(state, action)=>{
    switch(action){
        case 'increament':
            return state+1
        case 'decreament':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterOne = () => {
  const [count, dispatch] =  useReducer(reducer, initialState)
  const [Count2, dispatch2]= useReducer(reducer, initialState)
  return (
    <div className=" flex flex-col space-y-4 items-center">
        <div>Count:  {count}</div>
        <div>
        <button onClick={()=> dispatch('increament')} className=" px-4 bg-blue-400 rounded-md mr-4">Increament</button>
        <button onClick={()=> dispatch('decreament')} className=" px-4 bg-blue-400 rounded-md mr-4">Decreament</button>
        <button onClick={()=> dispatch('reset')} className=" px-4 bg-blue-400 rounded-md mr-4">Reset</button>
        </div>
        <div>CountTwo:  {Count2}</div>
        <div>
        <button onClick={()=> dispatch2('increament')} className=" px-4 bg-blue-400 rounded-md mr-4">Increament</button>
        <button onClick={()=> dispatch2('decreament')} className=" px-4 bg-blue-400 rounded-md mr-4">Decreament</button>
        <button onClick={()=> dispatch2('reset')} className=" px-4 bg-blue-400 rounded-md mr-4">Reset</button>
        </div>
    </div>
  )
}

export default CounterOne