import React from "react";
import "../assets/styles/Message.scss";

import userAvatar from "../assets/images/avatar.png";
import adminAvatar from "../assets/images/avatar2.png";

export default function Message({ perspective, author, value, timestamp }) {
    return (
        author == perspective ? <div className="message white-back">
                                    {author == "user" ? <img src={userAvatar} className="message-avatar"/> 
                                                      : <img src={adminAvatar} className="message-avatar"/>}
                                    <div className="message-values">
                                        <div className="message-values-text">{value}</div>
                                        <div className="message-values-date">{timestamp}</div>
                                    </div>
                                </div>
                              : <div className="message grey-back">
                                    {author == "user" ? <img src={userAvatar} className="message-avatar"/> 
                                                      : <img src={adminAvatar} className="message-avatar"/>}
                                    <div className="message-values">
                                        <div className="message-values-text">{value}</div>
                                        <div className="message-values-date">{timestamp}</div>
                                    </div>
                                </div>
    );
};