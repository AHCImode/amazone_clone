import React from 'react';
import "./Product.css";

function Product({title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {

    }
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating ">
                    {Array(rating)
                    .fill()
                    .map((_, i)=> (
                    <p>&#11088;</p>
                        ))}
                    

                </div>
             

            </div>
            <img
                src={image}
            />
            <button>Add to basket</button>
            
        </div>
    )
}

export default Product
