import "./style/BoardDetail.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"; // useParams import

function BoardDetail(props) {
    const { boardId } = useParams();
    const [board,setBoard] = useState([]);
    const navi = useNavigate();

    // const fetchBoardDetail = (boardId) => {
    //     axios.get(`/api/board/detail/${boardId}}`)
    //         .then(res => {
    //             console.log('Board Details:', res.data);
    //             setBoard(res.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching board details:', error);
    //         });
    // };

    useEffect(()=>{
        if (boardId) {
            // boardId가 있을 때만 요청을 보냄
            axios
                .get(`/board/detail/${boardId}`)
                .then((res) => {
                    setBoard(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching board details:", error);
                });
        }
    },[]);

    const deleteBoard = (boardId) => {
        if (window.confirm("Are you sure you want to delete this board?")) {
            axios.delete(`/board/detail/${boardId}`)
                .then(() => {
                    navi(`/board`);  // 삭제 후 목록 페이지로 이동
                })
                .catch((error) => {
                    console.error("Error deleting board:", error);
                });
        }
    };


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

                    <div className="boarddetail-body-box-subject">{board.title}</div>
                    <div className="boarddetail-body-box-content">{board.content}
                    </div>

                    <div className="boarddetail-body-box-btnbox">
                        <div className="boarddetail-body-box-btnbox-like" style={{cursor:'pointer'}}>2</div>
                        <div className="boarddetail-body-box-btnbox-delete" style={{cursor:'pointer'}} onClick={() => deleteBoard(boardId)}>Delete</div>
                        {/*<div className="boarddetail-body-box-btnbox-comment" style={{cursor:'pointer'}}>3</div>*/}
                        {/*<div className="boarddetail-body-box-btnbox-share" style={{cursor:'pointer'}}>share</div>*/}
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


