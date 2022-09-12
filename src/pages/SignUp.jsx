import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import 로그인앱버튼 from "../img/로그인 앱버튼.png";
// import { useDispatch } from "react-redux";
// import { signUp } from "../redux/modules/userSlice";

function SignUp() {
  // const dispatch = useDispatch();
  let navigate = useNavigate();
  const [data, setData] = useState({ nickname: "", email: "", password: "" });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Wrapper>
      <App src={로그인앱버튼}></App>
      <Title>번개장터로 중고거래 시작하기</Title>
      <Body>간편하게 가입하고 상품을 확인하세요</Body>
      <form>
        <Inputbox>
          <input
            onChange={onChangeHandler}
            placeholder="닉네임을 입력해주세요"
            type="nickname"
            name="nickname"
            value={data.nickname}
            required
          />
        </Inputbox>
        <Inputbox>
          <input
            onChange={onChangeHandler}
            placeholder="이메일을 입력해주세요"
            type="email"
            name="email"
            value={data.email}
            required
          />
        </Inputbox>
        <Inputbox>
          <input
            onChange={onChangeHandler}
            placeholder="비밀번호(영문,숫자,특수문자포함 6글자 이상)"
            type="password"
            name="password"
            value={data.password}
            required
          />
        </Inputbox>
        <Inputbox>
          <input
            onChange={onChangeHandler}
            placeholder="비밀번호 재입력"
            type="password"
            name="password"
            value={data.password}
            required
          />
        </Inputbox>

        <Buttonstyle>
          <button
            type="submit"
            className="signupstyle"
            // onClick={() => {
            //   dispatch(signUp(data));
            // }}
          >
            <p>회원가입</p>
          </button>
        </Buttonstyle>
        <Buttonstyle>
          <button
            type="submit"
            className="loginstyle"
            onClick={() => {
              navigate("/login");
            }}
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
  );
}

export default SignUp;

let Wrapper = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 400px;
  height: 425px;
  border: none;
  background-color: #f7f7f7;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
`;

const Buttonstyle = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  border: none;
  margin-right: 5px;
  background-color: none;
  padding: 0px;
  height: 30px;

  .loginstyle {
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
  }

  .signupstyle {
    background-color: #d80c18;
    border-style: none;
    color: white;
    height: 30px;
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 5px;
    width: 100px;
  }
`;

const Inputbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
`;

const App = styled.img`
  text-align: center;
  margin: auto auto 10px;
  width: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #212121;
  text-align: center;
  font-weight: bold;
`;

const Body = styled.div`
  line-height: 1.5;
  margin-bottom: 35px;
  color: #212121;
  font-size: 14px;
  text-align: center;
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
