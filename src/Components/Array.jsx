import {useState} from 'react'

const Array = () => {
    const [items, setItems] = useState([])
    
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()* 10)+1
        }])
    }
  return (
    <div className=' flex flex-col items-center'>
        <button onClick={addItem} className=' bg-orange-300 rounded-md px-5'>Add Item</button>
        <ul className=' list-none'>
            {
                items.map(item=>(
                    <li key={item.id}> {item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Array