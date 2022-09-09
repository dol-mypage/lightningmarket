import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <div className="authwrapper">
      <img scr=""></img>
      <title1>번개장터로 중고거래 시작하기</title1>
      <div>간편하게 가입하고 상품을 확인하세요</div>
      <form>
        <input
          onChange={handleEmailChange}
          placeholder="이메일을 입력해주세요"
          type="email"
          name="email"
          value={email}
        />
        <input
          onChange={handlePasswordChange}
          placeholder="비밀번호(영문,숫자,특수문자포함 6글자 이상)"
          type="password"
          name="password"
          value={password}
        />

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
        <help>
          도움이 필요하면 이메일 또는 고객센터1670-2910로 문의 부탁드립니다.
          고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
        </help>
      </form>
    </div>
  );
}

export default LoginPage;

const title1 = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
`;

const help = styled.div`
  width: 100%;
  border-top: 1px solid rgb(229, 229, 229);
  padding-top: 1rem;
`;
