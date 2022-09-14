import React from "react";
import Main from "../components/Main";
import Banner from "../components/Banner";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Banner />
      <Main />
    </div>
  );
};

export default Home;
