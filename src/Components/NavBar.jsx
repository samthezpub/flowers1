import React from 'react'

import {Container} from '@mui/material'

import '../CSS/navbar.css'

import logo from '../Pictures/NavBar/logo.png'

import whatsapp from '../Pictures/NavBar/whatsapp.png'
import telegram from '../Pictures/NavBar/telegram.png'

export default function NavBar() {
    return (
        <nav className="navbar">
            <Container maxWidth={"xl"} sx={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <a href="#main" className="logo_conctainer">
                    <img src={logo} width={231} height={119} className="logo"/>
                </a>


                <ul className="list">
                    <li className="list_element"><a href="#our_bouquets">Наши букеты</a></li>
                    <li className="list_element"><a href="#delivery">Доставка</a></li>
                    <li className="list_element"><a href="#footer">Контакты</a></li>
                </ul>

                <a className="button" href="#footer">Связаться</a>

                <div className="social-media">
                    <a href="https://wa.me/номер" target="_blank" className="footer_social-media_element">
                        <img src={whatsapp} width={32} height={32}/>
                    </a>

                    <a href="https://t.me/username" target="_blank" className="footer_social-media_element">
                        <img src={telegram} width={32} height={32}/>
                    </a>
                </div>
            </Container>
        </nav>

    )
}
