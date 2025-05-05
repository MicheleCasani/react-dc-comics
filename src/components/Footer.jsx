import React from 'react'
import facebook from '../assets/footer-facebook.png'
import periscope from '../assets/footer-periscope.png'
import pinterest from '../assets/footer-pinterest.png'
import twitter from '../assets/footer-twitter.png'
import youtube from '../assets/footer-youtube.png'

function Footer() {
    return (
        <footer>
            <div className='container-footer'>
                <div className='footer-list'>
                    <h3>DC COMICS</h3>
                    <ul>
                        <li> <a href="">CHARACTERS </a></li>
                        <li> <a href="">COMICS </a></li>
                        <li> <a href="">MOVIES </a></li>
                        <li> <a href="">TV </a></li>
                        <li> <a href="">GAMES </a></li>
                        <li> <a href="">VIDEOS </a></li>
                        <li> <a href="">NEWS </a></li>
                    </ul>
                    <h3>SHOP</h3>
                    <ul>
                        <li> <a href="">Shop DC </a></li>
                        <li> <a href="">Shop DC Collectibles </a></li>
                    </ul>
                </div>
                <div className='footer-list'>
                    <h3>DC</h3>
                    <ul>
                        <li> <a href="">Team Of Use </a></li>
                        <li> <a href="">Privacy policy (New) </a></li>
                        <li> <a href="">Ad Choise </a></li>
                        <li> <a href="">Advertising </a></li>
                        <li> <a href="">jobs </a></li>
                        <li> <a href="">Subscriptions </a></li>
                        <li> <a href="">Talent Workshops </a></li>
                        <li> <a href="">CPSC Certificates </a></li>
                        <li> <a href="">Ratings </a></li>
                        <li> <a href="">Shop Help </a></li>
                        <li> <a href="">Contact Us </a></li>
                    </ul>
                </div>
                <div className='footer-list'>
                    <h3>SITES</h3>
                    <ul>
                        <li> <a href="">DC </a></li>
                        <li> <a href="">MAD Magazine </a></li>
                        <li> <a href="">DC Kids </a></li>
                        <li> <a href="">DC Universe </a></li>
                        <li> <a href="">DC Power Visa </a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-grey'>
                <div className='container-footer-2'>
                    <h3><a href="">SIGN-UP NOW!</a></h3>
                    <div className='display-footer'>
                        <div><a href="">FOLLOW US</a></div>
                        <img src={facebook} alt="facebook logo" />
                        <img src={twitter} alt="twitter Logo" />
                        <img src={youtube} alt="youtube Logo" />
                        <img src={pinterest} alt="pinterest Logo" />
                        <img src={periscope} alt="periscope Logo" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
