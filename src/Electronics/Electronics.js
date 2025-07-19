import React from 'react'
import './Electronics.css'
import Productone from './Productone';
import Electronicsitem from './Electronicsitem';

function Electronics() {
  return (
    <div className='Electronics'>
        <div className='Electronics-top'>
            <div className='Electronics-top-add'>
                <div className='Electronics-top-imageone'>
                    <img className='Electronics-top-image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Unrec/D62631965_IN-CEPC_UnrecPage_BAU_1500.jpg" alt="/" />
                </div>
                <div className='Electronics-top-imagetwo'>
                    <img className='Electronics-top-image-two' src="https://images-eu.ssl-images-amazon.com/images/G/31/media/Media_TopicalStores_2022/1458113_in_770x300_3_e826ffd2-06b7-4909-94e9-16d8808708e0.jpg" alt="/" />
                </div>
            </div>
        </div>
        <Productone/>
        
        <div className='electronics-center'>
            <div className='electronics-center-image'>
                <img className='electronics-center-imag' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Acc/hp/july/1500x300.jpg" alt="" />
                
            </div>
        </div>
        <div className='electronics-center'>
            <div className='electronics-center-image'>
                <img className='electronics-center-imag' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Survey/R01_Spkrs_Survey_1500x300.jpg" alt="" />
                
            </div>
        </div>
        <div className='electronicsitem-proppp'>
        <Electronicsitem
        image="https://m.media-amazon.com/images/I/61Xk0CSu6IS._AC_SS450_.jpg"
        title="This item boAt Immortal IM1000D Dual Channel Wired On Ear Gaming Headphones with Dolby Atmos"
        rating={3}
        price={2855}
        />
        <Electronicsitem
        image="https://images-eu.ssl-images-amazon.com/images/I/71kqL+rxM1L._AC_UL160_SR160,160_.jpg"
        title="boAt Immortal Im 1300 Gaming Bluetooth Wireless Over Ear Headphones "
        rating={4}
        price={2999}
        />
        <Electronicsitem
        image="https://images-eu.ssl-images-amazon.com/images/I/71PhCZEGH7L._AC_UL160_SR160,160_.jpg"
        title="Redgear Cosmo 7,1 Usb Gaming Wired Over Ear Headphones With Mic With Virtual Surround Sound"
        rating={5}
        price={1499}
        />
        </div>
        <div className='electronicsitem-proppp'>
        <Electronicsitem
        image="https://m.media-amazon.com/images/I/61xf2zTjBeL._AC_SS450_.jpg"
        title="This item Cosmic Byte ARES Wireless Controller for PC (Black)"
        rating={3}
        price={1800}
        />
        <Electronicsitem
        image="https://images-eu.ssl-images-amazon.com/images/I/418HAmNjelL._AC_SX184_.jpg"
        title=" HyperX Streamer Starter Pack (HBNDL0001), Black"
        rating={4}
        price={11999}
        />
        <Electronicsitem
        image="https://images-eu.ssl-images-amazon.com/images/I/41-wVCxYgAL._AC_SX184_.jpg"
        title="Razer DeathAdder Essential Wired Gaming "
        rating={3}
        price={1499}
        />
        </div>
        <div className='electronics-bottom'>
                <a className='electronics-bottom-headline' href="">See all result</a>
            </div>
    </div>
  )
}

export default Electronics
