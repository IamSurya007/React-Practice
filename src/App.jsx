// import { createContext, useReducer } from 'react'
import './App.css'
import DataFetch from './Components/DataFetch'
import DataFetchOne from './Components/DataFetchOne'
// import One from './Components/One'
// import Three from './Components/Three'
// import Two from './Components/Two'
// import DataFetching from './Components/DataFetching'
// import One from './Components/One';
// import Count from './Components/Count'
// import Counter from './Components/Counter'
// import MouseContainer from './Components/MouseContainer'
// import Counter1 from './Components/Counter1'
// import Name from './Components/Name'
// import Array from './Components/Array'
// import CounterOne from './Components/CounterOne'
// import CounterTwo from './Components/CounterTwo'

// export const userContext = createContext()
// export const channelcontext = createContext()
// export const CountContext= createContext()

// const initialState=0

// const reducer=(state, action)=>{
//     switch(action){
//         case 'increament':
//             return state+1
//         case 'decreament':
//             return state-1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }
function App() {
  // const [count, dispatch]= useReducer(reducer, initialState)
  return (
    <div className=' flex flex-col items-center'>
      {/* <Counter/>
      <MouseContainer/>
      <Count/>
      <Counter1/>
      <Name/>
      <Array/> */}
      {/* <userContext.Provider value={'Surya'}>
        <channelcontext.Provider value={'Ackerman'}>
          <One/>
        </channelcontext.Provider>
      </userContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CountContext.Provider
      value={{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <One/>
        <Two/>
        <Three/>
      </CountContext.Provider> */}
      <DataFetch/>
      <DataFetchOne/>
    </div>
  )
}

export default App
