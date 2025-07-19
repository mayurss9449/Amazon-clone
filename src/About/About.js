import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
function About() {
    return (

        <div className='about'>
            <div className='about-left'>
                <i className="fa-solid fa-bars"></i>
                <span className='about-all'>All</span>
            </div>
            <div className='about-center'>
                <a className='nav' href="/">Sell</a>
                <a className='nav' href="/">Best Sellers</a>
                <a className='nav' href="/">Today's Deals</a>
                <Link to="/mobiles">
                <a className='nav' href="/">Mobiles</a>
                </Link>
                <a className='nav' href="/">Customer Service</a>
                <Link to="/electronics">
                <a className='nav' href="/">Electronics</a>
                </Link>
                <a className='nav' href="/">Home & Kitchen</a>
                <a className='nav' href="/">Fashion</a>
            </div>
            <div className='about-right'>
                <img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="#" />
            </div>
        </div>

    )
}

export default About
