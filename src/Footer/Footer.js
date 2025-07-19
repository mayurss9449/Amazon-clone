import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <a className='footer-back-totop' href="">
            <div className='navfooter-top'>
                <span className='navfooter-top-button'>Back to top</span>
            </div>
        </a>
        <div className='footer-top'>
            <div className='footer-top-one'>
                <div className='footer-top-oneHead'>
                    <div className='footer-top-oneHeadfirst'>Get to Know Us</div>
                    <ul className='footer-top-onetext'>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">About Us</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Careers</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Press Releases</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Amazon Science</a></li>
                    </ul>
                </div>
                <div className='footer-top-oneHead'>
                    <div className='footer-top-oneHeadfirst'>Connect with Us</div>
                    <ul className='footer-top-onetext'>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Facebook</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Twitter</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Instagram</a></li>
                        
                    </ul>
                </div>
                <div className='footer-top-oneHead'>
                    <div className='footer-top-oneHeadfirst'>Make Money with Us</div>
                    <ul className='footer-top-onetext'>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Sell on Amazon</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Sell under Amazon Accelerator</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Amazon Global Selling</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Become an Affiliate</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Fulfilment by Amazon</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Advertise Your Products</a></li>
                    </ul>
                </div>
                <div className='footer-top-oneHead'>
                    <div className='footer-top-oneHeadfirst'>Let Us Help You</div>
                    <ul className='footer-top-onetext'>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">COVID-19 and Amazon</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Your Account</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Returns Centre</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Amazon App Download</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Amazon Assistant Download</a></li>
                        <li className='footer-top-onetext-us'><a className='footer-toparr' href="">Help</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='footer-center'>
            <div  className='footer-center-top'>
                <span>
                    <div className='footer-center-toplogo'>
                        <a className='footer-center-toplogo-image' href="">
                            <img className='footer-center-image' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                        </a>
                    </div>
                </span>
            </div >
            <div className='footer-center-bottom'>
                <ul className='footer-center-bottom-header'> 
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Australia</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Brazil</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Canada</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">China</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">France</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Germany</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Italy</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Japan</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Poland</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Mexico</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Singapore</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Spain</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Netherlands</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">Turkey</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">United Arab Emirates</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">United Kingdom</a></li>
                    <li className='footer-center-bottom-head'><a className='footer-centerarr' href="">United States</a></li>
                    
                </ul>
            </div>

        </div>

        <div className='footer-bottom'>
            <div>
                <span>Conditions of Use & Sale</span>
                <span>Privacy Notice</span>
                <span>Interest-Based Ads</span>
            </div>
            <div>
                {/* <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span> */}
            </div>
        </div>

      
    </div>
  )
}

export default Footer
