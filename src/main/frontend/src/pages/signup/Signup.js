import "./style/Signup.css";
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Signup(props) {
    const navi = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    // const onLoggin = () => {
    //     axios({
    //         method: "POST",
    //         url: "/api/signup",
    //         data: {
    //             "userid": id,
    //             "password": password,
    //             "email": email
    //         }
    //     }).then((res) => {
    //         console.log(res);
    //         console.log("login succcess");
    //         console.log(res.data.email);
    //         console.log(res.data.username);
    //         // 로그인 성공 시 페이지 이동 등 추가 작업 수행
    //         navi("/board");
    //         // console.log(sessionStorage.getItem());
    //     }).catch(error => {
    //         console.log(error);
    //         alert("로그인에 실패했습니다.");
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dto={
            userId:id,
            password:password,
            email:email,
        };
        axios
            .post("/members/create", dto)
            .then(()=>{
                console.log(dto);
                navi("/board");
            })
            .catch((error)=>{
                console.log(error);
            });
        // onLoggin(); // submit 버튼 클릭 시 onLoggin 함수 호출
    };

        // axios.post("http://localhost:8080/api/signon", userData)
        //     .then(response => {
        //         console.log("User signed on successfully:", response.data);
        //         navi("/board");
        //     })
        //     .catch(error => {
        //         console.error("There was an error signing on:", error);
        //     });



    return(
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <div className="signup-header">
                    <div className="signup-header-logo">
                        <img className="signup-header-logo-image" alt=""
                             src={'https://projectjakeassets.s3.ap-northeast-2.amazonaws.com/src/mypage_assets/header-icon.svg'}/>
                    </div>
                </div>

                <div className="signup-body">

                    <div className="signup-body-id">
                        <input className="signup-body-id-input" type="text" placeholder="Id" value={id}
                               onChange={(e) => setId(e.target.value)}/>
                    </div>

                    <div className="signup-body-password">
                        <input className="signup-body-password-input" type="password" placeholder="Password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="signup-body-email">
                        <input className="signup-body-email-input" type="text" placeholder="Email" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="signup-body-btn">
                        <button className="signup-body-btn-submitbtn" type="submit">Submit</button>

                    </div>

                </div>
            </form>
        </div>

)
    ;

}

export default Signup;