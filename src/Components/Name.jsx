import {useState} from 'react'

const Name = () => {
    
    const [name, setName] = useState({firstName:'', secondName:''})

  return (
    <div>
        <form className=' flex flex-col items-center space-y-3'>
            <input 
            type='text'
            value={name.firstName}
            onChange={  e=> setName({ ...name, firstName:e.target.value})}
            placeholder='enter First Name'/>
            <input 
            type='text'
            value={name.lastName}
            onChange={e=> setName({ ...name, lastName:e.target.value})}
            placeholder='enter Last Name'/>
            <h1>Your FirstName is: {name.firstName}</h1>
            <h1>Your LastName is : {name.lastName}</h1>
            <h2>{ JSON.stringify(name)}</h2>
        </form>

    </div>
  )
}

export default Name