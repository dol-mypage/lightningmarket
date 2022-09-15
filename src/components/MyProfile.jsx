import React from "react";
import styled from "styled-components";
import Photo from "../img/Photo.png";
import 별이다섯개 from "../img/별이다섯개.png";
import myshop from "../img/myshop.png";
import tabs from "../img/tabs.png";

const MyProfile = () => {
  const user = localStorage.getItem("nickname");

  return (
    <>
      <All>
        <All1>
          <ImgG>
            <img src={Photo} />
          </ImgG>
          <ImgG1>
            <ImgG11>
              <img
                src={Photo}
                width="100"
                height="100"
                alt="상점 프로필 이미지"
                class="sc-fATqzn hyPlln"
              />
            </ImgG11>
            <ImgBtt>{user}</ImgBtt>
            <img src={별이다섯개} />
            <ImgBtt1>
              <button>내상점 관리</button>
            </ImgBtt1>
          </ImgG1>
        </All1>
        <TextWindow>
          <Nickname>
            {user}
            <NicknameBtt>상점명수정</NicknameBtt>
          </Nickname>
          <NicknameImg>
            <img src={myshop} />
          </NicknameImg>
        </TextWindow>
      </All>
      <img src={tabs} />
      <Imggg>
        <Texttt>상품</Texttt>
        <select>
          <option>전체ㅤㅤㅤㅤㅤㅤㅤ</option>
        </select>
      </Imggg>
      <AllVi>
        <Text1>전체</Text1>
        <p style={{ color: "red" }}>최신순</p>
        <p style={{ borderLeft: "1px solid rgb(167, 167, 167)" }}>인기순</p>
        <p style={{ borderLeft: "1px solid rgb(167, 167, 167)" }}>저가순</p>
        <p style={{ borderLeft: "1px solid rgb(167, 167, 167)" }}>고가순</p>
      </AllVi>
    </>
  );
};

export default MyProfile;

const All = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
  margin-bottom: 30px;
  border: 1px solid rgb(238, 238, 238);
  height: 310px;
`;

const All1 = styled.div``;

const ImgG = styled.div`
  img {
    width: 308px;
    height: 308px;
    filter: blur(2px);
    border: 20px;
    z-index: -1;
  }
`;

const ImgG1 = styled.div`
  position: Relative;
  top: -270px;
  z-index: 0;
  text-align: center;
`;

const ImgG11 = styled.div`
  img {
    border-radius: 100%;
    border: 1px solid rgb(155, 155, 155);
    width: 100px;
    height: 100px;
    z-index: -100;
  }
`;

const ImgBtt = styled.div`
  color: #000000;
  padding: 10px 0 10px 0;
`;

const ImgBtt1 = styled.div`
  button {
    width: 106px;
    border: 1px solid rgb(255, 255, 255);
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 13px;
    background-color: transparent;
    color: white;
    justify-content: center;
  }
  position: Relative;
  left: 100px;
  padding-top: 10px;
`;

const TextWindow = styled.div`
  margin-left: 6x;
  padding-top: 25px;
`;

const NicknameImg = styled.div`
  img {
    position: Relative;
    top: -50px;
    z-index: -1;
    padding-left: 5px;
  }
`;

const Nickname = styled.div`
  display: flex;
  padding-left: 30px;
  font-weight: bold;
  align-items: center;
`;

const NicknameBtt = styled.button`
  height: 20px;
  align-items: center;
  color: rgb(136, 136, 136);
  background-color: white;
  border: 1px solid rgb(238, 238, 238);
  font-size: 11px;
  margin-left: 7px;
`;

const Texttt = styled.div`
  font-size: 18px;
  float: left;
  padding-right: 843px;
  font-weight: bold;
`;

const Imggg = styled.div`
  padding: 50px 0px 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const AllVi = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  p {
    font-size: 13px;
    padding: 0 10px 0 10px;
  }
  padding: 30px 0 30px 0;
`;

const Text1 = styled.div`
  float: left;
  padding-right: 750px;
`;
