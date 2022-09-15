import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import 로그인앱버튼 from "../img/로그인 앱버튼.png";

const Login = () => {
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
      localStorage.setItem("Authorization", data.headers.authorization); //accesstoken
      localStorage.setItem("RefreshToken", data.headers.refreshtoken); //refreshtoken
      localStorage.setItem("nickname", data.data.data.nickname);
      console.log(data);
      navigate("/");
    } catch (error) {
      alert("아이디와 비밀번호를 다시 확인해주세요.");
    }
    console.log(inputvalue);
  };

  //회원가입 클릭시 새로고침해서 로그인창 없애버리기
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
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
          <button
            type="submit"
            className="signupstyle"
            onClick={() => {
              navigate("/signup");
              refreshPage();
            }}
          >
            회원가입
          </button>
        </Buttonstyle>
        <Buttonstyle>
          <button type="submit" className="loginstyle">
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
    </>
  );
};

export default Login;

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
  margin: 10px;
  width: 10%;
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
