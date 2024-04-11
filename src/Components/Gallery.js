import React, { useEffect } from 'react';
import '../CSS/gallery.css'; // Подключаем стили

import gallery_1 from "../Pictures/Gallery/gallery-1.jpg"
import gallery_2 from "../Pictures/Gallery/gallery-2.jpg"
import gallery_3 from "../Pictures/Gallery/gallery-3.jpg"
import gallery_4 from "../Pictures/Gallery/gallery-4.jpg"

const ImageSlider = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const imgContainer = document.querySelector(".img-container");
            const last = imgContainer.firstElementChild;
            let first = imgContainer.lastElementChild;
            last.style.transition = "none";
            imgContainer.appendChild(last);
            setTimeout(() => {
                last.style.transition = "all 800ms ease-in-out";
                first.style.transition = "all 500ms ease-in-out";
            }, 100);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="img-container">
            <div className="box">
                <img
                    src={gallery_1}
                    alt="съедобный букет 1"
                />
            </div>
            <div className="box">
                <img
                    src={gallery_2}
                    alt="съедобный букет 2"
                />
            </div>
            <div className="box">
                <img
                    src={gallery_3}
                    alt="съедобный букет 3"
                />
            </div>
            <div className="box">
                <img
                    src={gallery_4}
                    alt="съедобный букет 4"
                />
            </div>
        </div>
    );
};

export default ImageSlider;
