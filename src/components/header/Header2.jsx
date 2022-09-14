import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";

const Header2 = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const products = useSelector((state) => state.product.data);
  const [searchWord, setSearchWord] = useState("");
  const [search, setSearch] = useState("");
 
  
  return (
    <MainHeader>
      <MainHeaderContainer>
        <MainHeaderTop>
          <LogoA a href="/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAxMzYgNDAiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBmaWxsPSIjRDgwQzE4Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjc1MSAxNC44TDUuOTY3IDMxLjc1NmMtLjEwMi4xMS0uMjg2LjAyNS0uMjY3LS4xMjVsMS43Ni0xNC4zNjNILjE1NmMtLjEzNiAwLS4yMDctLjE2Mi0uMTE0LS4yNjJMMTUuODI2LjA1Yy4xMDMtLjExLjI4Ni0uMDI1LjI2OC4xMjVsLTEuNzYgMTQuMzYzaDcuMzAzYy4xMzYgMCAuMjA3LjE2Mi4xMTQuMjYyTTc5LjQgMi41NTVWMjkuNjVoLTQuMDNWMTYuMTMyaC0yLjZ2MTMuMDA0SDY4LjhWMi43MDVoMy45NzF2OS4zMjRoMi42VjIuNTU1aDQuMDN6TTk0LjcgMTguNDU4Yy43NTcgMCAxLjQ5My4wMDUgMi4yMS4wMTUuNzE0LjAxMiAxLjM0NC4wMzYgMS44OS4wNzUgMi4yNTcuMTM4IDQuMDA3LjY1IDUuMjQ2IDEuNTMzIDEuMjQuODgyIDEuODYgMi4yMDcgMS44NiAzLjk3M3MtLjYyIDMuMDg2LTEuODYgMy45NmMtMS4yNC44NzItMi45OSAxLjM4OC01LjI0NyAxLjU0OC0uNTI1LjAzOS0xLjE0NS4wNjMtMS44Ni4wNzMtLjcxNy4wMS0xLjQ1OC4wMTQtMi4yMjMuMDE0LS43NjcgMC0xLjUwOC0uMDA1LTIuMjI0LS4wMTQtLjcxNS0uMDEtMS4zMzUtLjAzNC0xLjg2LS4wNzMtMi4yNTgtLjE2LTQuMDA3LS42NzYtNS4yNDgtMS41NDgtMS4yNC0uODc0LTEuODYtMi4xOTQtMS44Ni0zLjk2cy42Mi0zLjA4NCAxLjg2LTMuOTU4YzEuMjQxLS44NzIgMi45OS0xLjM4OCA1LjI0OC0xLjU0OC41MjUtLjAyIDEuMTQ1LS4wMzkgMS44Ni0uMDYuNzE2LS4wMiAxLjQ1Mi0uMDMgMi4yMDgtLjAzek0xMzMgMi41NTVWMjkuNjVoLTQuMTIzVjE2LjM0M2gtNC4xMjN2LTMuOTIxaDQuMTIzVjIuNTU1SDEzM3ptLTk4LjE1NSAxNy42N3Y1LjE4NWgxNi44NzN2My42NUgzMC41MTN2LTguODM1aDQuMzMyem0zMi4xODctMTcuMDhjLS4yNDQgMi43MjgtLjY1NiA1LjI2OC0xLjIzNyA3LjYxOS0uNTggMi4zNS0xLjI2NyA0LjU0NS0yLjA2MSA2LjU4LS43OTUgMi4wMzktMS42NyAzLjkyNS0yLjYyNyA1LjY2Ny0uOTU4IDEuNzQtMS45MzQgMy4zNjMtMi45MzIgNC44NzFsLTMuNTEyLTIuMTdjLjk1Ni0xLjM2MSAxLjg1My0yLjgwMyAyLjY4OC00LjMxOS44MzQtMS41MTggMS41ODMtMy4wNzkgMi4yNDQtNC42OS42NjEtMS42MDcgMS4yMzItMy4yMzUgMS43MS00Ljg4NS40NzktMS42NDguODQtMy4yNzggMS4wODUtNC44ODZoLTYuOTYzVjMuMTQ0em01Ny4xNjEgMHYzLjczNGgtOS4zNDh2NS44NDFoOC42OTN2My42MTVoLTguNjkzdjcuMDc0bDEyLjI2NS0uNDh2My41NTNsLTE2LjQ5Mi44MTFWMy4xNDRoMTMuNTc1ek05NC43MTUgMjEuOTdjLS42ODYgMC0xLjM1Ni4wMS0yLjAxMi4wMjktLjY1NS4wMjItMS4yMzUuMDUtMS43NC4wOS0xLjAyNy4wOTktMS43NjguMzE3LTIuMjIyLjY1Ni0uNDU0LjMzNi0uNjguNzczLS42OCAxLjMwOCAwIC41MzguMjI2Ljk3My42OCAxLjMxLjQ1NC4zMzcgMS4xOTUuNTU1IDIuMjIyLjY1NC41MDUuMDQxIDEuMDg1LjA3IDEuNzQuMDkuNjU2LjAyIDEuMzI2LjAyOSAyLjAxMi4wMjkuNjg1IDAgMS4zNTUtLjAxIDIuMDExLS4wMjkuNjU1LS4wMiAxLjIzNC0uMDQ5IDEuNzM5LS4wOSAxLjAyOS0uMSAxLjc3LS4zMTcgMi4yMjQtLjY1NC40NTMtLjMzNy42OC0uNzcyLjY4LTEuMzEgMC0uNTM1LS4yMjctLjk3Mi0uNjgtMS4zMDgtLjQ1NC0uMzQtMS4xOTUtLjU1Ny0yLjIyNC0uNjU3LS41MDUtLjAzOC0xLjA4NC0uMDY3LTEuNzM5LS4wOS0uNjU2LS4wMTktMS4zMjYtLjAyOC0yLjAxMS0uMDI4ek01MS43MTggMi41NTV2MTkuNDM3aC00LjI1OXYtOS41OThoLTMuOTU4djUuODEzSDI4Ljc0NlYyLjg1Nmg0LjI1OXY0LjE1aDYuMjM4di00LjE1SDQzLjV2NS42MDNoMy45NThWMi41NTVoNC4yNTl6bTQ2LjYzNC41OXYzLjcyaC00Ljk0NGMtLjM2Ni42ODMtLjc3MyAxLjM4My0xLjIzMSAyLjEwNS0uMDc0LjExOC0uMTYuMjM0LS4yMzUuMzVsNy40ODUgNC44OTgtMi4zNTggMy4yNjItNy4yMzItNS4yMDVjLS4wMzcuMDQ4LS4wNy4wOTYtLjEwNy4xNDMtLjg5NSAxLjEzNy0xLjg0IDIuMjMyLTIuODM0IDMuMjgtLjk5NSAxLjA0Ny0xLjk4IDEuOTY2LTIuOTUzIDIuNzZsLTIuNzc1LTIuODA3Yy43NzYtLjYxMSAxLjU1MS0xLjMwNiAyLjMyNy0yLjA5Ljc3Ni0uNzgyIDEuNTI2LTEuNjA3IDIuMjUyLTIuNDcuNzI2LS44NjQgMS40MDItMS43NTggMi4wMy0yLjY4NC4zNDgtLjUxNi42NjUtMS4wMy45Ni0xLjU0Mkg4Mi42di0zLjcyaDE1Ljc1MnptNi40MTgtLjU5VjguMWgyLjkwM3YzLjk2aC0yLjkwM3Y2LjRoLTQuMTY1VjIuNTU0aDQuMTY1em0tNjUuNTI3IDguMDIzaC02LjIzOHYzLjk5N2g2LjIzOHYtMy45OTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNC4wMDAwMDApIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
              alt="logo"
            />
          </LogoA>
          <MainHeaderMiddle>
            <MainHeaderMiddleContainer>
              <input type="text" placeholder="상품명, 지역명, @상점명 입력" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
              <SearchA>
                <img onClick={() => navigate('/products/search/'+searchWord)}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeZJREFUOBGVVD1PAkEQ3VlOjY0xIdGOI0BMxMSGytJE+RsWWomx8mfYWNBpZWltg1b2NCZaGBppFAzR1njsOO9gzHEfIJdws/vmvcft7OySiT2DQqUakDtipjoZ4xsyzGy6RNzy2F7mu53nmGRiKprRw7XaQm/wdU6OG2xMTvFoFPKQLTXX86tn1G7/RHM6thjArP/xeWscn8rUWqJLee/klhdW8MM4xCQHDrjQqEkivhfLF++FEvf80luvsLGXIIwB5MABF5o0HoU1M+5RkvK1Xn29+3KfRlQMpmyCOyzfM3Y7XlMbboDUjIiuZpnBFBwsH3WGVv9Io8VuYuLEUMFZUbmqjfJt2BqC5JZyT9HEtLFyVRvlhrscBeYaS4/G+VaQV4DD7+FWPJk1Vy4aPs6R+nILoBTzMJ7MmitXtVGexXFCC8j5OpzWgyoCxzEfQQOt4hot+gjHSZZOhoLraabIEQU3EEMT70HgHl44m3KcNqUm+2SCVt8vX6E1dDdRMyzTcSCXBhRSImc6o9HkW7589Pz3cpAD8CBL3oXKkj1Ze+00xxZh+DNUMHF9SQKdEL2+en7lmNmFRmmm6jVXhGl4SchF0fcrjbnEWeQ008SSs8RZuC5fjIbWW6xm8ebCYdovlg8g+gXwsu0wmCVGbgAAAABJRU5ErkJggg=="
                  alt="search"
                />
              </SearchA>
            </MainHeaderMiddleContainer>
          </MainHeaderMiddle>
          <MainHeaderRight>
            <HeaderRightA>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAAAXNSR0IArs4c6QAAA59JREFUaAXtmU1S2zAUxyWnDaawSJfAJj1BzddMl2TXpblBQg9QOAFwAth2QZ0bQJddkWVn+GiOQDfADnemfIROrP6fx8o4Tkw86AnSTjWTSHqSpZ/+fnpyHCmS5HletVQqbaLq41PR9jHKm91ud7vdbp8Rk6SvhYWFupRyB8VxBCZEnUKl1Mbp6WlTJkp/R8u4Q/fgofx8aW5ujpR+p61/Qe46jlORi4uLKgNLvrQBXwoz9meppvZePQ0wAA7o1+MCrUEBX0HguNJ1yp10hcrjBp3HNACeXci41v+DF7kzt4FbpU+RvqP6PJniv4KXHg6P/cnG3dkoqCLtL4p0Mu1zu+fWAR3gdK6ZjqWvt6749Z67paQKMGELarf0xKa5NcWvAlEpi/KOVKpOkFC7YQqbvt4KOEFPqIlDTOTFk0mxy+XbGp4dnDahoxyC1g9tYUd0tvWEXDkr+HVQ9qWS5M8aWgglWq50vVuyJqkruuF043db1x+Ts4Hf7E2sA5KeNPuTFD4iip8ynuFXwGqq/qgiCziUDgBdL0DQ6sjO6uuGCAv0fbCLMThOwpUoEj+UELEfS6HeQtG0wjEAQmJzqnHPFlmMwZPY3NLy3HyOo4muxjn8vvFqrdPsMxpWjMHT89PmhMuspGxhJKPa9JrZRkyN1yuynZwUu6FsenO24c9vTKNHjzRTYAMvR+46xq7S+OTPgK5xbEIab1hicRV6VEXI+xhPoMTG1Nr97rDJOG0s4JGINiVCCZReBfQBJ2DeWMbgFA6hthdvQsPTMA9ymN0YXESi2nHs+rMV8MkPd81hA9u2sUUV26DZ8f8dcHprlF3dc9eHMQ0ojlddO8M6Phd88votfSLHKPTucB8lnwGseXJyMvLpb2lpicIn/UIySQd4Y+vEj6MmoyTX1kmEp7hbxOwcHR21ocBIpQouzIerHdqEJ1Zijn2c/prAKuYBx3Fce5bgyT3miZVElPRlkpaXl70oishns9EoxEQ1Usdk/LxrB6JKXsc8e3zbAIj2LGCFFkQLy7vWxG6suJ48CVukfBa090+Z7suRs4ETzAPwgjaV9k8O8BLHIHqMy8vLu4uLi0+zs7NV2PqUx7tDf2Zm5ifav+n+JjkruAYB3Jcc+Pf4e7Jyfn7+Vfd9bG68OfMmplMUKm9n2+EyfXci2160bg2cAI6Pj7cYD7e+NVkFp5loQ9qAtw6u4eE2FOtDqnOkJwEnULhNi05SFFng/wBaR0Y/O/3CZQAAAABJRU5ErkJggg=="
                alt="talk"
              />
              번개톡
            </HeaderRightA>
            <HeaderRightA
              onClick={() => {
                navigate("/myshop");
              }}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAAAXNSR0IArs4c6QAABCNJREFUaAXtWUtS20AQtWxXJSEbZ8XWuYH4rcEnwNzALg6Q5AQJy6yAE1icIOYEmDWf6AbRispSqwSqAOU91QwetUbWSAFjqpgq10z39OdNT89P9hqPVNbW1vowtY2fr36m5RAEf8cXFxdjs6Nu26urqPVWV1cHnud9Bd3VvJI6SpJk7/LyMiiRm9ldG/jGxoZ/f38/gnVGuE4Jm83m8OzsjDNRudQCrkCfwFunssesQgzwvTrgKwMvAR0jbQKkwinqmBjR7qC9iXoA0jbQWuArAfd9v9NqtX5ZAMQAxrw9QF9hwXr4jEFwPcgBxHd3dx/DMEwHW2jA6Gga7dImQO9DSDplrvbKQNM4ZSiLZkjaKAwIbTsX54gj2l0VbdN45UhRuWjmVNQj00FR2zniAM0pzhRM+06V6dXK1KGupnVt86H7ZO0MHIp9oRycn59PBM+ZVLqBUJA+RPeUdAK+vr6+BRWZ28dTM7Vb0kZH+So16AQcB40vLT3G0W2zYfMlfZN2Ao6dQEZ7YjNWk5exZfFlNdu2cisw/4ze7DeSise+1wiXhjdfKrjJif43cAV6K2d5FiOZ1enW55QqyLtYmJvmfNKQC0yIWsisztQWRC2+LAbcczwU2h3eWcjzmt4YVSz6Z5Gx0mkoGx1TGDkemnRR2ynitv0akflEo++G1xHSZa/IQY4P2VQHHdqGKWPzZfbrthNwJRxoJVUPdNSXdm8OksQrBU8ZylJf6Q6ULV0FulFWOwPHEX0kjSFiI947yH+/e/0NMj1EfyzlyGMfZdhHHepKOZsPKaNp50sWFfCu/IGqr5VVHeJy1JN3lr+jt93rxnX8YZjNf3XBOoGuL+yMcSDtCF4hWQk4nPKG+BPW0igbVmO0h7aT0JDhwDloRjqnj8GvYPCRKT+rXQk4DfEugUcDI2YrfAgfcme4vb2NKNBut7tICx9pwMXcJU8WppHrotS6lYFTUb3sczmqjVapMdBhnRd/LeAExl0BkWTOd0nXKBFmZqfOQ5m+WjUcpipXV1e/l5eXj5DzN2D4+L11tMVHxHfkNCMdOerkxGpH3LTEnQLR44ehTfC38MstPvAmSItTzFIgdyD0LU7hInZ9FCwO6lckxRGYmePMXezDXHhzLzgHsBSKPxBZgat9mgfGs4A2ohTyQLPt8xngam/mwfLcgA3saZNfyzJfdh+AK9A8yuVWJo08Fx0D/MOX3RR4CegYSMM5o+WM2wL4AD59LKu7sRTkhYlfYIM5g07dFfzToe/xK17Bhcl6x573AIru7ryYNXFMbwtA/AKbexgImbmQ3A6JBc5i0yEx8+nWF8zDWfunKTuPNrEA6KHw1be9OSdCaBHIHCYb8EUAmsGgX1Mm80UAR7pEJmi2XwRwCfoVuC0iT817TZWnjrC0/2Ij/g8RGqgJ9UrG3gAAAABJRU5ErkJggg=="
                alt="mystore"
              />
              내상점
            </HeaderRightA>
            <HeaderRightA
              onClick={() => {
                navigate("/products/new");
              }}
            >
              <img
                src="data:image/png;base64,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"
                alt="판매하기"
              />
              판매하기
            </HeaderRightA>
          </MainHeaderRight>
        </MainHeaderTop>
        <MainHeaderBottom>
          <Hambuger>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAAAXNSR0IArs4c6QAAAExJREFUWAnt1sEJACAMA0DrJt1/SAVXyKfI9V8Il0+qu88afHtwthdNwOkNyUeAAAECvwuUNRNWbM2EgN4JECBAgEAoYM2EgMuaSQUv1d0EPE4sEMMAAAAASUVORK5CYII="
              alt="menu"
            />
          </Hambuger>
          <SellerInfoA>
            <a
              href="https://seller.bunjang.co.kr/intro"
              target="_blank"
              rel="noreferrer"
            >
              번개장터 판매자센터
            </a>
            <img
              src="data:image/png;base64,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"
              alt="arrowRight"
            />
          </SellerInfoA>
        </MainHeaderBottom>
      </MainHeaderContainer>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 35px;
  background: rgb(255, 255, 255);
  z-index: 10;
  border-bottom: 1px solid rgb(238, 238, 238);
  top: 0;
  left: 0;
`;
const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
`;
const MainHeaderTop = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 40px;
`;
const LogoA = styled.a`
  margin-right: 100px;
  width: 136px;
  display: flex;
  align-items: center;
  img {
    vertical-align: bottom;
  }
`;
const MainHeaderMiddle = styled.div`
  border: 2px solid rgb(247, 47, 51);
  width: 460px;
  height: 40px;
  box-sizing: border-box;
  position: relative;
`;
const MainHeaderMiddleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  box-sizing: border-box;
  input {
    color: rgb(102, 102, 102);
    flex-grow: 1;
    appearance: none;
    border: none;
    &:hover,
    :focus {
      outline: none;
    }
  }
`;
const SearchA = styled.a`
  color: rgb(33, 33, 33);
  text-decoration: none;
  cursor: pointer;
  img {
    vertical-align: bottom;
    width: 16px;
    height: 16px;
  }
`;
const MainHeaderRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
  font-size: 13px;
`;
const HeaderRightA = styled.a`
  margin-left: 30px;
  display: flex;
  align-items: center;
  position: relative;
  a {
    font-weight: 700;
  }
  img {
    width: 23px;
    height: 24px;
    margin-right: 5px;
  }
  &::after {
    content: "";
    width: 1px;
    height: 10px;
    border-right: 1px solid rgb(204, 204, 204);
    position: absolute;
    top: 8px;
    right: -15px;
  }
`;
const MainHeaderBottom = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;
const Hambuger = styled.div`
  margin-right: 20px;
  position: relative;
  img {
    width: 20px;
    height: 16px;
  }
`;
const SellerInfoA = styled.a`
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
  margin: 10px;
  line-height: 1.5;
  height: 21px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;

  img {
    width: 72px;
    height: 26px;
    margin-left: 5px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: rgb(33, 33, 33);
    font-weight: 900;
    font-size: 13px;
  }
`;

export default Header2;
