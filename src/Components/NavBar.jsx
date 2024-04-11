import React, {useState} from 'react'

import {Container} from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import '../index.css'
import '../CSS/navbar.css'

import logo from '../Pictures/NavBar/logo.png'

import map from '../Pictures/NavBar/map.png'
import phone from '../Pictures/NavBar/phone.png'

import whatsapp from '../Pictures/NavBar/whatsapp.png'
import telegram from '../Pictures/NavBar/telegram.png'

import cross from '../Pictures/NavBar/cross.png'

export default function NavBar() {
    const [open, setState] = useState(false);
    const toggleDrawer = (open) => (event) => {

        setState(open);
    };

    return (
        <nav className="navbar">
            <Container maxWidth={"xl"} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

                <ul className="list">
                    <li className="list_element"><a href="#our_bouquets">Наши букеты</a></li>
                    <li className="list_element"><a href="#delivery">Доставка</a></li>
                    <li className="list_element"><a href="#reviews">Отзывы</a></li>
                </ul>

                <a href="#main" className="logo_conctainer">
                    <img src={logo} width={250} className="logo"/>
                </a>

                <div className="button" href="#footer">
                    <a href="https://yandex.ru/maps/10366/mariupol/?from=mapframe&ll=37.551820%2C47.099094&mode=usermaps&source=mapframe&um=constructor%3A56a73a374aec08d02fd87158a17b0832884d4956ef0ecbcdf9a9e61feeb70dc0&utm_source=mapframe&z=15" className="navbar_contact">
                        <span className="text">г.Мариуполь, Энгельса 60, офис 106</span>
                    </a>

                    <a className="navbar_contact" href={"tel:+794900000000"}>
                        <img src={phone} width={21} height={21} className={"navbar_contact_image"}/>
                        <span className="text">+7 (949) 739-04-66</span>
                    </a>
                </div>

                <div className="social-media">
                    <a href="https://wa.me/номер" target="_blank" className="footer_social-media_element">
                        <img src={whatsapp} width={32} height={32}/>
                    </a>

                    <a href="https://t.me/username" target="_blank" className="footer_social-media_element">
                        <img src={telegram} width={32} height={32}/>
                    </a>
                </div>


                <div className="hamburger">
                    {/* hamburger icon shows the drawer on click */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{display: {xs: 'block', md: 'none',}, padding: 0, marginLeft: "8px", height: "90%"}}>
                        <MenuIcon fontSize={"small"}/>
                    </IconButton>

                    {/* The outside of the drawer */}
                    <Drawer

                        anchor="right" //from which side the drawer slides in

                        variant="temporary" //if and how easily the drawer can be closed

                        open={open} //if open is true, drawer is shown

                        onClose={toggleDrawer(false)} //function that is called when the drawer should close
                    >

                        <Box style={{width: "100vw", textAlign: "center", background:"#ffe1d6"}}>
                            <div style={{height: "100vh", position: "relative"}} className="drawer">
                                <img width={"300px"} height={"150px"} src={logo} className={"logo_drawer"}/>

                                <div className="button" href="#footer">
                                    <a href="https://yandex.ru/maps/10366/mariupol/?from=mapframe&ll=37.551820%2C47.099094&mode=usermaps&source=mapframe&um=constructor%3A56a73a374aec08d02fd87158a17b0832884d4956ef0ecbcdf9a9e61feeb70dc0&utm_source=mapframe&z=15"
                                       className="navbar_contact">
                                        <img src={map} width={21} height={21} className={"navbar_contact_image"}/>
                                        <span className="text">г.Мариуполь, Энгельса 60, офис 106</span>
                                    </a>

                                    <a className="navbar_contact" href={"tel:+794900000000"}>
                                        <img src={phone} width={21} height={21} className={"navbar_contact_image"}/>
                                        <span className="text">+7 (949) 739-04-66</span>
                                    </a>
                                </div>
                                <ul className="list-drawer">
                                    <li className="list_element"><a onClick={toggleDrawer(false)} href="#our_bouquets">Наши
                                        букеты</a></li>
                                    <li className="list_element"><a onClick={toggleDrawer(false)}
                                                                    href="#delivery">Доставка</a></li>
                                    <li className="list_element"><a onClick={toggleDrawer(false)}
                                                                    href="#footer">Контакты</a></li>
                                    <li className="list_element"><a onClick={toggleDrawer(false)}
                                                                    href="#reviews">Отзывы</a></li>
                                </ul>

                                <img src={cross} onClick={toggleDrawer(false)}
                                     style={{position: "absolute", top: "5px", right: "5px"}}/>

                            </div>


                        </Box>
                    </Drawer>
                </div>

            </Container>
        </nav>

    )
}
