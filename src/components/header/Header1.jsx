import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";
import x버튼 from "../../img/x버튼.png";
import { useDispatch } from "react-redux";
import { _logout,logout } from "../../redux/modules/userSlice";

const Header1 = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = localStorage.getItem("nickname");

  //로그인모달창 오픈
  const [modalLoginOn, setModalLoginOn] = React.useState(false);
  //로그인 모달창에서 취소
  const onOpenLoginModal = () => {
    setModalLoginOn(!modalLoginOn);
  };
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(_logout())
    localStorage.removeItem("Authorization")
    localStorage.removeItem("RefreshToken")
    localStorage.removeItem("nickname")
    navigate('/')
    console.log("작동")
    alert('로그아웃이 완료되었습니다')
  }
  const LoginModal = () => {
    return (
      <>
        <Modal1>
          <Bg>
            <Wrapper>
              <XWrap>
                <X src={x버튼} onClick={onOpenLoginModal}></X>
              </XWrap>
              <Login />
            </Wrapper>
          </Bg>
        </Modal1>
      </>
    );
  };

  //로그아웃모달 오픈
  const [modalOn, setModalOn] = React.useState(false);
  //로그아웃모달에서 취소버튼
  const onOpenModal = () => {
    setModalOn(!modalOn);
  };
  //로그아웃모달 창 디자인
  const Modal = () => {
    return (
      <AllModal>
        <Modal1>
          <Bg />
          <ModalBox>
            <h3 style={{marginBottom:"35px"}} >로그아웃</h3>
            <p style={{marginBottom:"10px"}}>로그아웃 하시겠습니까?</p>
            <Button style={{display:"flex", marginLeft:"30px"}}>
            <CloseBtn onClick={onOpenModal}>취소</CloseBtn>
            <OKbutton onClick={logoutHandler}>확인</OKbutton>
            </Button>
          </ModalBox>
        </Modal1>
      </AllModal>
    );
  };

  return (
    <All>
      <All1>
        <AllSt>
          <AppDown>
            <a href="https://m.bunjang.co.kr/splash">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0ibTg4aW90dDQ5YSIgZD0iTTE2IDExLjAxOGwtLjAwMS41N2MtLjAwMS4xNi0uMDAzLjMyLS4wMDcuNDgxLS4wMS4zNDktLjAzLjcwMS0uMDk0IDEuMDQ2LS4wNjMuMzUtLjE2Ny42NzYtLjMzMS45OTUtLjE2MS4zMTItLjM3MS41OTktLjYyMi44NDdzLS41NC40NTYtLjg1Ny42MTVjLS4zMjIuMTYyLS42NTEuMjY1LTEuMDA2LjMyOC0uMzQ5LjA2Mi0uNzA1LjA4Mi0xLjA1OC4wOTItLjY3OS4wMDgtLjg3MS4wMDgtMS4wNjQuMDA4SDUuMDRjLS43NC0uMDAyLS45MDItLjAwNC0xLjA2NC0uMDA4LS4zNTMtLjAxLS43MDktLjAzLTEuMDU4LS4wOTItLjM1NC0uMDYzLS42ODQtLjE2Ni0xLjAwNi0uMzI4LS4zMTYtLjE2LS42MDYtLjM2Ny0uODU3LS42MTUtLjI1LS4yNDgtLjQ2LS41MzUtLjYyMi0uODQ3LS4xNjQtLjMxOS0uMjY4LS42NDUtLjMzMS0uOTk1LS4wNjMtLjM0NS0uMDg0LS42OTctLjA5My0xLjA0Ni0uMDA1LS4xNi0uMDA3LS4zMi0uMDA4LS40OEwwIDExLjAxOFY0Ljk4MmwuMDAxLS41N2MuMDAxLS4xNi4wMDMtLjMyLjAwOC0uNDgxLjAxLS4zNDkuMDMtLjcwMS4wOTMtMS4wNDYuMDYzLS4zNS4xNjctLjY3Ni4zMzEtLjk5NS4xNjEtLjMxMy4zNzEtLjU5OS42MjItLjg0N3MuNTQtLjQ1Ni44NTctLjYxNUMyLjIzNC4yNjYgMi41NjQuMTYzIDIuOTE4LjFjLjM1LS4wNjIuNzA1LS4wODIgMS4wNTgtLjA5MkM0LjY1NiAwIDQuODQ4IDAgNS4wNCAwSDEwLjgwMiA4Ljc1aDIuMjFjLjc0LjAwMi45MDIuMDA0IDEuMDY0LjAwOC4zNTMuMDEuNzA5LjAzIDEuMDU4LjA5Mi4zNTUuMDYzLjY4NC4xNjYgMS4wMDYuMzI4LjMxNi4xNi42MDYuMzY3Ljg1Ny42MTUuMjUuMjQ4LjQ2MS41MzQuNjIyLjg0Ny4xNjQuMzE5LjI2OC42NDQuMzMxLjk5NS4wNjMuMzQ1LjA4NC42OTcuMDk0IDEuMDQ2LjAwNC4xNi4wMDYuMzIuMDA3LjQ4bC4wMDEuNTcxdjYuMDM2eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPG1hc2sgaWQ9IjN4bmRjNnc0YWIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjbTg4aW90dDQ5YSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNEODBDMTgiIGQ9Ik0wIDBIMTZWMTZIMHoiIG1hc2s9InVybCgjM3huZGM2dzRhYikiLz4KICAgICAgICAgICAgPGcgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCMzeG5kYzZ3NGFiKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC45MSA0LjkyMUwzLjY0MyAxMC41NmMtLjAzNC4wMzYtLjA5NS4wMDgtLjA4OS0uMDQybC41ODgtNC43NzZIMS43MDRjLS4wNDUgMC0uMDY4LS4wNTQtLjAzOC0uMDg3TDYuOTMzLjAxN2MuMDM0LS4wMzcuMDk1LS4wMDkuMDg5LjA0MWwtLjU4OCA0Ljc3NmgyLjQzN2MuMDQ2IDAgLjA3LjA1NC4wMzkuMDg3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi43MTE4NjQsIDIuNzExODY0KSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                style={{ paddingRight: "5px" }}
              />
              앱다운로드
            </a>
          </AppDown>
          <Butt
            onClick={() =>
              alert("Ctrl+D 키를 누르면 즐겨찾기에 추가하실 수 있습니다.")
            }
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjQ0NDIiBkPSJNLTE2LjUtMTYuNWg0OXY0OWgtNDl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5QjQ1NyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAwbDIuNSA0LjkzNCA1LjUuNzktNCAzLjg0OC45IDUuNDI4TDggMTIuNDM0IDMuMSAxNSA0IDkuNTcyIDAgNS43MjRsNS41LS43OXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
              style={{ paddingRight: "5px" }}
            />
            즐겨찾기
          </Butt>
        </AllSt>

        {user == null ? (
          <LoGin>
            <Butt onClick={onOpenLoginModal}>로그인/회원가입</Butt>
            <Butt onClick={onOpenLoginModal}>내상점</Butt>
            {modalLoginOn ? <LoginModal /> : ""}
          </LoGin>
        ) : (
          <LoGin>
            <React.Fragment>
              {/* 로그아웃 눌렀을때 모달창 띄움 */}
              <Butt onClick={onOpenModal}>로그아웃</Butt>
              {modalOn ? <Modal /> : ""}
            </React.Fragment>
            <Butt>알림</Butt>
            <Butt
              onClick={() => {
                navigate("/myshop");
              }}
            >
              내상점
            </Butt>
          </LoGin>
        )}
      </All1>
    </All>
  );
};

