import React from 'react'
import digital from '../assets/buy-comics-digital-comics.png'
import merchandise from '../assets/buy-comics-merchandise.png'
import shop from '../assets/buy-comics-shop-locator.png'
import subscriptions from '../assets/buy-comics-subscriptions.png'
import visa from '../assets/buy-dc-power-visa.svg'


const Main = () => {
    return (
        <>
            <div className='main-black'>
                <div className='container'>
                    <h2>Content goes here</h2>
                </div>
            </div>
            <div className='main-blue'>
                <div className='container'>
                    <ul className='main-list'>
                        <li>
                            <img src={digital} alt="DC Logo" />
                            <a href="">DIGITAL COMICS </a></li>
                        <li>
                            <img src={merchandise} alt="DC Logo" />
                            <a href="">DC MERCHANDISE </a></li>
                        <li>
                            <img src={subscriptions} alt="DC Logo" />
                            <a href="">SUBSCRIPTION </a></li>
                        <li>
                            <img src={shop} alt="DC Logo" />
                            <a href="">COMIC SHOP LOCATOR </a></li>
                        <li>
                            <img src={visa} alt="DC Logo" />
                            <a href="">DC POWER VISA </a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Main
