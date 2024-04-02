import React, { useEffect } from 'react';
import '../CSS/gallery.css'; // Подключаем стили

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
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1692617800~exp=1692618400~hmac=da967fd7227c9ad38cd8a070b995acb5f4bb6c2185c6a20bd2e90c60e2abf6ab"
                    alt=""
                />
            </div>
            <div className="box">
                <img
                    src="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=740&t=st=1692619142~exp=1692619742~hmac=cbfd96c2635889371b9d74ff41432f9944fadfef177e121f43cf9f2f94b2fd6a"
                    alt=""
                />
            </div>
            <div className="box">
                <img
                    src="https://img.freepik.com/free-photo/seljalandsfoss-waterfall-during-sunset-beautiful-waterfall-iceland_335224-596.jpg?w=740&t=st=1692619874~exp=1692620474~hmac=c48ffd5f0d2418bb4600d98ac64f3f61a0ed9e2090751ac7fa32bff35687ee17"
                    alt=""
                />
            </div>
            <div className="box">
                <img
                    src="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?w=740&t=st=1692619958~exp=1692620558~hmac=d2e0e7c3c55857d0bb617b4b5b4deb0c7c67c6677c1eaa8b4c73d50445ece5bf"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ImageSlider;
