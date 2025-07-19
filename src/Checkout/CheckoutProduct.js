import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider';


function CheckoutProduct({id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket =()=>{
        // remove from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }


    return (
        <div className='checkoutProduct'>
                <img className='checkoutProduct-image' src={image} alt="" />
                
                <div className='checkoutProduct-list'>
                

                <div className='checkoutProduct-info'>
                    <p className='checkoutProduct-title'>{title}</p>
                
                <div className='checkoutProduct-p'>  
                    <p className='checkoutProduct-price'>
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                </div> 
                </div>
                <div className='checkoutProduct-rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>

                    ))}
                </div>
                
                <button onClick={removeFromBasket}>Remove from Basket</button>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
