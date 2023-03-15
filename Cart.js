import React ,{useContext} from "react"
import {Context} from '../components/Context'
import {getClass} from '../utils/index'
import CartItem from "../components/CartItem"







function Cart() {
  
    const {cartItems,order,ordered} = useContext(Context)
    const elements = cartItems.map((item , i)=>{
        return(
           <CartItem key = {item.id} item = {item}/>
        )
    })
    function calculateTotal(){
        const total = cartItems.length * 5.99
        return total.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }
   
 
    return (
        
                <main className="card-page">
                 
                    <h1>Check out </h1>
                    
                
                   {elements}
                    <p className="total-cost">Total: {calculateTotal()} </p>
                    <div className="order-button">
                    {cartItems.length > 0 ? 
                        <button onClick = {order}>{ordered ?"Ordering..." : 'Set Order'}</button>
                    :  <p>You have no items in your cart.</p>}
                    </div>
                </main> 
               
        
    )
}

export default Cart