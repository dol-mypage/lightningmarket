import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import 앱다운 from "../img/앱다운.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <img src={앱다운} />
      <Title>번개장터로 중고거래 시작하기</Title>
      <Body>간편하게 가입하고 상품을 확인하세요</Body>
      <Form>
        <LoginCount>
          <input
            onChange={handleEmailChange}
            placeholder="이메일을 입력해주세요"
            type="email"
            name="email"
            value={email}
            required
          />
          <input
            onChange={handlePasswordChange}
            placeholder="비밀번호(영문,숫자,특수문자포함 6글자 이상)"
            type="password"
            name="password"
            value={password}
            required
          />
        </LoginCount>

        <button type="submit" className="btn-register">
          회원가입
        </button>
        <button type="submit" className="btn-register">
          로그인
        </button>
        {/* <Link to="register" style={{ color: "gray", textDecoration: "none" }}>
          {""}
          Apple ID가 없으신가요? 지금 생성.
        </Link> */}
        <Help>
          도움이 필요하면 이메일 또는 고객센터1670-2910로 문의 부탁드립니다.
          고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
        </Help>
      </Form>
    </div>
  );
}

export default LoginPage;

const Form = styled.div`
  width: 450px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center; ;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
`;

const Body = styled.div`
  line-height: 1.5;
  margin-bottom: 35px;
  text-align: center;
`;

const LoginCount = styled.div``;

const Help = styled.div`
  width: 100%;
  border-top: 1px solid rgb(229, 229, 229);
  padding-top: 1rem;
`;
