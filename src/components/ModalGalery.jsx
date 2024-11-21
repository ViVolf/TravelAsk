import React, { useRef, useEffect } from "react";
import { createPortal } from 'react-dom';
import "../assets/styles/ModalGalery.scss";

import { register } from 'swiper/element/bundle';

export default function ModalGalery({ isOpen, onClose, galery, initialSlide }) {
    if (!isOpen) return null;

    const galeryRef = useRef(null);

    useEffect(() => {
        register();

        const params = {
            loop: "true",
            slidesPerView: "1",
            initialSlide: initialSlide,
            pagination: "true",
            pagination: {
                clickable: true,
                el: '.galery-pagination',
            },
            navigation: {
                nextEl: '.galery-button-next',
                prevEl: '.galery-button-prev',
            },
        }

        Object.assign(galeryRef.current, params);

        galeryRef.current.initialize();

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e) => {
        if (e.target.closest('.galery-swiper') || e.target.closest('.review-galery')) {
            return;
        }
        onClose();
    }

    return (
        <>
            {createPortal(<div className="modal-galery">
                <div className="galery-swiper">
                    <div className="galery-button-prev">{"⟨"}</div>
                    <swiper-container init='false' ref={galeryRef} className="galery-swiper">
                        {galery.map((item, index) => (
                            <swiper-slide key={index}>
                                <img src={item} width={"100%"} />
                            </swiper-slide>
                        ))}
                    </swiper-container>
                    <div className="galery-button-next">{"⟩"}</div>
                    <div className="galery-pagination"></div>
                </div>
            </div>, document.getElementById('modal-root'))}
        </>
    );
};