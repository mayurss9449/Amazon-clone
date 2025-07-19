import './Mrandom.css'
import React from 'react'
import { useStateValue } from "../StateProvider";

function Mrandom({id,title,image,price,rating}) {
        const [{basket}, dispatch]= useStateValue();
        
        console.log("this is a basket", basket);

        const addToBasket =()=>{
        

            dispatch({
                type:'ADD_TO_BASKET',
                item:{  
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                },
            });
        };

    return (
        <div className='mobiles-random'>
            <div className='mobiles-random-container'>
                <div className='mobiles-random-containerOne'>
                    <div className='mobiles-random-containerOne-image'>
                        <a className='mobiles-random-image' href="">
                            <img className='mobiles-random-imageOne' src={image} alt="" />
                        </a>
                    </div>
                    <div className='mobiles-random-detiles'>
                        <div className='mobiles-random-headlines' >
                            <p>{title}</p>
                        </div>
                        <div className='mobiles-random-rating'>
                            {Array(rating).fill().map((_,i)=>(
                                <p>🌟</p>
                            
                            ))}
                            
                            
                        </div>
                        <div className='mobiles-random-price'>
                            <small>₹</small>
                            <strong>{price}</strong>
                        </div>
                    </div>
                    <button onClick={addToBasket}>Add to Basket</button>
                </div>

            </div>
        </div>
    )
}

export default Mrandom
