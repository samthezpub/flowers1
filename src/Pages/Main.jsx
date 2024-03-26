import {React, useState} from 'react'
import {Container} from "@mui/material";
import {List, Rating} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Carousel from 'react-material-ui-carousel'
import Item from '../Components/Item'


import '../CSS/main.css'

import main_bg from '../Pictures/Main/main-bg.png'

import photo1 from '../Pictures/Main/Фото1.png'
import photo2 from '../Pictures/Main/Фото2.png'
import photo3 from '../Pictures/Main/Фото3.png'

import lepestok1 from '../Pictures/Main/lepestok1.png'
import lepestok2 from '../Pictures/Main/lepestok2.png'
import lepestok3 from '../Pictures/Main/lepestok3.png'
import lepestok4 from '../Pictures/Main/lepestok4.png'

import feedback_image from '../Pictures/Main/feedback-bg.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Main() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modalRatingValue, setModalRatingValue] = useState(4);

    const reviewList = [
        {
            name: 'Алексей',
            text: 'Отличная компания! Я очень доволен качеством обслуживания.',
            rating: 5,
        },
        {
            name: 'Андрей',
            text: 'Я рекомендую эту компанию всем своим друзьям.',
            rating: 4,
        },
        {
            name: 'Ирина',
            text: 'Я очень довольна покупкой. Спасибо!',
            rating: 5,
        },
    ];


    const [reviews, setReviews] = useState(reviewList);

    function submitForm() {

        // Get form data
        const name = document.getElementById("name").value;
        const phone = document.getElementById('phone').value;
        const idea = document.getElementById('idea').value;

        // Get CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Send data to PHP script using AJAX
        fetch('http://127.0.0.1:8000/api/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken // Include CSRF token in headers
            },
            body: JSON.stringify({name, phone, idea, _token: csrfToken})
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                // Handle successful submission (optional: show a success message)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors (optional: show an error message)
            });
    }


    function submitRatingForm() {

        // Get form data
        const name = document.getElementById("modal-name").value;
        const phone = document.getElementById('modal-phone').value;
        const message = document.getElementById('modal-message').value;
        const rating = modalRatingValue;

        // Get CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Send data to PHP script using AJAX
        fetch('http://127.0.0.1:8000/api/rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken // Include CSRF token in headers
            },
            body: JSON.stringify({name, phone, message, rating, _token: csrfToken})
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                // Handle successful submission (optional: show a success message)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors (optional: show an error message)
            });

        setOpen(false)
    }


    function ValidateInput(e) {
        var input = e.target;
        var maxLength = 12;
        var regex = /^\+?\d*$/; // Регулярное выражение для цифр и знака плюса

        if (!regex.test(input.value)) {
            input.value = ""; // Очистка поля ввода, если введены недопустимые символы
        }

        if (input.value.length > maxLength) {
            input.value = input.value.slice(0, maxLength);
        }
    }


    return (
        <>
            <Container id="main" className="main" disableGutters={true} maxWidth={false}>
                <img className="main_bg" src={main_bg}/>

                <div className="main_info">
                    <p className="info_description">Подарите ощущение праздника</p>
                    <h2 className="info_title">Собираем букеты, созданные для Вас</h2>
                    <button className="info_button">Выбрать букет</button>
                </div>
            </Container>
            <div className="our_bouquets" id="our_bouquets">
                <Container maxWidth="xl">
                    <h2 className="our_bouquets_title">Наши букеты</h2>

                    <div className="cards">
                        <img className="photo1" src={photo1} alt=""/>
                        <div className="card card1">
                            <span className="card_text">
                                Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой
                                вариант. Вы можете выбрать любую цветочную композицию из нашего каталога или заказать
                                свой вариант
                            </span>
                        </div>


                        <img className="photo2" src={photo2} alt=""/>
                        <div className="card card2">
                            Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой
                            вариант
                        </div>

                        <img className="photo3" src={photo3} alt=""/>
                        <div className="card card3">
                            Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой
                            вариант
                        </div>
                    </div>
                </Container>
                <img src={lepestok4} alt="" className="lepestok1"/>
                <img src={lepestok2} alt="" className="lepestok2"/>
                <img src={lepestok3} alt="" className="lepestok3"/>
                <img src={lepestok1} alt="" className="lepestok4"/>
            </div>

            <div className="delivery" id="delivery">
                <Container>
                    <div>
                        <h2 className="delivery_title">Доставка</h2>
                        <p className="delivery_description">Возьмём на себя все заботы по созданию, оформлению и
                            доставке корпоративных букетов в обычные и праздничные дни за разумные деньги</p>
                    </div>
                </Container>
            </div>

            <div className="feedback" id="feedback">
                <Container>
                    {/*<form method="post">*/}

                    <h2 className="form_title">Предложи свой бюджет</h2>
                    <div className="feedback-form">
                        <div className="feedback_inputs">
                            <input placeholder="Имя" className="feedback_input input" name="name" id="name"/>
                            <input placeholder="Телефон" onChange={(event) => {
                                ValidateInput(event)
                            }} className="feedback_input input" name="phone" id="phone"/>
                            <textarea placeholder="Ваша идея" className="feedback_large-input input" name="idea"
                                      id="idea"/>
                        </div>

                        <div className="background">
                            <img src={feedback_image} alt="" className="image"/>
                        </div>
                    </div>
                    <button className="form_button" onClick={submitForm}>Отправить</button>
                    {/*</form>*/}
                </Container>
            </div>

            <div className="reviews">
                <h2 className="reviews_title">Отзывы</h2>
                <Container>
                    <Carousel className="reviews_carousel"
                              indicatorIconButtonProps={{
                                  style: {
                                      color: 'pink'       // 3
                                  }
                              }}
                              activeIndicatorIconButtonProps={{
                                  style: {
                                      backgroundColor: 'crimson' // 2
                                  }
                              }}
                              indicatorContainerProps={{
                                  style: {
                                      marginTop: '15px', // 5
                                  }

                              }}
                              navButtonsAlwaysInvisible={true}
                              animation="slide"
                              duration={1000}>
                        {
                            reviewList.map((item, i) => {
                                    return (<Item key={i} item={item}/>)
                                }
                            )
                        }

                    </Carousel>

                    <button className="form_button" onClick={handleOpen}>Добавить отзыв</button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        closeAfterTransition
                        slots={{backdrop: Backdrop}}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Box sx={style} className="modal">
                            <div className="modal_container">
                                <div className="rating">
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Оцените нас
                                    </Typography>

                                    <Rating
                                        name="simple-controlled"
                                        value={modalRatingValue}
                                        onChange={(event, newModalRatingValue) => {
                                            setModalRatingValue(newModalRatingValue);
                                        }}
                                    />
                                </div>

                                <div>
                                    <Typography id="modal-modal-name" variant="h6" component="h2">
                                        Ваше ФИО
                                    </Typography>
                                    <input className="input" name="name" id="modal-name"/>

                                    <Typography id="modal-modal-phone" variant="h6" component="h2">
                                        Ваш номер
                                    </Typography>
                                    <input className="input" name="phone" id="modal-phone" onChange={(event) => {
                                        ValidateInput(event)
                                    }}/>

                                    <Typography id="modal-modal-message" variant="h6" component="h2">
                                        Введите сообщение
                                    </Typography>
                                    <textarea className="input large-input" name="message" id="modal-message"/>
                                </div>


                                <button type="submit" className="form_button" onClick={submitRatingForm}>Добавить
                                    отзыв
                                </button>
                            </div>
                        </Box>
                    </Modal>
                </Container>
            </div>
        </>
    )
}
