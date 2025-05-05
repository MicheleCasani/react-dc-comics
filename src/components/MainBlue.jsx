import React from 'react'
import digital from '../assets/buy-comics-digital-comics.png'
import merchandise from '../assets/buy-comics-merchandise.png'
import shop from '../assets/buy-comics-shop-locator.png'
import subscriptions from '../assets/buy-comics-subscriptions.png'
import visa from '../assets/buy-dc-power-visa.svg'

function MainBlue() {
    return (
        <div className='main-blue'>
            <div className='container'>
                <ul className='main-list'>
                    <li>
                        <img src={digital} alt="Digital logo" />
                        <a href="">DIGITAL COMICS </a></li>
                    <li>
                        <img src={merchandise} alt="merchandise Logo" />
                        <a href="">DC MERCHANDISE </a></li>
                    <li>
                        <img src={subscriptions} alt="subscriptions Logo" />
                        <a href="">SUBSCRIPTION </a></li>
                    <li>
                        <img src={shop} alt="shop Logo" />
                        <a href="">COMIC SHOP LOCATOR </a></li>
                    <li>
                        <img src={visa} alt="visa Logo" />
                        <a href="">DC POWER VISA </a></li>
                </ul>
            </div>
        </div>
    )
}

export default MainBlue