import React,{useState} from "react"
import Child from "./Child"
import './../styles/App.css';

const Parent =() =>{

    const [itemName,setItemName] = useState("");
    const [itemPrice,setItemPrice] =useState("")

    const[cart, setCart] = useState([
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 20},
        {id: 3, name: "Item 3", price: 30}
    ])

    function handleAddItem(){
        const newId= cart.length+1;
        const newItem = {id:newId , name:itemName , price: parseInt(itemPrice)}
        setCart([...cart,newItem])
        setItemName("")
        setItemPrice("")
    }

    function handleRemoveItem(id){
        const filteredItems = cart.filter((item)=>item.id!==id)
        setCart(filteredItems)
    }
  
    return (
    <div className="parent">
   <h1>Parent component</h1>
   <label >Item Name:</label>
   <input type="text"
    onChange={(e)=> setItemName(e.target.value)} 
    value={itemName}
    />
   <label>Item Price:</label>
   <input type="number"
   onChange={(e)=> setItemPrice(e.target.value)}
   value={itemPrice}
   />
   <button onClick={handleAddItem}>Add Item </button>
   <Child handleRemoveItem={handleRemoveItem} cart={cart} />
    </div>
 )
}

export default Parent