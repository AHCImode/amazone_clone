import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
    return <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    {}
                    Subtotal (0 items):
                    <strong>1</strong>
                </p>    
                <small className="subtotal__gift">
                    <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button>Procced to checkout</button>
                
        </div>;
    
}


export default Subtotal;
