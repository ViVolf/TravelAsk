import React from "react";
import "../assets/styles/Main.scss";

import Info from "./Info.jsx";
import Reviews from "./Reviews.jsx";
import Chat from "./Chat.jsx";

export default function Main() {
    return (
        <div id="main">
            <Info />
            <Reviews />
            <Chat />
            <div id="modal-root"></div>
        </div>
    );
};