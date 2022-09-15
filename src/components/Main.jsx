import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getProduct } from "../redux/modules/products";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function Main(props) {
  console.log(props);
  const { mo1, mo2 } = props;
  console.log(mo2);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  console.log(products);

  // 리덕스에서 포스트 리스트를 로딩
  useEffect(() => {
    dispatch(__getProduct());
  }, [dispatch]);
  console.log(products?.data?.data);


  return (
    <div>
      <Section>
        <H2>오늘의 상품 추천</H2>
        <ItemInfos>
          <ItemContainer>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {products.map((product) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/products/${product.id}`);
                    }}
                    key={product.id}
                  >
                    <CardInner>
                      <CardHead>
                        <img src={product.imgUrl} />
                        <Sth />
                      </CardHead>
                      <CardContents>
                        <ItemName>{product.title}</ItemName>
                        <ItemContentBottom>
                          <Price>{product.price}</Price>
                          <Time>2시간 전</Time>
                        </ItemContentBottom>
                      </CardContents>
                    </CardInner>
                  </div>
                );
              })}
            </div>
          </ItemContainer>
        </ItemInfos>
        <div>
          {mo1 ? <Login></Login> : null}
          {mo2 ? <SignUp></SignUp> : null}
          {/* mo1이 true면 <Login>을 보여줘. open이 false면 아무것도 
보여주지마. 삼항연산자로 적어줌.   */}
      </div>
    </Section>
  );
}

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;
const Section = styled.section`
  width: 1024px;
  margin: auto;
  padding: 3.5rem 0px 1.5rem;

  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const ItemInfos = styled.div`
  position: relative;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  width: 1024px;
`;

const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const CardHead = styled.div`
  position: relative;
  width: 192px;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 192px;
    height: 194px;
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

export default Main;
