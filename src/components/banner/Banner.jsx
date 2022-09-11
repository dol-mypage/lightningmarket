import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <Banner>
        <Img>
          <img
            src="https://m.bunjang.co.kr/pc-static/media/appdownload-banner.75b0fd5a.png"
            alt="배너2"
          />
        </Img>
      </Banner>
      <Banner>
        <Img>
          <img
            src="https://m.bunjang.co.kr/pc-static/media/appdownload-banner.75b0fd5a.png"
            alt="배너2"
          />
        </Img>
      </Banner>
    </>
  );
};

export default Banner;

const Img = styled.div`
  width: 1024px;
  margin: auto;
  padding: 3.5rem 0px 1.5rem;
`;
