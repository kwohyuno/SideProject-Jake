import "./style/BoardDetail.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"; // useParams import
import { Modal, Box, Typography, Button } from "@mui/material";


function BoardDetail(props) {
    const { boardId } = useParams();
    const [board,setBoard] = useState([]);
    const navi = useNavigate();
    const [open, setOpen] = useState(false); // 모달 상태
    const [translatedTitle, setTranslatedTitle] = useState("");
    const [translatedText, setTranslatedText] = useState("");



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    useEffect(()=>{
        if (boardId) {
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

    const editBoard = (boardId) => {
        navi(`/board/updateform/${boardId}`,{ state: board });
    };

    const translateContent = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/translate', {
            prompt: board.content,
        })
            .then((response) => {
                setTranslatedText(response.data.translatedText);
                console.log("번역된 텍스트는: " + response.data.translatedText);

                // 모달 열기
                handleOpen();
            })
            .catch((error) => {
                console.error('번역 중 오류 발생:', error);
            });
    }




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
                        <div className="boarddetail-body-box-btnbox-edit" style={{cursor:'pointer'}} onClick={() => editBoard(boardId)}>Edit</div>
                        <div className="boarddetail-body-box-btnbox-translate" style={{cursor:'pointer'}} onClick={translateContent}> Translate </div>
                        <div className="boarddetail-body-box-btnbox-dashboard" style={{cursor:'pointer'}} onClick={()=> navi("/board")}>  Dashboard &nbsp; &gt; </div>
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
            {/* 모달 */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        {/*{translatedTitle ? translatedTitle : "Translating..."}*/}
                        {translatedTitle}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {/*{translatedText ? translatedText : "Translating..."}*/}
                        {translatedText}
                    </Typography>
                    <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default BoardDetail;


