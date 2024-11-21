import React from "react";
import "../assets/styles/Info.scss";

import barselonaPic from "../assets/images/Barselona.png";

export default function Info() {
    return (
        <div id="info">
            <img id="barselona-pic" src={barselonaPic} alt="" />
            <div id="barselona-text">
                <h1 id="barselona-text-title">Барселона — обзор города</h1>
                <p id="barselona-text-info">Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...</p>
                <button id="barselona-text-button">Читать дальше</button>
            </div>
        </div>
    );
};