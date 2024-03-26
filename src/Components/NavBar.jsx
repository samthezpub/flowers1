import React from 'react'

import '../CSS/navbar.css'

import logo from '../Pictures/NavBar/logo.png'
export default function NavBar() {
    return (
        <nav className="navbar">
            <a href="#main">
                <img src={logo} width={231} height={119} className="logo"/>
            </a>

            <ul className="list">
                <li className="list_element"><a href="#our_bouquets">Наши букеты</a></li>
                <li className="list_element"><a href="#delivery">Доставка</a></li>
                <li className="list_element"><a href="#footer">Контакты</a></li>
            </ul>

            <a className="button" href="#footer">Связаться</a>
        </nav>

    )
}
