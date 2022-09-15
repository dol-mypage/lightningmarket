import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import 로그인앱버튼 from "../img/로그인 앱버튼.png";
import x버튼 from "../img/x버튼.png";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/modules/userSlice";
import axios from "axios";
import SignUp from "./SignUp";

const Login = ({open}) => {
  // const dispatch = useDispatch();
  let [modalOpen, setModalOpen] = useState(false);
  const signClose = () => {
    setModalOpen(true);
  };
  const signOpen = () => {
    setModalOpen(false);
  };

  let navigate = useNavigate();

  const [inputvalue, setInputvalue] = useState({
    nickname: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //빈값 체크
    if (inputvalue.nickname === "" || inputvalue.password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
    }

    try {
      const data = await axios.post(
        "http://13.125.225.96:8080/login",
        inputvalue
      );
      if (data.data.success === false) {
        alert("아이디와 비밀번호를 다시 확인해주세요.");
      } else {
        localStorage.setItem("Authorization", data.headers.authorization); //accesstoken
        localStorage.setItem("RefreshToken", data.headers.refreshtoken); //refreshtoken
        localStorage.setItem("nickname", data.data.data.nickname);
        console.log(data);
        navigate("/");
      }
    } catch (error) {}
    console.log(inputvalue);
  };

  return (
    <>
    {modalOpen === true
      ?<SignUp open={open}/>
      :null
    }
    <Wrapper>
      <XWrap>
        <X src={x버튼} onClick={() =>open(false)}></X>
      </XWrap>
      <App src={로그인앱버튼}></App>

      <Title>번개장터로 중고거래 시작하기</Title>

      <Body>간편하게 가입하고 상품을 확인하세요</Body>
      <form onSubmit={onSubmitHandler}>
        <Inputbox>
          <input
            className="inputstyle"
            onChange={onChangeHandler}
            placeholder="아이디를 입력해주세요"
            type="id"
            name="nickname"
            value={inputvalue.nickname}
            // required
          />
        </Inputbox>
        <Inputbox>
          <input
            className="inputstyle"
            onChange={onChangeHandler}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={inputvalue.password}
            // required
          />
        </Inputbox>

        <Buttonstyle>
          <button  className="signupstyle">
            회원가입
          </button>
        </Buttonstyle>
        <Buttonstyle>
          <button
            type="submit"
            className="loginstyle"
            // onClick={(e) => {
            //   dispatch(login(data));
            //   console.log("실행되나");
            // }}
          >
            로그인
          </button>
        </Buttonstyle>
        <HelpWrapper>
          <Help>
            도움이 필요하면 이메일 또는 고객센터1670-2910로 문의 부탁드립니다.
            고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
          </Help>
        </HelpWrapper>
      </form>
    </Wrapper>
    </>
  );
};

export default Login;

let Wrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 419.998px;
  height: 465.886px;
  border: none;
  background-color: #f7f7f7;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`;

const X = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const XWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-right: 20px;
`;

const Buttonstyle = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  border: none;
  margin-right: 5px;
  background-color: none;
  padding: 0px;
  height: 30px;

  .loginstyle {
    background-color: #d80c18;
    color: white;
    border: 1px solid;
    height: 30px;
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
  }
  .signupstyle {
    background: none;
    border: 1px solid;
    border-color: gray;
    background-color: none;
    height: 30px;
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
  }
`;

const Inputbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;

  .inputstyle {
    width: 250px;
    height: 25px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const App = styled.img`
  text-align: center;
  margin: auto auto 10px;
  width: 30px;
  margin-top: 0px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #212121;
  text-align: center;
  font-weight: bold;
  letter-spacing: -0.5px;
  width: 419.998px;
  height: 29.994px;
`;

const Body = styled.div`
  line-height: 1.5;
  margin-bottom: 35px;
  color: #212121;
  font-size: 14px;
  text-align: center;
  width: 419.998px;
  height: 21.003px;
  letter-spacing: -0.5px;
`;

const HelpWrapper = styled.div`
  padding: 56px 32px 24px;
  vertical-align: bottom;
`;
const Help = styled.div`
  width: 100%;
  color: #999999;
  font-size: 12px;
  border-top: 1px solid rgb(229, 229, 229);
  padding-top: 1rem;
`;