export default Header1;

const All = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  height: 40px;
  background: rgb(255, 255, 255);
  a {
    font-size: 12px;
    color: #666666;
  }
`;

const All1 = styled.div`
  width: 1024px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const AllSt = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const AppDown = styled.div`
  display: flex;
  font-size: 13px;
  padding: 0px 15px;
  line-height: 1.4;
  a {
    text-decoration: none;
    cursor: pointer;
    color: rgb(33, 33, 33);
    display: flex;
    align-items: center;
    color: #525252;
  }
  img {
    align-items: center;
  }
`;

const Butt = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 13px;
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 12px;
  color: #525252;
`;

const LoGin = styled.div`
  display: flex;
  flex-shrink: 0;
`;

//모달
const AllModal = styled.div``;

const Modal1 = styled.div`
  position: fixed;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
  position: absolute;
  background-color: #fff;
  width: 300px;
  height: 185px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  text-align:center;
`;

const CloseBtn = styled.div`
  height: 50px;
  width: 120px;
  text-align: center;
  font-size: 18px;
  background-color: rgb(244, 244, 250);
  color: rgb(114, 112, 127);
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const OKbutton = styled.div`
  height: 50px;
  width: 120px;
  text-align: center;
  font-size: 18px;
  color: rgb(255, 255, 255);
  background: rgb(255, 80, 88);
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Button =styled.div`
  height: 35px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: center;
  margin-top: 20px;
  margin-right:30px;
`

//로그인창
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
  border: 1px solid red;
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

