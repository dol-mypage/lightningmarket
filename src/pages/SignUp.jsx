import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import 로그인앱버튼 from "../img/로그인 앱버튼.png";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/modules/userSlice";
import x버튼 from "../img/x버튼.png";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";

function SignUp() {
  // const dispatch = useDispatch();
  let navigate = useNavigate();
  const [input, setInput] = useState({
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setInput({ ...input, [name]: value });
  // };

  const [nicknameError, setNicknameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  //유효성 체크
  const onChangeNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-z])(?=.*[0-9]).{5,12}$/;
    if (!e.target.value || nicknameRegex.test(e.target.value))
      setNicknameError(false);
    else setNicknameError(true);
    // setInput(e.target.value);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.+[a-zA-z])(?=.+[!@#$%^*+=-])(?=.+[0-9]).{8,25}$/;

    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!input.passwordConfirm || e.target.value === input.passwordConfirm)
      setPasswordConfirmError(false);
    else setPasswordConfirmError(true);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onChangePasswordConfirm = (e) => {
    if (input.password === e.target.value) setPasswordConfirmError(false);
    else setPasswordConfirmError(true);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //유효성 검사
  const validation = () => {
    if (!input.nickname) setNicknameError(true);
    if (!input.password) setPasswordError(true);
    if (!input.passwordConfirm) setPasswordConfirmError(true);

    if (nicknameError && passwordError && passwordConfirmError) return true;
    else return false;
  };
  console.log(input.nickname);
  console.log(input.password);
  console.log(input.passwordConfirm);

  //회원가입 버튼 누르면 실행
  const addHandler = async () => {
    const { nickname, password, passwordConfirm } = input;
    const user = {
      nickname: nickname,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    if (input.password !== input.passwordConfirm) {
      return alert("비밀번호가 일치하지 않습니다");
    } else {
      try {
        const data = await axios.post("http://13.125.225.96:8080/signup", user);
        console.log(data);
        if (data.data.success === false) alert(data.data.error.message);
        else {
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        }
      } catch (error) {
        alert("가입에 실패했습니다");
      }
    }
    console.log(validation());
    if (validation()) {
    }
    return;
  };

  return (
    <Wrapper>
      <XWrap>
        <X src={x버튼}></X>
      </XWrap>
      <App src={로그인앱버튼}></App>
      <Title>번개장터로 중고거래 시작하기</Title>
      <Body>간편하게 가입하고 상품을 확인하세요</Body>
      <form>
        <Inputbox>
          <input
            className="inputstyle"
            onChange={onChangeNickname}
            placeholder="아이디를 입력해주세요"
            type="id"
            name="nickname"
            value={input.nickname}
            // required
          />
        </Inputbox>
        <Inputbox>
          <input
            className="inputstyle"
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={input.password}
            // required
          />
        </Inputbox>
        <Inputbox>
          <input
            className="inputstyle"
            onChange={onChangePasswordConfirm}
            placeholder="비밀번호를 재입력해주세요"
            type="password"
            name="passwordConfirm"
            value={input.passwordConfirm}
            // required
          />
        </Inputbox>

        <Buttonstyle>
          <button
            type="submit"
            className="signupstyle"
            onClick={() => {
              addHandler();
              console.log(input);
            }}
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
  /* border: 1px solid red; */
  display: flex;
`;

const X = styled.img`
  width: 20px;
`;

const XWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
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
    cursor: pointer;
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
    cursor: pointer;
  }
`;

const Inputbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
<<<<<<< HEAD
=======

>>>>>>> 08e57995a8b8f91ee8d06cd29eb22ac744fc1581
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
