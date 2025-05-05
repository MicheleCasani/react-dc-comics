import React from 'react'
import logo from '../assets/dc-logo.png'

const Header = () => {
    return (
        <div>
            <header className='container'>
                <img src={logo} alt="DC Logo" />
                <ul>
                    <li> <a href="">CHARACTERS </a></li>
                    <li> <a href="">COMICS </a></li>
                    <li> <a href="">MOVIES </a></li>
                    <li> <a href="">TV </a></li>
                    <li> <a href="">GAMES </a></li>
                    <li> <a href="">GOLLECTIBLES </a></li>
                    <li> <a href="">VIDEOS </a></li>
                    <li> <a href="">FANS </a></li>
                    <li> <a href="">NEWS </a></li>
                    <li> <a href="">SHOP </a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header

