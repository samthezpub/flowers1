import {React, useState, useEffect} from 'react'
import axios from 'axios';
import {Container} from "@mui/material";
import {List, Rating} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import InputMask from 'react-input-mask';
import Carousel from 'react-material-ui-carousel'
import Item from '../Components/Item'
import Gallery from '../Components/Gallery'


import '../CSS/main.css'

import main_bg from '../Pictures/Main/main-bg.jpg'

import photo1 from '../Pictures/Main/01.jpg'
import photo2 from '../Pictures/Main/02.jpg'
import photo3 from '../Pictures/Main/03.jpg'

import lepestok1 from '../Pictures/Main/lepestok1.png'
import lepestok2 from '../Pictures/Main/lepestok2.png'
import lepestok3 from '../Pictures/Main/lepestok3.png'
import lepestok4 from '../Pictures/Main/lepestok4.png'

import delivery_icon from '../Pictures/Main/delivery.png'
import instructions_icon from '../Pictures/Main/bumaga.png'
import delivery_left from '../Pictures/Main/delivery-left.png'
import delivery_right from '../Pictures/Main/delivery-right.png'

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

const styleIdea = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Main() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openIdeaModal, setOpenIdeaModal] = useState(false);
    const handleIdeaOpen = () => setOpen(true);
    const handleIdeaClose = () => setOpen(false);

    const [openReviewModal, setOpenReviewModal] = useState(false);
    const handleReviewOpen = () => setOpen(true);
    const handleReviewClose = () => setOpen(false);

    const [modalRatingValue, setModalRatingValue] = useState(4);
    const [reviewList, setReviewList] = useState([])
    const [slides, setSlides] = useState([])

    const [messageIdeaIsShown, setMessageIdeaIsShown] = useState(false)
    const [messageModalFormIsShown, setMessageModalFormIsShown] = useState(false)

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

        let repsonce = axios.get("https://www.clever-mrpl.ru/api/rating/getAllReview", {

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

                let filteredReviews = reviewList.filter(review => review.is_show);

                // Сортировка по позиции
                reviewList = positionSort(filteredReviews)
                setReviewList(reviewList)


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

    async function waitIdea() {
        // Создаем промис, который разрешится через 5 секунд
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        // Ждем 5 секунд
        await delay(5000);

        setOpenIdeaModal(false)
    }

    function submitForm() {
        setOpenIdeaModal(true)
        waitIdea()


        // Get form data
        const name = document.getElementById("name").value;
        const phone = document.getElementById('phone').value.toString();
        const idea = document.getElementById('idea').value;


        // Get CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Send data to PHP script using AJAX
        fetch('https://www.clever-mrpl.ru/api/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken // Include CSRF token in headers
            },
            body: JSON.stringify({name, phone, idea, _token: csrfToken})
        })
            .then(response => response.text())
            .then(data => {

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    async function waitReview() {
        // Создаем промис, который разрешится через 5 секунд
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        // Ждем 5 секунд
        await delay(5000);

        setOpenReviewModal(false)
    }

    function submitRatingForm() {

        setOpenReviewModal(true)
        waitReview()

        // Get form data
        const name = document.getElementById("modal-name").value;
        const phone = document.getElementById('modal-phone').value;
        const message = document.getElementById('modal-message').value;
        const rating = modalRatingValue;

        // Get CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Send data to PHP script using AJAX
        fetch('https://www.clever-mrpl.ru/api/rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken // Include CSRF token in headers
            },
            body: JSON.stringify({name, phone, message, rating, _token: csrfToken})
        })
            .then(response => response.text())
            .then(data => {

                // Handle successful submission (optional: show a success message)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors (optional: show an error message)
            });

        setOpen(false)
    }

    return (
        <>
            <section id="main" className="main">
                <Container maxWidth={'xl'} style={{height: "100%", display: "flex", alignItems: "flex-end"}}>
                    <div className="main_info">
                        <h2 className="info_title">Собираем съедобные букеты для Вас</h2>
                        <a className="info_button" href="#feedback">Заказать букет</a>
                    </div>
                </Container>
            </section>
            <section className="our_bouquets" id="our_bouquets">
                <Container maxWidth={"xl"} style={{height: "100%"}}>

                    <h2 className="our_bouquets_title">Наши работы</h2>
                    <div className="cards">
                        <div className="image_and_card">
                            <img className="photo1" src={photo1} alt="Съедобный букет 1"/>
                            <div className="card card1">
                            <span className="card_text">
                                Любой букет из клубники, цветов и других ягод можно собрать на любой бюджет, добавив ингредиенты на ваш вкус
                            </span>
                            </div>
                        </div>

                        <div className="image_and_card">
                            <img className="photo2" src={photo2} alt="Съедобный букет 2"/>
                            <div className="card card2">
                                Любой мужской букет можно собрать на любой бюджет, добавив ингредиенты на ваш вкус
                            </div>
                        </div>

                            <div className="image_and_card">
                                <img className="photo3" src={photo3} alt="Съедобный букет 3"/>
                                <div className="card card3">
                                    Букет из фруктов и цветов можно собрать на любой бюджет, добавив ингредиенты на ваш
                                    вкус
                                </div>
                            </div>
                    </div>
                </Container>
                <img src={lepestok4} alt="лепесточек1" className="lepestok1"/>
                <img src={lepestok2} alt="лепесточек2" className="lepestok2"/>
                <img src={lepestok3} alt="лепесточек3" className="lepestok3"/>
                <img src={lepestok1} alt="лепесточек4" className="lepestok4"/>
            </section>

            <section className="delivery" id="delivery">
                <Container maxWidth={"x"} style={{display: "flex", alignItems: "center", height: "100%"}}>
                    <div className="delivery_container">
                        <div className="blocks">
                            <div className="block block1">
                                <div className="block_elements">
                                    <h2 className="delivery_title">Доставка</h2>
                                    <img src={delivery_icon} alt="доставка иконка" className="delivery_icon"/>
                                </div>
                                <p className="delivery_description">Возьмём на себя все заботы по созданию, оформлению и
                                    доставке корпоративных букетов в обычные и праздничные дни за разумные деньги</p>
                            </div>
                            <div className="block large_block block2">
                                <div className="block_elements">
                                    <h2 className="delivery_title">Инструкции по применению</h2>
                                    <img src={instructions_icon} alt="инструкции иконка" className="delivery_icon"/>
                                </div>
                                <p className="delivery_description">Хранить такие букеты лучше в прохладном месте (в
                                    холодильнике, сняв или надрезав прозрачную упаковку). А вот прямых солнечных лучей и
                                    жары они не любят. Часто в составе наших букетов присутствует живая и искусственная
                                    растительность - это декор. Все остальные ингредиенты в букетах - съедобные. Мы
                                    закупаем
                                    их персонально под каждый букет накануне сборки. Все ингредиенты и растительность
                                    обработана по специальному многочасовому протоколу.</p>
                                <img src={delivery_left} width={"45%"} className="delivery_image-left" alt="доставка иконка левая"/>
                                <img src={delivery_right} width={"450px"} height={"500px"} className="delivery_image-right" alt="доставка иконка правая"/>
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
                                    <InputMask mask="+7\(999) 99 999 99" maskChar={null} placeholder='Телефон' className="feedback_input input" name="phone" id="phone"/>
                                    <textarea placeholder="Ваша идея" className="feedback_large-input input" name="idea"
                                              id="idea"/>
                                </div>
                            </div>
                            <button className="form_button" onClick={submitForm}>Отправить</button>

                            <Modal
                                open={openIdeaModal}
                                onClose={handleIdeaClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={styleIdea}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Мы получили ваш отзыв! 🌸
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Спасибо за доверие. Мы свяжемся с вами в ближайшее время для уточнения деталей.
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>

                        <div className="gallery_container">
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
                            height={300}
                            indicatorIconButtonProps={{
                                style: {
                                    color: 'pink',

                                    marginTop: "35px"
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
                                     style={{display: 'flex', justifyContent: "space-around", height: "100%"}}>
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
                                height={300}
                                indicatorIconButtonProps={{
                                    style: {
                                        color: 'pink',

                                        marginTop: "35px"
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
                        <Modal
                            open={openReviewModal}
                            onClose={handleReviewClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={styleIdea}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Мы получили ваш заказ! 🌸
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Мы ценим ваше мнение и благодарим вас за то, что поделились им с нами. Ваш отзыв помогает нам стать лучше для вас и наших других клиентов.
                                </Typography>
                            </Box>
                        </Modal>
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
                                    <InputMask mask="+7\(999) 99 999 99" maskChar={null}  className="input" name="phone" id="modal-phone"/>

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
