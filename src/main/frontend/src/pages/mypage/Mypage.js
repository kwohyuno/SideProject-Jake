import "./style/Mypage.css";
import React, {useState} from 'react';


function Mypage(props) {


    return (
        <div className="mypage">
            <div className="mypage-header">

                <div className="mypage-header-logo">
                    <img className="mypage-header-logo-image" alt="" src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/mypage_assets/header-icon.svg'}/>
                </div>


                <div className="mypage-header-chaticon">
                    <img className="mypage-header-chaticon" alt="" src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/mypage_assets/chaticon.svg'}
                         style={{cursor: 'pointer'}}/>
                </div>

                <div className="mypage-header-profile">
                    <div className="mypage-header-profile-pic">
                        <img className="mypage-header-profile-pic-img" alt=""
                             style={{cursor: 'pointer'}}
                             src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/mypage_assets/profileimg.svg'}/>
                        <div className="mypage-header-profile-pic-plusicon" style={{cursor: 'pointer'}}>+</div>
                    </div>
                    <div className="mypage-header-profile-id"> Jake1234</div>
                </div>


                <div className="mypage-header-mypagebtn">
                    <button className="mypage-header-mypagebtn-btn">Main Page</button>
                </div>
                <div className="mypage-header-logoutbtn">
                    <button className="mypage-header-logoutbtn-btn">Log out</button>
                </div>

            </div>

            <div className="mypage-body">
                <div className="mypage-body-name">
                    <input className="mypage-body-name-input" type="text" placeholder="Name"/>
                </div>

                <div className="mypage-body-state">
                    <input className="mypage-body-state-input" type="text" placeholder="State"/>
                </div>

                <div className="mypage-body-college">
                    <input className="mypage-body-college-input" type="text" placeholder="College"/>
                </div>

                <div className="mypage-body-age">
                    <input className="mypage-body-age-input" type="text" placeholder="Age"/>
                </div>

                <div className="mypage-body-nationality">
                    <input className="mypage-body-nationality-input" type="text" placeholder="Nationality"/>
                </div>


                <div className="mypage-body-btn">
                    <button className="mypage-body-btn-submitbtn">Change Info</button>

                </div>
            </div>


        </div>
    );
}

export default Mypage;