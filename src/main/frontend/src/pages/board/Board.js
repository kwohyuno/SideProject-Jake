import "./style/Board.css";
import React, {useEffect, useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Board(props) {
    const navi = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [boardList,setBoardList] = useState([]);

    const handleClickOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedUser(null);
    };

    const handleCreate = () => {
        navi("/board/form");
    };

    useEffect(()=>{
        console.log(sessionStorage.getItem("userId"));
        axios
            .get("/board")
            .then(res => {
                const sortedBoardList = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setBoardList(sortedBoardList);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);

    // 가상 데이터 예시
    const userData = {
        id: "username123",
        photo: "https://example.com/userphoto.jpg",
        name: "John Doe",
        email: "johndoe@example.com"
    };

    const handleLogout = () => {
        // 세션에서 사용자 정보 삭제
        sessionStorage.removeItem("userId");

        // 로그인 페이지로 리다이렉트
        navi("/login");
    };

    return (
        <div className="board">
            <div className="board-header">

                <div className="board-header-logo">
                    <img className="board-header-logo-image" alt=""
                         src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/header-icon.svg'}/>
                </div>
                {/*<div className="board-header-searchbar">*/}
                {/*    <img className="board-header-searchbar-icon" alt=""*/}
                {/*         src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/searchicon.svg'}/>*/}
                {/*    <input className="board-header-searchbar-input" type="text" placeholder="Search posts"/>*/}
                {/*</div>*/}
                <div className="board-header-posticon">
                    <button className="board-header-posticon-btn" onClick={handleCreate}>+ Create</button>
                </div>
                <div className="board-header-chaticon">
                    <img className="board-header-chaticon" alt=""
                         src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/chaticon.svg'}
                         style={{cursor: 'pointer'}} onClick={() => navi("/message")}/>

                </div>
                <div className="board-header-mypagebtn">
                    <button className="board-header-mypagebtn-btn">My Page</button>
                </div>
                <div className="board-header-logoutbtn">
                    <button className="board-header-logoutbtn-btn" onClick={handleLogout}>Log out</button>
                </div>

            </div>


            <div className="board-body">
                {boardList.map((board, index) => (
                    <div key={index} className="board-body-box" onClick={() => navi(`/board/detail/${board.id}`)}
                         style={{cursor: 'pointer'}}>
                        <div className="board-body-box-post">
                            <div className="board-body-box-profile">
                                <img
                                    className="board-body-box-profile-img"
                                    alt={userData.name}
                                    onClick={() => handleClickOpen(userData)}
                                    style={{cursor: 'pointer'}}
                                    src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/board_assets/profileimg.svg'}
                                />
                                <div className="board-body-box-profile-id" onClick={() => handleClickOpen(userData)}
                                     style={{cursor: 'pointer'}}>
                                    {board.authorId}
                                </div>
                                <div className="board-body-box-profile-writtendate">{board.createdAt}</div>
                            </div>

                            <div className="board-body-box-subject">
                                {board.title}
                            </div>
                            <div className="board-body-box-contents">
                                {board.content}
                            </div>
                        </div>
                    </div>
                ))}

                {/* 프로필 정보 다이얼로그 */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{selectedUser?.name}</DialogTitle>
                    <DialogContent>
                        <img src={selectedUser?.photo} alt={selectedUser?.name}
                             style={{width: '100px', height: '100px'}}/>
                        <p>{selectedUser?.email}</p>
                        <p>{selectedUser?.id}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            닫기
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Board;