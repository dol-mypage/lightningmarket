import React from "react";
import Main from "../components/Main";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Main props={props} />
    </div>
  );
};

export default Home;
