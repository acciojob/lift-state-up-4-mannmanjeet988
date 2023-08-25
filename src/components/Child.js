import React,{useState} from "react"
import './../styles/App.css';

const Child =({handleRemoveItem,cart}) =>{
 return (
    <div className="child">
        <h1>Child Component</h1>  
            <ul>
                {
                    cart.map(item=>(
                            <li key={item.id}>
                                {item.name} -${item.price}
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </li> 
                    ))
                }
            </ul>
        
    </div>
 )
}

export default Child