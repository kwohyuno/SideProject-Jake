import "./style/BoardDetail.css";
import React from "react";

function BoardDetail(props) {

    return(
        <div className="boarddetail">
            <div className="boarddetail-header">
                <div className="boarddetail-header-logo">
                    <img className="boarddetail-header-logo-image" alt="" src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/header-icon.svg'}/>
                </div>
                <div className="boarddetail-header-logoutbtn">
                    <button className="boarddetail-header-logoutbtn-btn">Log out</button>
                </div>
            </div>


            <div className="boarddetail-body">
                <div className="boarddetail-body-box">
                    <img className="boarddetail-body-box-profile-img" src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/profileimg.svg'}/>
                    <div className="boarddetail-body-box-profile-id"> r/AITAH</div>
                    <div className="boarddetail-body-box-profile-writtentime">12 hour ago</div>

                    <div className="boarddetail-body-box-subject">Roommate search</div>
                    <div className="boarddetail-body-box-content">Hi everyone, we are looking for a roommate, preferable male as it would be 4 of us and each have our own room. The cost would be 1170 excluding deposit.
                    </div>

                    <div className="boarddetail-body-box-btnbox">
                        <div className="boarddetail-body-box-btnbox-like" style={{cursor:'pointer'}}>2</div>
                        <div className="boarddetail-body-box-btnbox-comment" style={{cursor:'pointer'}}>3</div>
                        <div className="boarddetail-body-box-btnbox-share" style={{cursor:'pointer'}}>share</div>
                    </div>

                    <input className="boarddetail-body-box-writecomment" type="text" placeholder="Write Comment" />

                    <button className="boarddetail-body-box-postcomment" style={{cursor:'pointer'}}>Post</button>

                    <div className="boarddetail-body-box-commentbox">
                        <div className="boarddetail-body-box-commentbox-borderline">
                            <div className="boarddetail-body-box-commentbox-commentsign">comment</div>
                            <div className="boarddetail-body-box-commentbox-commentsignline"></div>
                        </div>
                        <div className="boarddetail-body-box-commentbox-comments">
                            <div className="boarddetail-body-box-commentbox-comments-comment">
                                <div className="boarddetail-body-box-commentbox-comments-comment-header">
                                    <div className="boarddetail-body-box-comments-comments-comment-header-profilepic">
                                        <img className="boarddetail-body-box-comments-comments-comment-header-profilepic-img" src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/profileimg.svg'}/>
                                    </div>
                                    <div className="boarddetail-body-box-comments-comments-comment-header-id">r/AITAH</div>
                                    <div className="boarddetail-body-box-comments-comments-comment-header-writtentime">12 hr ago</div>
                                </div>
                                <div className="boarddetail-body-box-commentbox-comments-comment-content">Hi everyone, we are looking for a roommate.</div>
                                <div className="boarddetail-body-box-commentbox-comments-comment-like">
                                    <div className="boarddetail-body-box-comments-comments-comment-like-btn">2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetail;


