import React from "react";
import styled from "styled-components";
import MyProduct from "../components/MyProduct";
import MyProfile from "../components/MyProfile";

const MyShop = () => {
  return (
    <div>
      <Section>
        <MyProfile />
        <MyProduct />
      </Section>
    </div>
  );
};

export default MyShop;

const Section = styled.div`
  width: 1024px;
  margin: auto;
  padding: 2rem 0px 15rem;
  display: flex;
  flex-wrap: wrap;
`;
