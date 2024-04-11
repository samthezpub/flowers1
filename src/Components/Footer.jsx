import React from 'react'

import '../CSS/footer.css'

import map from '../Pictures/Footer/map.png'
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

                    <div className="footer_contacts">
                        <a className="footer_contact">
                            <img src={map} width={21} height={21} className={"footer_contact_image"}/>
                            <span>г.Мариуполь, Энгельса 60, офис 106</span>
                        </a>

                        <a className="footer_contact" href={"tel:+794900000000"}>
                            <img src={phone} width={21} height={21} className={"footer_contact_image"}/>
                            <span>+7 (949) 719 07 81</span>
                        </a>

                        <a className="footer_contact" href={"mailto:Електоронный_адрес@gmail.com"}>
                            <img src={mail} width={21} height={21} className={"footer_contact_image"}/>
                            <span>Електоронный_адрес@gmail.com</span>
                        </a>

                        <div className="footer_contact">
                            <img src={clock} width={21} height={21} className={"footer_contact_image"}/>
                            <div className="schedule">
                                <span>Вт. - Пт. с 9:00 до 17:00</span>
                                <span>Вс. - Пн. - выходной</span>
                            </div>
                        </div>

                        <div className="webcommand">
                            <p className="webcommand_description">Разработано</p>
                            <a href="https://web-command.ru/">
                                <img src={webcommand_logo}/>
                            </a>
                        </div>

                    </div>

                    <div className="footer_social-media">
                        <p className="social-media_title">Наши контакты</p>
                        <div className="footer_social-media_elements">
                            <a href="https://wa.me/номер" target="_blank" className="footer_social-media_element">
                                <img src={whatsapp} width={32} height={32}/>
                            </a>

                            <a href="https://t.me/username" target="_blank" className="footer_social-media_element">
                                <img src={telegram} width={32} height={32}/>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A56a73a374aec08d02fd87158a17b0832884d4956ef0ecbcdf9a9e61feeb70dc0&amp;source=constructor"
                        width="90%" height={200} frameBorder="0"></iframe>
                </div>
            </div>

            <div className="bottom">
                <div className="webcommand">
                    <p className="webcommand_description">Разработано</p>
                    <a href="https://web-command.ru/">
                        <img src={webcommand_logo}/>
                    </a>
                </div>
                <p className="footer_copyright">©2021. Все права защищены </p>
            </div>
        </footer>
    )
}
