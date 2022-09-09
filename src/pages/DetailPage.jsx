import React from 'react'
import black from "../img/black.jpg";
import styled from 'styled-components'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const DetailPage = () => {
  return (
    <div>
      <Box>
        <Cover>
            <ImgCover>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                >
                <SwiperSlide><Img alt='' src={black}/></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>  
            </Swiper>
            </ImgCover>  
            <div style={{width:"100%",paddingRight:"20px"}}>
                <div style={{borderBottom:"1px solid black",}}>
                    <h1>뉴진스 민지 앨범</h1>
                    <p style={{fontSize:"45px",margin:"30px 0px 30px 0px"}}>16,000 
                    <span style={{fontSize:"30px", marginRight:"10px"}}>원</span>
                    <img alt='' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDYwIDI4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzU2LjAwMDAwMCwgLTI2OS4wMDAwMDApIHRyYW5zbGF0ZSgyNzU2LjAwMDAwMCwgMjY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3LjQyOSIgZmlsbD0iI0Q4MEMxOCIgcng9IjIiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNS44MTcgNS4xNDdsLS45NiA3LjgyNGgzLjk4NWMuMDc0IDAgLjExMy4wODguMDYyLjE0MkwxMC4yOSAyMi4zNWMtLjA1Ni4wNi0uMTU2LjAxMy0uMTQ2LS4wNjhsLjk2LTcuODI0SDcuMTJjLS4wNzUgMC0uMTEzLS4wODktLjA2Mi0uMTQzTDE1LjY3IDUuMDhjLjA1Ni0uMDYuMTU2LS4wMTMuMTQ2LjA2OHpNMzYuMDUgNi4zNnYxNC43MjZoLTIuMjRWNi4zNTloMi4yNHptMTQuNDgxIDB2MTQuNzI2aC0yLjMwNlY2LjM1OWgyLjMwNnptLTE3LjU5OC4wODF2MTQuMzY2aC0yLjIwOHYtNi44NTVoLTEuMzN2LTIuMTY1aDEuMzNWNi40NGgyLjIwOHptOS4yNTMtLjAzM2MuNjA2IDAgMS4xNjEuMDg1IDEuNjY1LjI1NS41MDIuMTY5LjkzOC40MjggMS4zMDYuNzc5LjM2OC4zNS42Ni43ODYuODc3IDEuMzEyLjIxNi41MjQuMzQgMS4xMzcuMzczIDEuODM2LjAyMi40Ny4wMzguOTIxLjA0OSAxLjM1NC4wMS40My4wMTYuODU4LjAxNiAxLjI3OCAwIC40MjItLjAwNS44NDUtLjAxNiAxLjI3LS4wMTEuNDI4LS4wMjcuODctLjA0OSAxLjMzLS4wMzIuNzEtLjE1NyAxLjMyNS0uMzczIDEuODQ0LS4yMTcuNTItLjUwOS45NTUtLjg3NyAxLjMwNC0uMzY4LjM1LS44MDQuNjEtMS4zMDYuNzgtLjUwNC4xNy0xLjA1OS4yNTQtMS42NjUuMjU0LTEuMjIzIDAtMi4yMTMtLjM0NS0yLjk3LTEuMDM0LS43NTgtLjY4OC0xLjE3NS0xLjczOC0xLjI1LTMuMTQ4LS4wMjItLjQ3LS4wNDEtLjkxOC0uMDU3LTEuMzQ1LS4wMTctLjQyNi0uMDI1LS44NS0uMDI1LTEuMjcgMC0uNDIxLjAwOC0uODQ2LjAyNS0xLjI3My4wMTYtLjQyNS4wMzUtLjg3NC4wNTctMS4zNDQuMDc1LTEuNDEuNDkyLTIuNDYgMS4yNS0zLjE0OC43NTctLjY5IDEuNzQ3LTEuMDM0IDIuOTctMS4wMzR6bS0xMi4xNDMuMzEydjIuMDM0aC0uOTFsLS4wMjkgOC43IDEuMDUzLS4wNDF2MmwtNy42NjIuMzI5di0yLjAzNGwxLjA3LS4wNDEtLjAzLTguOTEzaC0uOTFWNi43MTloNy40MTh6TTQyLjE4NiA4LjQ0Yy0uMjgxIDAtLjUzMy4wNDYtLjc1NS4xNC0uMjIxLjA5Mi0uNDE0LjI0NS0uNTc2LjQ1OS0uMTYyLjIxMi0uMjkyLjQ5NC0uMzkuODQzLS4wOTcuMzUxLS4xNjIuNzg4LS4xOTQgMS4zMTQtLjA0My42NDQtLjA2NSAxLjMxNC0uMDY1IDIuMDA4cy4wMjIgMS4zNjQuMDY1IDIuMDA5Yy4wMzIuNTI0LjA5Ny45NjIuMTk0IDEuMzEyLjA5OC4zNS4yMjguNjMxLjM5Ljg0NS4xNjIuMjEzLjM1NS4zNjUuNTc2LjQ1OS4yMjIuMDkzLjQ3NC4xMzkuNzU1LjEzOXMuNTMzLS4wNDYuNzU1LS4xNGMuMjIyLS4wOTMuNDE0LS4yNDUuNTc3LS40NTguMTYyLS4yMTQuMjkyLS40OTYuMzktLjg0NS4wOTYtLjM1LjE2MS0uNzg4LjE5NC0xLjMxMi4wNDMtLjY0NS4wNjUtMS4zMTIuMDY1LTIgMC0uNjktLjAyMi0xLjM2Mi0uMDY1LTIuMDE3LS4wMzMtLjUyNi0uMDk4LS45NjMtLjE5NC0xLjMxNC0uMDk4LS4zNS0uMjI4LS42MzEtLjM5LS44NDMtLjE2My0uMjE0LS4zNTUtLjM2Ny0uNTc3LS40Ni0uMjIyLS4wOTMtLjQ3NC0uMTQtLjc1NS0uMTR6bS0xNS4yNDUuMzEyaC0xLjIxNGwuMDI5IDguODI4IDEuMTU3LS4wNDQuMDI4LTguNzg0eiIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'/>
                    </p>
                </div>
                      {/* <div>❤ 5| 👁168 |🕛방금전</div>      */}
                <div>
                    <span>상품상태</span>
                    <span>중고</span>
                </div>
                <div>
                    <span>교환여부</span>
                    <span>교환불가능</span>
                </div>
                <div>
                    <span>배송비</span>
                    <span>배송비 별도</span>
                </div>
                <div>
                    <span>거래지역</span>
                    <span>☑전국</span>
                </div>
                <div>
                    <button>❤찜 5</button>
                    <button>번개톡</button>
                    <button>바로구매</button>
                </div>
            </div>
        </Cover>
      </Box>
    </div>
  )
}

const ImgCover = styled.div`
    margin-right: 40px;
    flex-shrink: 0;
    width: 450px;
    height: 450px;
    justify-content:flex-start;
    /* padding-right:200px; */
`
const Img = styled.img`
    border: 1px solid rgb(238, 238, 238);
    position: relative;
    width: 100%;
    height: 100%;
`
const Cover = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: flex-start;
    background: rgb(249, 249, 249);
    padding: 40px 0px 80px;
    width:1100px;
    margin: 0 auto;
    /* align-items:center; */
`
const Box = styled.div`
    width:100%;
    
`
export default DetailPage
