import React from 'react';
import "./Product.css";

function Product({title, image, price, rating}) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>The lean startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating ">
                    {Array(rating)
                    .fill()
                    .map((_, i)=> (
                        <p>*</p>
                        ))}
                    

                </div>

            </div>
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
            />
            <button>Add to basket</button>
            
        </div>
    )
}

export default Product
