import React from "react";
import styled from "styled-components";

const Header3 = () => {
  return (
    <>
      <All>
        <BoxLike>
          <Like>찜한상품</Like>
          <Like1>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAX1JREFUOBGdk7FLw0AUxnPXFhdHRdBdVJBCGgedBP8GoYJQHMRBRNBF1EGnTkopXcRBBEFB/A+cnNuIhEBHQcFBnHRolsTfqwZiWmLSg8t733vf++7d5U4Zv8NxnDHP846Ai8xxpdRDEAT7lmU5YKPZbE5hlonPYfPknrB18m9YQ8nHtu0l3/dvcEcER8ZnLpcrUzTLPGYORXLifmity6Zp3ivXdYc7nU4b0kSMlArS4Tu1MxqR7UFFZCVqRxE71DjzqZZOJi1o1CaTOamy0xraSypqAoldPcvWHhM4aVO2LhQKNbb3lbYizqPWI1bVxWLxla4O4oQMeI9L2ZYzMnDqXKxqhuIuVWpKpVJNQPdmhwI8gxP8nRD/Y09pYDfk/BGSYKvVarDVzZDQz3IuDTrZiuZ6hBBRvL0z7HqUGPqInPO2NrBBGBPbIyRBEaOzC9yK4Mi4pJO1uIjk+wpJAjGN2BXuimDGNSKriPg/MMMXsTw/4BbBO/EzlA5O/QbfD5IxtG4t8AAAAABJRU5ErkJggg=="
              width="9"
              height="9"
              alt="찜 아이콘"
            />
            0
          </Like1>
        </BoxLike>
        <SeeView>
          <SeeView1>최근본상품</SeeView1>
          <img
            src="data:image/png;base64,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"
            width="28"
            height="16"
            alt="빈 최근본상품 아이콘"
          />
          <SeeViewttt>
            최근 본 상품이
            <br />
            없습니다.
          </SeeViewttt>
        </SeeView>
        <App>
          <SeeView1>앱 다운로드</SeeView1>
          <QRBox>
            <img
              src="data:image/png;base64,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"
              alt="번개장터 앱 QR코드"
            />
          </QRBox>
        </App>
        <Top>
          <h4>TOP</h4>
        </Top>
      </All>
    </>
  );
};

export default Header3;

const All = styled.div`
  position: fixed;
  z-index: 100;
  top: 120px;
  right: 330px;
  width: 90px;
  display: block;
  color: rgb(33, 33, 33);
  letter-spacing: -0.5px;
  box-sizing: border-box;
`;

const BoxLike = styled.div`
  width: 100%;
  border: 1px solid rgb(102, 102, 102);
  margin-bottom: 6px;
  background: white;
  padding-top: 10px;
`;

const Like = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-bottom: 8px;
  background: white;
`;

const Like1 = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-bottom: 8px;
`;

const SeeView = styled.div`
  padding: 10px 0px 50px 0px;
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  margin-bottom: 6px;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.4;
  background: white;
  img {
    padding: 40px 0px 0px 0px;
  }
`;

const SeeView1 = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-bottom: 8px;
`;

const SeeViewttt = styled.div`
  justify-content: center;
  color: rgb(204, 204, 204);
  font-size: 12px;
`;

const App = styled.div`
  padding-top: 10px;
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.4;
  height: 105px;
  background: white;
`;

const QRBox = styled.div`
  box-shadow: rgb(0 0 0 / 12%) 0px 0px 7px 0px;
  margin: auto;
  width: 66px;
  height: 66px;
  img {
    height: 50px;
    width: 50px;
    margin-top: 8px;
  }
`;

const Top = styled.div`
  background: white;
  width: 100%;
  border: 1px solid rgb(229, 229, 229);
  margin-top: 10px;
  h4 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    color: rgb(102, 102, 102);
  }
`;
