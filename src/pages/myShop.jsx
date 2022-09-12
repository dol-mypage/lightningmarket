import React from "react";
import styled from "styled-components";
import MyProduct from "../components/MyProduct";
import Photo from "../img/Photo.png";

const MyShop = () => {
  return (
    <div>
      <Section>
        <All>
          <All1>
            <img src={Photo} />
          </All1>
          <TextWindow>dd</TextWindow>
        </All>
        <MyProduct />
      </Section>
    </div>
  );
};

export default MyShop;

const Section = styled.section`
  width: 1024px;
  margin: auto;
  padding: 3.5rem 0px 15rem;
  display: flex;
  flex-wrap: wrap;
`;

const All = styled.section`
  width: 1024px;
  margin: auto;
  display: flex;
  width: 1024px;
  margin-bottom: 30px;
  border: 1px solid rgb(238, 238, 238);
`;

const All1 = styled.section`
  img {
    width: 310px;
    width: 310px;
  }
`;

const TextWindow = styled.section``;
