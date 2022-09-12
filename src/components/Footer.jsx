import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <BottomList>
        <List>
          <p>회사소개</p>
          <p>이용약관</p>
          <p>운영정책</p>
          <p style={{ fontWeight: "600" }}>개인정보처리방침</p>
          <div style={{ paddingLeft: "20px" }}>청소년보호정책</div>
        </List>
      </BottomList>
      <div style={{ width: "1024px", margin: "30px auto 0px" }}>
        <CompanyInfo>
          <CompanyInfo1>
            <p
              style={{
                color: "#666666",
                fontSize: "13px",
                fontWeight: "600",
                paddingBottom: "5px",
              }}
            >
              번개장터(주) 사업자정보
            </p>
            대표이사 : 최재화 | 개인정보보호책임자 : 문제근
            <br />
            사업자등록번호 : 113-86-45836 | 통신판매업신고 : 2019-서울서초-1126
            <br />
            호스팅서비스 제공자 : Amazon Web Services (AWS)
            <br />
            EMAIL : help@bunjang.co.kr | FAX : 02-598-8241 <br />
            주소 : 서울특별시 서초구 서초대로38길 12, 타워1 1층, 타워2 7층
            지하1층
            <br />
            (서초동, 마제스타시티)
            <br />
            사업자정보 확인
            <br />
            <br />
            번개장터(주)더현대서울점 | 최재화 | 365-85-01581 <br />
            서울특별시 영등포구 여의대로 108, 지하2층(여의도동, 파크원)
            <br />
            <br />
            번개장터(주)코엑스점 | 최재화 | 142-85-27412
            <br />
            서울특별시 강남구 영동대로 513, 쇼핑몰동 B1층 C102호(삼성동, 코엑스)
            <br />
            <br />
            번개장터(주)센터필드점 | 최재화 | 808-85-01905
            <br />
            서울특별시 강남구 테헤란로 231, 쇼핑몰동 1층 W124호(역삼동)(역삼동,
            센터필드)
            <br />
            <br />
          </CompanyInfo1>
          <CompanyInfo2>
            <p
              style={{ color: "#666666", fontSize: "15px", fontWeight: "600" }}
            >
              고객센터
            </p>
            <br />
            <p
              style={{ color: "#666666", fontSize: "22px", fontWeight: "600" }}
            >
              1670-2910
            </p>
            <br />
            공지사항 1:1 문의하기 자주 묻는 질문
            <br />
            <br />
            <br />
            <p
              style={{ color: "#666666", fontSize: "14px", fontWeight: "600" }}
            >
              우리은행 채무지급보증 안내
            </p>
            번개장터㈜는 “BGZT Digital”, “BGZT Lab”, “BGZT Lab 1”, “BGZT Lab 2”,
            “BGZT 컬렉션” 상점이
            <br />
            판매한 상품에 한해, 고객님이 현금 결제한 금액에 대해 우리은행과
            채무지급보증 계약을 체결
            <br />
            하여 안전거래를 보장하고 있습니다.
            <br />
            서비스 가입사실 확인
            <br />
            <br />Ⓒ Bungaejangter. Inc All rights reserved.
            <br />
            <br />
            <br />
            <br />
            <br />
          </CompanyInfo2>
        </CompanyInfo>
        <LastInfo>
          <LastInfo1>
            [인증범위] 번개장터 중고거래 플랫폼 서비스 운영(심사받지 않은 물리적
            인프라 제외)
            <br />
            [유효기간] 2021.05.18 ~ 2024.05.17
            <br />
            <br />
          </LastInfo1>
          <LastInfo2>
            “BGZT Digital”, “BGZT Lab”, “BGZT Lab 1”, “BGZT Lab 2”, “BGZT
            컬렉션” 상점의 판매상품을 제외한 모든 상품들에
            <br />
            대하여, 번개장터㈜는 통신판매중개자로서 중고거래마켓 번개장터의
            거래당사자가 아니며, 입점판매자가 등록한
            <br />
            상품정보 및 거래에 대해 책임을 지지 않습니다.
          </LastInfo2>
        </LastInfo>
      </div>
    </>
  );
};

const BottomList = styled.div`
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
  width: 100%;
  height: 66px;
`;

const List = styled.div`
  display: flex;
  margin: 22px auto;
  width: 1024px;
  color: rgb(51, 51, 51);
  font-size: 12px;
  P {
    padding: 0px 20px 0px 20px;
    border-right: 1px solid rgb(229, 229, 229);
  }
`;

const CompanyInfo = styled.div`
  color: rgb(127, 127, 127);
  font-size: 12px;
`;

const CompanyInfo1 = styled.div`
  float: left;
  padding-right: 60px;
`;

const CompanyInfo2 = styled.div``;

const LastInfo = styled.div`
  border-top: 1px solid rgb(229, 229, 229);
  color: rgb(127, 127, 127);
  font-size: 10px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const LastInfo1 = styled.div`
  float: left;
  padding-right: 120px;
`;

const LastInfo2 = styled.div``;

export default Footer;
