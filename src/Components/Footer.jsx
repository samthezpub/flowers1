import React from 'react'

import '../CSS/footer.css'

import phone from '../Pictures/Footer/phone.png'
import mail from '../Pictures/Footer/mail.png'
import clock from '../Pictures/Footer/clock.svg'

import whatsapp from '../Pictures/Footer/whatsapp.png'
import telegram from '../Pictures/Footer/telegram.png'

import webcommand_logo from '../Pictures/Footer/Logo Green.svg'

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="upper">
                <div className="info">
                    <h2 className="footer_title">Контакты:</h2>

                    <div className="footer_contacts">
                        <a className="footer_contact" href={"tel:+794900000000"}>
                            <img src={phone} width={21} height={21} className={"footer_contact_image"}/>
                            <span>+794900000000</span>
                        </a>

                        <a className="footer_contact" href={"mailto:Електоронный_адрес@gmail.com"}>
                            <img src={mail} width={21} height={21} className={"footer_contact_image"}/>
                            <span>Електоронный_адрес@gmail.com</span>
                        </a>

                        <div className="footer_contact">
                            <img src={clock} width={21} height={21} className={"footer_contact_image"}/>
                            <span>Время работы</span>
                        </div>


                    </div>

                    <div className="footer_social-media">
                        <a href="https://wa.me/номер" target="_blank" className="footer_social-media_element">
                            <img src={whatsapp} width={32} height={32}/>
                        </a>

                        <a href="https://t.me/username" target="_blank" className="footer_social-media_element">
                            <img src={telegram} width={32} height={32}/>
                        </a>
                    </div>

                    <p className="footer_copyright">©2021. Все права защищены </p>
                </div>
                <div className="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A56a73a374aec08d02fd87158a17b0832884d4956ef0ecbcdf9a9e61feeb70dc0&amp;source=constructor"
                        width="100%" height="100%" frameBorder="0"></iframe>
                </div>
            </div>

            <div className="bottom">
                <p className="webcommand_description">Разработано в</p>
                <a href="https://web-command.ru/">
                    <img src={webcommand_logo}/>
                </a>
            </div>
        </footer>
    )
}
