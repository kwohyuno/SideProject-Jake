import "./style/BoardForm.css";
import React from "react";


function BoardForm(props) {


    return (
        <div className="boardform">
            <div className="boardform-header">
                <div className="boardform-header-logo">
                    <img className="boardform-header-logo-image" alt=""
                         src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/header-icon.svg'}/>
                </div>
                <div className="boardform-header-searchbar">
                    <img className="boardform-header-searchbar-icon" alt=""
                         src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/searchicon.svg'}/>
                    <input className="boardform-header-searchbar-input" type="text" placeholder="Search posts"/>
                </div>
                <div className="boardform-header-posticon">
                    <button className="boardform-header-posticon-btn">+ Create</button>
                </div>
                <div className="boardform-header-chaticon">
                    <img className="boardform-header-chaticon" alt="" src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/chaticon.svg'} style={{ cursor: 'pointer' }}/>

                </div>
                <div className="boardform-header-mypagebtn">
                    <button className="boardform-header-mypagebtn-btn">My Page</button>
                </div>
                <div className="boardform-header-logoutbtn">
                    <button className="boardform-header-logoutbtn-btn">Log out</button>
                </div>
            </div>


            <div className="boardform-body">
                <div className="bodyform-body-title">
                    <input className="board-body-title-input" type="text" placeholder="Title"/>
                </div>
                <div className="bodyform-body-body">
                    <input className="board-body-body-input" type="text" placeholder="Body"/>
                </div>

                <div className="bodyform-body-btn">
                    <button className="boardform-body-btn-cancelbtn">Cancel</button>
                    <button className="boardform-body-btn-postbtn">Post</button>
                </div>
            </div>


        </div>
    );
}

export default BoardForm;