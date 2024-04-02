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


import '../CSS/navbar.css'

import logo from '../Pictures/NavBar/logo.png'

import whatsapp from '../Pictures/NavBar/whatsapp.png'
import telegram from '../Pictures/NavBar/telegram.png'

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
                    <li className="list_element"><a href="#footer">Контакты</a></li>
                    <li className="list_element"><a href="#reviews">Отзывы</a></li>
                </ul>

                <a href="#main" className="logo_conctainer">
                <img src={logo} width={231} height={119} className="logo"/>
                </a>

                <a className="button" href="#footer">Связаться</a>

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
                        sx={{ display: { xs: 'block', sm: 'none',}, padding:0, marginLeft:"8px", height:"90%" }}>
                        <MenuIcon fontSize={"small"}/>
                    </IconButton>

                    {/* The outside of the drawer */}
                    <Drawer

                        anchor="right" //from which side the drawer slides in

                        variant="temporary" //if and how easily the drawer can be closed

                        open={open} //if open is true, drawer is shown

                        onClose={toggleDrawer(false)} //function that is called when the drawer should close
                    >

                        <Box style={{width:"100vw", textAlign:"center"}}>
                            <ul className="list">
                                <li className="list_element"><a onClick={toggleDrawer(false)} href="#our_bouquets">Наши букеты</a></li>
                                <li className="list_element"><a onClick={toggleDrawer(false)} href="#delivery">Доставка</a></li>
                                <li className="list_element"><a onClick={toggleDrawer(false)} href="#footer">Контакты</a></li>
                                <li className="list_element"><a onClick={toggleDrawer(false)} href="#reviews">Отзывы</a></li>
                            </ul>
                        </Box>
                    </Drawer>
                </div>

            </Container>
        </nav>

    )
}
