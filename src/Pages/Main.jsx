import {React, useState, useEffect} from 'react'
import axios from 'axios';
import {Container} from "@mui/material";
import {List, Rating} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Carousel from 'react-material-ui-carousel'
import Item from '../Components/Item'
import Gallery from '../Components/Gallery'


import '../CSS/main.css'

import main_bg from '../Pictures/Main/main-bg.png'

import photo1 from '../Pictures/Main/photo1.jpg'
import photo2 from '../Pictures/Main/photo2.jpg'
import photo3 from '../Pictures/Main/photo3.jpg'

import lepestok1 from '../Pictures/Main/lepestok1.png'
import lepestok2 from '../Pictures/Main/lepestok2.png'
import lepestok3 from '../Pictures/Main/lepestok3.png'
import lepestok4 from '../Pictures/Main/lepestok4.png'

import feedback_image from '../Pictures/Main/feedback-bg.jpg'

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

    const [reviewList, setReviewList] = useState([])

    const [slides, setSlides] = useState([])

    useEffect(() => {
        getAllReviews()
    }, []);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function positionSort(reviewList) {
        return reviewList.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            } else if (a.position > b.position) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    async function getAllReviews() {
        await sleep(1000);

        // Get CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        let repsonce = axios.get("http://test-flowers.web-command.ru/api/rating/getAllReview", {

            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken // Include CSRF token in headers
            },
            data: {
                _token: csrfToken
            }

        })
            .then((resp) => {

                let reviewList = resp.data; // Ваш массив с данными отзывов
                console.log(reviewList)

                let filteredReviews = reviewList.filter(review => review.is_show);

                // Сортировка по позиции
                reviewList = positionSort(filteredReviews)
                setReviewList(reviewList)
                console.log(reviewList)


                let slidesTemp = [];

                for (let i = 0; i < reviewList.length; i += 3) {
                    slidesTemp.push(reviewList.slice(i, i + 3));
                }

                setSlides(slidesTemp)
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });

    }

    function submitForm() {

        // Get form data
        const name = document.getElementById("name").value;
        const phone = document.getElementById('phone').value;
        const idea = document.getElementById('idea').value;

        // Get CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Send data to PHP script using AJAX
        fetch('http://test-flowers.web-command.ru/api/greeting', {
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
        fetch('http://test-flowers.web-command.ru/api/rating', {
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
            <section id="main" className="main">
                <Container maxWidth={'xl'} style={{height: "100%", display: "flex", alignItems: "flex-end"}}>
                    <div className="main_info">
                        <h2 className="info_title">Собираем букеты, созданные для Вас</h2>
                        <a className="info_button" href="#feedback">Выбрать букет</a>
                    </div>
                </Container>
            </section>
            <section className="our_bouquets" id="our_bouquets">
                <Container maxWidth={"xl"} style={{height: "100%"}}>

                    <h2 className="our_bouquets_title">Наши работы</h2>
                    <div className="cards">
                        <img className="photo1" src={photo1} alt=""/>
                        <div className="card card1">
                            <span className="card_text">
                                Любой букет из клубники, цветов и других ягод можно собрать на любой бюджет, добавив ингредиенты на ваш вкус
                            </span>
                        </div>


                        <img className="photo2" src={photo2} alt=""/>
                        <div className="card card2">
                            Любой мужской букет можно собрать на любой бюджет, добавив ингредиенты на ваш вкус
                        </div>

                        <img className="photo3" src={photo3} alt=""/>
                        <div className="card card3">
                            Букет из фруктов и цветов можно собрать на любой бюджет, добавив ингредиенты на ваш вкус
                        </div>
                    </div>
                </Container>
                <img src={lepestok4} alt="" className="lepestok1"/>
                <img src={lepestok2} alt="" className="lepestok2"/>
                <img src={lepestok3} alt="" className="lepestok3"/>
                <img src={lepestok1} alt="" className="lepestok4"/>
            </section>

            <section className="delivery" id="delivery">
                <Container maxWidth={"x"} style={{display: "flex", alignItems: "center", height: "100%"}}>
                    <div className="delivery_container">
                        <div className="blocks">
                            <div className="block">
                                <h2 className="delivery_title">Доставка</h2>
                                <p className="delivery_description">Возьмём на себя все заботы по созданию, оформлению и
                                    доставке корпоративных букетов в обычные и праздничные дни за разумные деньги</p>
                            </div>
                            <div className="block large_block">
                                <h2 className="delivery_title">Инструкции по применению</h2>
                                <p className="delivery_description">Хранить такие букеты лучше в прохладном месте (в
                                    холодильнике, сняв или надрезав прозрачную упаковку). А вот прямых солнечных лучей и
                                    жары они не любят. Часто в составе наших букетов присутствует живая и искусственная
                                    растительность - это декор. Все остальные ингредиенты в букетах - съедобные. Мы
                                    закупаем
                                    их персонально под каждый букет накануне сборки. Все ингредиенты и растительность
                                    обработана по специальному многочасовому протоколу.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="feedback" id="feedback">
                <Container maxWidth={"x"}
                           style={{}}>
                    {/*<form method="post">*/}

                    <div className="feedback_container">
                        <div>
                            <h2 className="form_title">Предложи свою композицию</h2>
                            <div className="feedback-form">
                                <div className="feedback_inputs">
                                    <input placeholder="Имя" className="feedback_input input" name="name" id="name"/>
                                    <input placeholder="Телефон" onChange={(event) => {
                                        ValidateInput(event)
                                    }} className="feedback_input input" name="phone" id="phone"/>
                                    <textarea placeholder="Ваша идея" className="feedback_large-input input" name="idea"
                                              id="idea"/>
                                </div>
                            </div>
                            <button className="form_button" onClick={submitForm}>Отправить</button>
                        </div>

                        <div>
                            <Gallery></Gallery>
                        </div>

                        {/*</form>*/}
                    </div>
                </Container>
            </section>

            <section className="reviews" id="reviews">
                <h2 className="reviews_title">Отзывы</h2>
                <Container maxWidth="xl">

                    <div>
                        <Carousel
                            className="reviews_carousel"
                            indicatorIconButtonProps={{
                                style: {
                                    color: 'pink',

                                    marginTop: "10px"
                                }
                            }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    backgroundColor: 'crimson'
                                }
                            }}
                            indicatorContainerProps={{
                                style: {
                                    marginTop: '15px'
                                }
                            }}
                            navButtonsAlwaysInvisible={true}
                            animation="fade"
                            duration={1000}
                        >
                            {slides.map((slide, index) => (
                                <div key={index}
                                     style={{display: 'flex', justifyContent: "space-around", height: "300px"}}>
                                    {slide.map((item, i) => (
                                        <Item key={i} name={item.client_name} rating={parseInt(item.rating)}
                                              text={item.comment}/>
                                    ))}
                                </div>
                            ))}
                        </Carousel>

                        <div>
                            <Carousel
                                className="reviews_carousel_min"
                                indicatorIconButtonProps={{
                                    style: {
                                        color: 'pink',

                                        marginTop: "10px"
                                    }
                                }}
                                activeIndicatorIconButtonProps={{
                                    style: {
                                        backgroundColor: 'crimson'
                                    }
                                }}
                                indicatorContainerProps={{
                                    style: {
                                        marginTop: '15px'
                                    }
                                }}
                                navButtonsAlwaysInvisible={true}
                                animation="fade"
                                duration={1000}
                            >
                                {reviewList.map((slide, index) => (
                                    <div key={index}
                                         style={{display: 'flex', justifyContent: "space-around", height: "300px"}}>
                                            <Item key={index} name={slide.client_name} rating={parseInt(slide.rating)}
                                                  text={slide.comment}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                    </div>

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
            </section>
        </>
    )
}
