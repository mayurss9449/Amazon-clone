import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {

  const [{basket}, dispatch] = useStateValue();


  return (
    <div className='checkout'>

      <div className='checkout-left'>
        <img className='checkout-add' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/akull/Rewards/EBB/D47911944_INWLD_Rewards-Festival_Catpage-banners_PC_1500x300.jpg" alt="" />
        <div >
          <h2 className='checkout-title'>Your Shopping Basket</h2>

          {basket.map(item=>(
            <CheckoutProduct
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
          {/* CheckoutProduct */}
        </div>
      </div>
      <div className="checkout-right">

        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout
