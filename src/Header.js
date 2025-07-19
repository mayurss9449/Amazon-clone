import React from 'react'
import {  NavLink } from 'react-router-dom';
import './Header.css'
import { useStateValue } from './StateProvider';


function Header() {
    
    const [{basket}, dispatch] = useStateValue();
    
    
    return (
        <div className='header'>
            <NavLink to="/home">
            <img
             className='header-logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </NavLink>
            <div className='header-first'>
            <div className='header-nav'>
                <div className='header-option'>
                    
                    <span className='header-optionOne'>
                        Hello
                    </span>
                    <span className='header-optionTwo'>
                        Select your address
                    </span>
                </div>
            </div>
            </div>
            <div className='header-firstsearch'>
                <span>All</span>
                <span><i className="fa-solid fa-angle-down"></i></span>
                
            </div>
            <div className='header-search'>
                <input className='header-searchInput' type="text" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            
            <div className='header-lang'>
            <i className="fa-solid fa-language"></i>
            <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className='header-nav'>
                <NavLink to="/login">
                <div className='header-option'>
                    <span className='header-optionOne'>
                        Hello, sign in
                    </span>
                    <span className='header-optionTwo'>
                        Account & Lists
                    </span>
                </div>
                </NavLink>
                <div className='header-option'>
                    <span className='header-optionOne'>
                        Returns
                    </span>
                    <span className='header-optionTwo'>
                        & Orders
                    </span>
                </div>
                <NavLink to="/checkout">
                <div className='header-optionBasket'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className='header-optionCart'>
                    <span className='header-cunter'>{basket?.length}</span>
                    <span className='header-optionBasket-cart'>Cart</span>
                    </div>
                </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
