import "./style/Login.css";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Login(props) {

    const navi = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    axios.defaults.withCredentials=true;


    const onSubmitEvent = (e)=>{
        e.preventDefault();
        const dto = {
          userId: id,
          password: password,
        };
        axios
            .post("/login", dto)
            .then(()=>{
                console.log(dto);
                sessionStorage.setItem("userId", id);
                console.log(sessionStorage.getItem("userId"));
                navi("/board");
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    return (
        <div>
            <form className="login-form" onSubmit={onSubmitEvent}>
                <div>
                    <img className="header-icon" alt=""
                         src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/login_assets/header-icon.svg'}/>
                </div>
                <div>
                    {/*<img className="login-image" alt=""*/}
                    {/*     src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/login_assets/login-image.svg'}/>*/}
                </div>

                <input
                    className="login-form-id"
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    className="login-form-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-form-button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;


