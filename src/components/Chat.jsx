import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/Chat.scss";

import chatUserAvatar from "../assets/images/avatar.png";
import chatAdminAvatar from "../assets/images/avatar2.png";

import starFull from "../assets/images/star_full.svg";
import starEmpty from "../assets/images/star_empty.svg";
import sendButton from "../assets/images/send_button.svg";
import line from "../assets/images/line.svg";
import flag from "../assets/images/flag.svg";

import Message from "./Message.jsx";

export default function Chat() {

    const [userInputValue, setUserInputValue] = useState('');
    const [adminInputValue, setAdminInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const endOfMessagesUserRef = useRef(null);
    const endOfMessagesAdminRef = useRef(null);
    
    const handleUserSendMessage = () => {
        if (userInputValue.trim()) {
            setMessages([...messages, {
                id: messages.length,
                author: 'user',
                value: userInputValue,
                timestamp: new Date().toLocaleString()
            }]);
            setUserInputValue('');
        }
    };

    const handleAdminSendMessage = () => {
        if (adminInputValue.trim()) {
            setMessages([...messages, {
                id: messages.length,
                author: 'admin',
                value: adminInputValue,
                timestamp: new Date().toLocaleString()
            }]);
            setAdminInputValue('');
        }
    };

    const handleUserKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleUserSendMessage();
            event.preventDefault();
        }
    };

    const handleAdminKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAdminSendMessage();
            event.preventDefault();
        }
    };


    useEffect(() => {
        if (endOfMessagesUserRef.current && endOfMessagesAdminRef.current && messages.length > 1) {
            endOfMessagesUserRef.current.scrollIntoView({ behavior: 'smooth' });
            endOfMessagesAdminRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div id="chat">
            <div className="chat-container" id="chat-user-container">
                <h1 className="chat-title">Чат с пользователем</h1>
                <div className="chat-window" id="chat-user">
                    <div className="chat-head">
                        <img src={chatAdminAvatar} alt="" className="chat-head-avatar" />
                        <div className="chat-head-info">
                            <p className="chat-head-info-name">Наталья Полянская</p>
                            <div className="chat-head-info-other">
                                <img src={flag} className="flag" />
                                <p className="chat-head-info-disc">Гид по Баварии, фотограф</p>
                            </div>
                        </div>
                        <div className="chat-head-rating">
                            <img className="star" src={starFull} alt="" />
                            <img className="star" src={starFull} alt="" />
                            <img className="star" src={starFull} alt="" />
                            <img className="star" src={starFull} alt="" />
                            <img className="star" src={starEmpty} alt="" />
                        </div>
                    </div>
                    <div className="chat-body">
                        {messages.map((item, index, arr) => (
                            <Message key={index} perspective={'user'} author={item.author} value={item.value} timestamp={item.timestamp} />
                        ))}
                        <div ref={endOfMessagesUserRef}/>
                    </div>
                    <div className="chat-bottom">
                        <img src={chatUserAvatar} alt="" className="chat-bottom-avatar" />
                        <input type="text" value={userInputValue} onKeyDown={handleUserKeyPress} onChange={(e) => setUserInputValue(e.target.value)} placeholder="Напишите сообщение..." className="chat-bottom-input" />
                        <img src={sendButton} onClick={handleUserSendMessage} className="chat-bottom-button" />
                    </div>
                </div>
            </div>
            <img className="line" src={line} />
            <div className="chat-container" id="chat-admin-container">
                <h1 className="chat-title">Чат с администратором</h1>
                <div className="chat-window" id="chat-admin">
                    <div className="chat-head">
                        <img src={chatUserAvatar} alt="" className="chat-head-avatar" />
                        <div className="chat-head-info">
                            <p className="chat-head-info-name">Администратор</p>
                            <div className="chat-head-info-other">
                                <img src={flag} className="flag" />
                                <p className="chat-head-info-disc">TravelAsk</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-body">
                        {messages.map((item, index, arr) => (
                            <Message key={index} perspective={'admin'} author={item.author} value={item.value} timestamp={item.timestamp} />
                        ))}
                        <div ref={endOfMessagesAdminRef}/>
                    </div>
                    <div className="chat-bottom">
                        <img src={chatAdminAvatar} alt="" className="chat-bottom-avatar" />
                        <input type="text" value={adminInputValue} onKeyDown={handleAdminKeyPress} onChange={(e) => setAdminInputValue(e.target.value)} placeholder="Напишите сообщение..." className="chat-bottom-input" />
                        <img src={sendButton} onClick={handleAdminSendMessage} className="chat-bottom-button" />
                    </div>
                </div>
            </div>
        </div>
    );
};