import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">  
            <div className="checkout__left">
                
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnytJ1B88NptCJ-OMynShucmiF6SgkkQoTw&usqp=CAU"></img>
            </div>

             <div>
             <h3>{user?.email }</h3>
                 <h2 className="checkout__title">Your shoping basket</h2>
                 {/*Basket*/}



             </div>

             <div className="Checkout__right">
                <h2>The subtotal go here</h2>
             </div>
        </div>
    )
}

export default Checkout
