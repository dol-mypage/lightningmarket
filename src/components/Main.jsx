import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Banner from "./Banner";

const Main = () => {
  return (
    <>
      <Banner />
      <Section>
        <H2>오늘의 상품 추천</H2>
        <ItemInfos>
          <ItemContainer>
            <Cards />
          </ItemContainer>
        </ItemInfos>
      </Section>
    </>
  );
};

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;
const Section = styled.section`
  width: 1024px;
  margin: auto;
  padding: 3.5rem 0px 1.5rem;
`;
const ItemInfos = styled.div`
  position: relative;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Main;
