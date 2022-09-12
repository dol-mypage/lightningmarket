import React from "react";
import styled from "styled-components";

const Cards = () => {
  return (
    <Card>
      <CardInner>
        <CardHead>
          <img src="이미지" alt="product" />
          <Sth />
        </CardHead>
        <CardContents>
          <ItemName>아이템 이름</ItemName>
          <ItemContentBottom>
            <Price>가격</Price>
            <Time>2시간 전</Time>
          </ItemContentBottom>
        </CardContents>
      </CardInner>
    </Card>
  );
};

const Card = styled.div`
  width: 196px;
  margin-right: 11px;
  margin-bottom: 11px;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;
const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
`;

const CardHead = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

const Sth = styled.div``;
const CardContents = styled.div`
  padding: 15px 10px;
  height: 50px;
`;
const ItemName = styled.div`
  position: relative;
  font-size: 14px;
  padding-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::after {
    content: "원";
    font-size: 13px;
    margin-left: 3px;
  }
`;
const Time = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;
export default Cards;
