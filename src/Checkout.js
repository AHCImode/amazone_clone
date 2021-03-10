import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">  
            <div className="checkout__left">
                
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnytJ1B88NptCJ-OMynShucmiF6SgkkQoTw&usqp=CAU"></img>
            </div>

             <div className="checkout__title">
             <h3>{user?.email }</h3>
                 <h2 className="checkout__title">Your shoping basket</h2>
                 console.log(1 + '2');



             </div>

             <div className="Checkout__right">
                <Subtotal/>
             </div>
        </div>
    )
}

export default Checkout
