import "./style/Message.css";
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Message(props) {
    const navi = useNavigate();


    return(
        <div className="message">

            <div className="message-header">
                <div className="message-header-logo">
                    <img className="message-header-logo-image" alt=""
                         src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/mypage_assets/header-icon.svg'}/>
                </div>

                <div className="message-header-mypagebtn" onClick={()=>navi("/board")}>
                    <button className="message-header-mypagebtn-btn">Dashboard</button>
                </div>
                <div className="message-header-logoutbtn">
                    <button className="message-header-logoutbtn-btn">Log out</button>
                </div>
            </div>

            <div className="message-body">

                <div className="message-body-messagebox" style={{cursor:'pointer'}}>
                    <div className="message-body-messagebox-message">
                        <div className="message-body-messagebox-message-id">IDExample</div>
                        <div className="message-body-messagebox-message-preview">This is message Preview Example ...</div>
                    </div>
                </div>

                <div className="message-body-messageroom">


                </div>


            </div>


        </div>

    );
}

export default Message;