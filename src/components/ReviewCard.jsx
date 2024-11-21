import React, { useState, useEffect } from "react";
import "../assets/styles/ReviewCard.scss";

import ModalGalery from "./ModalGalery.jsx";

export default function ReviewCard({ avatar, name, city, text, galery, info }) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflowY = "auto";
    }

    const openModal = (slideNumber) => {
        setInitialSlide(slideNumber)
        setIsOpen(true)
        document.body.style.overflowY = "hidden";
    }

    return (
        <div className="review">
            <div className="review-head">
                <img className="review-avatar" src={avatar} />
                <p className="review-name">{name}</p>
            </div>
            <div className="review-title">
                <p className="review-city">{city}</p>
                — О ГОРОДЕ:
            </div>
            <p className="review-text">{text}</p>
            <div className="review-galery">
                {galery.map((item, index, ar) => (
                    index <= 3 ? ((index == 3 && ar.length != 4)  ? <div key={index} onClick={() => openModal(index)} className="review-galery-container last">
                        <div className="review-galery-number">{"+" + (ar.length - 4)}</div>
                        <div className="review-galery-blur"></div>
                        <img src={item} className="review-galery-img"></img>
                    </div>
                        : <div key={index} onClick={() => openModal(index)} className="review-galery-container"><img src={item} className="review-galery-img"></img></div>)
                        : null
                ))}
            </div>
            <div className="review-info">
                <div className="review-date">{info.date}</div>
                <div className="review-comment">{info.comment}{info.comment > 4 ? " комментариев" : " комментария"}</div>
                <div className="review-like">
                    <svg className="review-like-svg" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_111)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.00025 10.063L3.75025 8.688L5.06225 4.219C5.06225 4.219 4.84425 2.219 4.71925 1C7.03125 1 7.15625 3.969 7.15625 3.969L7.40625 6.063C7.40625 6.063 9.77025 5.421 10.6253 5.251C11.8753 5.001 12.6883 5.688 12.3753 7C13.0313 7.407 13.0003 8.563 12.4693 9.063C12.9383 9.594 12.8443 10.844 12.1883 11.313C12.3503 12.431 11.9693 12.688 11.6883 12.938C11.4063 13.188 9.93825 14.001 8.28125 14.001C6.62525 14.001 5.18725 13.657 5.18725 13.657L3.03125 15C3.03125 15 2.21925 14.469 1.59425 12.876C0.969252 11.282 1.00025 10.063 1.00025 10.063Z" stroke="#A0A0A0" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_111">
                                <rect width="14" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {info.like}
                </div>
            </div>
            <ModalGalery isOpen={isOpen} onClose={closeModal} galery={galery} initialSlide={initialSlide}/>
        </div>
    );
};