import React from "react";
import "../assets/styles/Reviews.scss";

import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

import { reviews } from "../assets/util/reviews.js";

import ReviewCard from "./ReviewCard.jsx";

export default function Reviews() {

    const swiperRef = useRef(null);

    useEffect(() => {
        register();

        const params = {
            loop: "true",
            slidesPerView: "1",
            pagination: "true",
            pagination: {
                clickable: true,
                el: '.reviews-pagination',
            },
            navigation: {
                nextEl: '.reviews-button-next',
                prevEl: '.reviews-button-prev',
            },
            breakpoints: {
                1540: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        }

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, []);

    return (
        <div id="reviews">
            <h1 id="reviews-title">Отзывы о Барселоне</h1>
            <div id="reviews-container">
                <swiper-container init='false' ref={swiperRef}>
                    {reviews.map((item, index) => (
                        <swiper-slide key={index}>
                            <ReviewCard key={item.id}
                                        avatar={item.avatar}
                                        name={item.name}
                                        city={item.city}
                                        text={item.text}
                                        galery={item.galery}
                                        info={item.info}
                            />
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className="reviews-pagination"></div>
            <button id="reviews-button">Все отзывы</button>
        </div>
    );
};