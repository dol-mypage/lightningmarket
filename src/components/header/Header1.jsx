import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";

//이미지 불러오기
import 앱다운 from "../../img/앱다운.png";
import 즐겨찾기 from "../../img/즐겨찾기.png";

const Header1 = () => {
  let navigate = useNavigate();

  return (
    <div className="IvAsaii">
      <div className="kaFNm">
        <div className="jYMzIJ">
          <a className="hvNQEV" href="https://m.bunjang.co.kr/splash">
            <img src={앱다운} alt="" />
            앱다운로드
          </a>
          <button
            className="bNBtQ"
            onClick={() =>
              alert("Ctrl+D 키를 누르면 즐겨찾기에 추가하실 수 있습니다.")
            }
          >
            <img src={즐겨찾기} alt="" />
            즐겨찾기
          </button>
        </div>
        <div className="jYMzIJ">
          <button className="bNBtQ" onClick={() => navigate("/login")}>
            로그인/회원가입
          </button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Header1;
