import React from "react";
import styled from "styled-components";
import MyProduct from "../components/MyProduct";
import MyProfile from "../components/MyProfile";
import { Helmet } from "react-helmet-async";

const MyShop = (props) => {

const user = localStorage.getItem("nickname");

  return (
    <div>
      <Helmet>
        <title>{user} | 번개장터</title>
      </Helmet>
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
  padding: 2rem 0px 8rem;
  display: flex;
  flex-wrap: wrap;
`;
