import React from 'react'
import './Electronicsitem.css'
import { useStateValue } from "../StateProvider";

function Electronicsitem({id,title, image, rating, price}) {

    const [{basket}, dispatch]= useStateValue();

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
    <div>
        <div className='electronicsitem'>
                <div className='electronicsitem-top'>
                    <div className='electronicsitem-top-image'>
                        <a className='electronicsitem-arr' href="">
                            <img className='electronicsitem-image' src={image} alt="" />
                        </a>
                    </div>
                    <div className='electronicsitem-detiles'>
                        <div className='electronicsitem-headlines' >
                            <p>{title}</p>
                        </div>
                        <div className='electronicsitem-rating'>
                            {Array(rating).fill().map((_,i)=>(
                                <p>🌟</p>
                            
                            ))}
                            
                            
                        </div>
                        <div className='electronicsitem-price'>
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

export default Electronicsitem
