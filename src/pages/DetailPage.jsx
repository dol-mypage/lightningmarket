import React from 'react'
import black from "../img/black.jpg";
import styled from 'styled-components'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import blog from '../img/blog.png'
import { useEffect } from 'react';
import '../App.css'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { _getDetails } from '../redux/modules/PostSlice';

const DetailPage = () => {
    const dispatch=useDispatch();
    // const posts = useSelector((state) => state.product)
    // console.log(useSelector((state)=>state))

    useEffect(() => {
        setTimeout(() =>{dispatch(_getDetails(id));},1000)
    }, [dispatch]);
    //   새로고침시 화면 안뜸
    // let postt = posts?.find((post) => {

    //     return String(post.id) === id;
    // });
    const {id} =useParams();
    console.log(id)

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
                {/* {fileImage.map((image,id) => (
                  <div key={id}>
                      <SwiperSlide><Img alt={`${image}-${id}`} src={image}/></SwiperSlide>
                  </div>
                  ))} */}
            </Swiper>
            </ImgCover>  
            <div style={{width:"100%",paddingRight:"20px"}}>
                <div style={{borderBottom:"1px solid green",}}>
                    <h2>피파 추석 집 버닝 싸게 해드립니다 하루5000원</h2>
                    <p style={{fontSize:"45px",margin:"25px 0px 25px 0px"}}>16,000 
                    <span style={{fontSize:"30px", marginRight:"10px"}}>원</span>
                    <img alt='' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDYwIDI4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzU2LjAwMDAwMCwgLTI2OS4wMDAwMDApIHRyYW5zbGF0ZSgyNzU2LjAwMDAwMCwgMjY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjI3LjQyOSIgZmlsbD0iI0Q4MEMxOCIgcng9IjIiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNS44MTcgNS4xNDdsLS45NiA3LjgyNGgzLjk4NWMuMDc0IDAgLjExMy4wODguMDYyLjE0MkwxMC4yOSAyMi4zNWMtLjA1Ni4wNi0uMTU2LjAxMy0uMTQ2LS4wNjhsLjk2LTcuODI0SDcuMTJjLS4wNzUgMC0uMTEzLS4wODktLjA2Mi0uMTQzTDE1LjY3IDUuMDhjLjA1Ni0uMDYuMTU2LS4wMTMuMTQ2LjA2OHpNMzYuMDUgNi4zNnYxNC43MjZoLTIuMjRWNi4zNTloMi4yNHptMTQuNDgxIDB2MTQuNzI2aC0yLjMwNlY2LjM1OWgyLjMwNnptLTE3LjU5OC4wODF2MTQuMzY2aC0yLjIwOHYtNi44NTVoLTEuMzN2LTIuMTY1aDEuMzNWNi40NGgyLjIwOHptOS4yNTMtLjAzM2MuNjA2IDAgMS4xNjEuMDg1IDEuNjY1LjI1NS41MDIuMTY5LjkzOC40MjggMS4zMDYuNzc5LjM2OC4zNS42Ni43ODYuODc3IDEuMzEyLjIxNi41MjQuMzQgMS4xMzcuMzczIDEuODM2LjAyMi40Ny4wMzguOTIxLjA0OSAxLjM1NC4wMS40My4wMTYuODU4LjAxNiAxLjI3OCAwIC40MjItLjAwNS44NDUtLjAxNiAxLjI3LS4wMTEuNDI4LS4wMjcuODctLjA0OSAxLjMzLS4wMzIuNzEtLjE1NyAxLjMyNS0uMzczIDEuODQ0LS4yMTcuNTItLjUwOS45NTUtLjg3NyAxLjMwNC0uMzY4LjM1LS44MDQuNjEtMS4zMDYuNzgtLjUwNC4xNy0xLjA1OS4yNTQtMS42NjUuMjU0LTEuMjIzIDAtMi4yMTMtLjM0NS0yLjk3LTEuMDM0LS43NTgtLjY4OC0xLjE3NS0xLjczOC0xLjI1LTMuMTQ4LS4wMjItLjQ3LS4wNDEtLjkxOC0uMDU3LTEuMzQ1LS4wMTctLjQyNi0uMDI1LS44NS0uMDI1LTEuMjcgMC0uNDIxLjAwOC0uODQ2LjAyNS0xLjI3My4wMTYtLjQyNS4wMzUtLjg3NC4wNTctMS4zNDQuMDc1LTEuNDEuNDkyLTIuNDYgMS4yNS0zLjE0OC43NTctLjY5IDEuNzQ3LTEuMDM0IDIuOTctMS4wMzR6bS0xMi4xNDMuMzEydjIuMDM0aC0uOTFsLS4wMjkgOC43IDEuMDUzLS4wNDF2MmwtNy42NjIuMzI5di0yLjAzNGwxLjA3LS4wNDEtLjAzLTguOTEzaC0uOTFWNi43MTloNy40MTh6TTQyLjE4NiA4LjQ0Yy0uMjgxIDAtLjUzMy4wNDYtLjc1NS4xNC0uMjIxLjA5Mi0uNDE0LjI0NS0uNTc2LjQ1OS0uMTYyLjIxMi0uMjkyLjQ5NC0uMzkuODQzLS4wOTcuMzUxLS4xNjIuNzg4LS4xOTQgMS4zMTQtLjA0My42NDQtLjA2NSAxLjMxNC0uMDY1IDIuMDA4cy4wMjIgMS4zNjQuMDY1IDIuMDA5Yy4wMzIuNTI0LjA5Ny45NjIuMTk0IDEuMzEyLjA5OC4zNS4yMjguNjMxLjM5Ljg0NS4xNjIuMjEzLjM1NS4zNjUuNTc2LjQ1OS4yMjIuMDkzLjQ3NC4xMzkuNzU1LjEzOXMuNTMzLS4wNDYuNzU1LS4xNGMuMjIyLS4wOTMuNDE0LS4yNDUuNTc3LS40NTguMTYyLS4yMTQuMjkyLS40OTYuMzktLjg0NS4wOTYtLjM1LjE2MS0uNzg4LjE5NC0xLjMxMi4wNDMtLjY0NS4wNjUtMS4zMTIuMDY1LTIgMC0uNjktLjAyMi0xLjM2Mi0uMDY1LTIuMDE3LS4wMzMtLjUyNi0uMDk4LS45NjMtLjE5NC0xLjMxNC0uMDk4LS4zNS0uMjI4LS42MzEtLjM5LS44NDMtLjE2My0uMjE0LS4zNTUtLjM2Ny0uNTc3LS40Ni0uMjIyLS4wOTMtLjQ3NC0uMTQtLjc1NS0uMTR6bS0xNS4yNDUuMzEyaC0xLjIxNGwuMDI5IDguODI4IDEuMTU3LS4wNDQuMDI4LTguNzg0eiIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'/>
                    </p>
                </div>
                <ul>  
                    <ListTitle>
                        <SpanTitle>상품상태</SpanTitle>
                        <span style={{color:"black"}}>중고</span>
                    </ListTitle>
                    <ListTitle>
                        <SpanTitle>교환여부</SpanTitle>
                        <span style={{color:"black"}}>교환불가능</span>
                    </ListTitle>
                    <ListTitle>
                        <SpanTitle>배송비ㅤ</SpanTitle>
                        <span style={{color:"rgb(110, 71, 238)"}}>배송비 별도</span>
                    </ListTitle>
                    <ListTitle>
                        <SpanTitle>거래지역</SpanTitle>
                        <span style={{color:"black"}}>☑전국</span>
                    </ListTitle>
                </ul>
                {/* {posts.filter((post) => {
                    return post.nickname === nickname})
                ?<Button>
                    <Jimbut>❤찜 5</Jimbut>
                    <Bunbut>삭제하기</Bunbut>
                    <Buybut>수정하기</Buybut>
                </Button>
                :
                <Button>
                    <Jimbut>❤찜 5</Jimbut>
                    <Bunbut>번개톡</Bunbut>
                    <Buybut>바로구매</Buybut>
                </Button>
                } */}
            </div>
        </Cover>
        <BoxIcon>
            <a className='naver' href='https://share.naver.com/web/shareView?url=https%3A%2F%2Fm.bunjang.co.kr%2Fproducts%2F198796440&title=%ED%94%BC%ED%8C%8C%20%EC%B6%94%EC%84%9D%20%EC%A7%91%20%EB%B2%84%EB%8B%9D%20%EC%8B%B8%EA%B2%8C%20%ED%95%B4%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4%20%ED%95%98%EB%A3%A85000%EC%9B%90'>
             <img alt='' src={blog} style={{ height:"16px"}}/>
            </a>
            <a className='facebook' href='https://www.facebook.com/login.php?skip_api_login=1&api_key=1515207441905975&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv8.0%2Fdialog%2Fshare%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df3cf5994a4d344%2526domain%253Dm.bunjang.co.kr%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fm.bunjang.co.kr%25252Ff226bfce06508%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df157892c7e54354%2526domain%253Dm.bunjang.co.kr%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fm.bunjang.co.kr%25252Ff226bfce06508%2526relation%253Dopener%2526frame%253Df1ce5a63ba2af6%2526result%253D%252522xxRESULTTOKENxx%252522%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fstuv4.app.goo.gl%252FTCJoK%26client_id%3D1515207441905975%26ret%3Dlogin%26sdk%3Djoey%26fallback_redirect_uri%3Dhttps%253A%252F%252Fm.bunjang.co.kr%252Fproducts%252F198796440&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df157892c7e54354%26domain%3Dm.bunjang.co.kr%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fm.bunjang.co.kr%252Ff226bfce06508%26relation%3Dopener%26frame%3Df1ce5a63ba2af6%26result%3D%257B%2522error_code%2522%253A4201%252C%2522error_message%2522%253A%2522User%2Bcanceled%2Bthe%2BDialog%2Bflow%2522%257D%26error_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%26e2e%3D%257B%257D&display=popup&locale=en_US'>
             <img alt='' style={{ height:"16px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAAXNSR0IArs4c6QAAALRJREFUOBFjZMAD/v//bweUDgNiWyBWAmIeICYMgBr5gHgPEBMEWE0D6tpBUCdUAYYBQHFXYjWD1DFhmMDAkIRFjHghoKHP8LjgIFBOE69peDSDpHTRNTOiC4BUoYsh8ZkYGRlR5LGFAZJ6VCa6ZpAsIwEbUU1gYDiLJnCdBU2AENcYXQFJXkDXDOIPvAGgMDBBc9oZND4yNx2ZA2S/JikdAKMRQ/3Ah8GoCwZDShyNhcEQCwBSL924weeuygAAAABJRU5ErkJggg=='/>
            </a>
            <spna className='twitter'>
                <img alt='' style={{ height:"16px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAAAXNSR0IArs4c6QAAAmVJREFUSA21l8tLVFEYwOemhWKLEh/4yAIVkcCVrkJolbVxESiubdUmyJaC4GZ0YVSzSRAEQfAfaKErewhpC8VAxdcqy1epKPiW8ffd5lzOHefO3OPM/eDH953vfI/juWfOvYZCGZJoNGrBC/gCO3AI89AHhfFt8DXCLduPcRNexwf5HZNbBV/BS7aYaIFqeAXf4b1Tn8FzEHnrOH0a5NyGFUk2kCVi7zotGHRryR+xs53JFAaxA1quH/MzQZXQCk/s8hgfQJcZBg0peoeIKYILPdGHvRmL+Yb+/4divEmQKIUjcMdrIcw1J8jz45ogKN+py6AuSdYRcyPwFLKcJAzG7WAq0jxH1bG3wLKsnzjHcDapCU1LcFuMdeKmsJdgGUrBVGbpd3wlicKlIA2Cli69+Q0Z0LEDJRMROIAgZUMvrn5uv3Ea3wF6IQP7jx5ryYAdKEGtQq6MA5QLahdyBnZVD/sR4FjH0aecAeofenPpYy8g1rAH/SlmB6VGkxbmUWRBGPYg03JKwXvxC9B3QOYqQA5kGFyHhXG6MsT2/4ovYh9C5WSFctMtQLXyZUjL4athAXLQXeLaAQIk8CWcuKLSH4QTNfcsy07ISyZT50A+VFzvEM/G+gRJ+dALk7AP15Ftksr1usY2BWpAFmEqayQ8NG6oEkh+AO9APi5NZZGE+6pWMi1fsrUE5IF8oxVAHTwG+SIyfXZRcoahg0P3F51aWIC8hvvhDNKRaZIfpe7oEUFyGXTCKviVfwQOwjNw/aQ92lxxuy4iNUsxuYgaoR6KQf6xkDtCbke5KUXPwThbfY6+tlwCs6a6dPJWGwwAAAAASUVORK5CYII='/>
            </spna>
      </BoxIcon>
      <BoxDesc>
            <Desc>
                <Goods>상품정보</Goods>
                <Content>
                    <p>집 버닝만 해드리고 하루에 5천원 받습니다</p>
                </Content>
                <Namma>
                    <Location>
                        <LocTitle>
                            <img alt='' style={{height:"19px",marginRight:"6px"}}src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAAAXNSR0IArs4c6QAAA6xJREFUWAm1l01IVFEUx51xNAtxIcEENuQIrqTxO8OEmj5IAncVUS2E2kS0axO4C5KiFi0lXIh9QBC1kKgwclNGjaNOSUEapVRiUSHoTOo4/c743vjem/vGp8xcuHPu+Z//Of9778y9740rz0EbGxsrjsViQait9JpEIuF1uVzbGCfo0/jT2GGwx6WlpQN+vz+Gn7G5MkXD4fAOil6C047dlImrxxCfg9tVUFBwtbq6ekbHrVYpzAoLo9FoJ+QL9AJrkkN/3u12d9bW1l5hMsvWnDTh4eHh8uXl5fvMutFK3qD/jLxTDQ0Nv4z5JuHR0VH/4uLiKwjy/WWtseJPLKTZKO7Wq4dCoa1LS0tP8bMqKvURrcT0TU1NbRZfWkqYWXVrhJVI9j+bZmZmbuplk1s9NDR0GNEnOpgrKz8ydBrZ8rBHRHCur0MsCvc1Pazl1GF301PbqOFpBh3Z4Rv0oIvVBgBG01hqYKCwsPBMIBD4bAxHIpGKhYWFbrB9RtxuzDEr9yB6zI5gwV/U19cfYLvktjI1mQh19rOI5wSCpqDC4bgelaXvUcRMEGJzAO0qUZ2oxdrx53XMzsI9KMJldgQDPsgPYtLgK4fCoeigMmgA2R2fCG83YMohxCFlQAHCDSlgE8Tkytx8yDZmbHCKMxIMQSdcJueWFU8Y8pRDiA3KgAJ0yJ1wJMwqGrlSWxQ6Jkg4wjWBamfCzQzfqmOrqGwNXo/c56uoeaTFejSuOWjxmNx7KXiHwYIlpnIr4I1xVo9TPF8nyFgwiYFV6LidhZfgJaFXv6vvUeCEHVmBy7UZ0fAAds3rUq+BcD8X0SFZcR5XWJcecGhFqEnrjkW12rfEJoV5PRlgJg+1QM4MGqG6uroHKWEZsNXnCfzNmWpe3iL1z9LjJmGuux+AF3MlTO1rrDb1FExutS5GQB5tj3Q/WxbRSElJyWVjPZOwBLxe70mI8sKXrTaZn59/pLKy8p+xYJqwz+eLFhUVtUH6aCRuZMwC/tBba2pqvlnz04SFUFVV9Zsj1krSd2vCOvwYNdo4sx9UOUphIfJ9f8XsRXxclbgGNiuiHNOXdjxbYUlgtuMINzN8Y1dAgU+BtTDxfkUsBWUUFhYFfmKCTKAvlWU/kDfPJo7mO3vKSiR5V69Fkrg8DPj32IHtwE2+FhvzmFivx+M5xz/ENV8sJM+xsC4yMjKyKx6P32YC8rdE2iz9HKu8m/QcfqxbWOry7N2CkRfznZzR0/yIvjBeV/sPFdozA8TD8zUAAAAASUVORK5CYII='/>
                            <spna>거래지역</spna>
                        </LocTitle>
                        <LocDesc>전국</LocDesc>
                    </Location>
                    <Location>
                        <LocTitle>
                            <img alt='' style={{height:"19px",marginRight:"6px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAANJJREFUWAntWEEKxCAMjGJ70h/4Aq/+/wm99gX9gTcVujsLe1pQoWj2kJyERCeZkNCOut9WSqHruiilRDjPtH3fyVpL3nvato1Uzvk+z5NqrTNxf942xlAIgTQqXw2ObIAJbA3auQzYenbPW8UBW7cCVvgkAXYGTK/PMcZeSNN/HEfT//8M9CpoljfgZGdAEhAGZA90GZA9MLDMHoXIGLIz0J0C+R6QPfBoyAcus08BfwL4R+cyaAXaOceF/xEqNJQKiAWrDZjAVqslGrQcrH8lmhfQ0lJsYYep+gAAAABJRU5ErkJggg=='/>
                            <span>카테고리</span>
                        </LocTitle>
                        <LocDesc>자유▷</LocDesc>
                    </Location>
                    <Location>
                        <LocTitle>
                            <img alt='' style={{height:"19px",marginRight:"6px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAAAAXNSR0IArs4c6QAAAbpJREFUSA3tVzFSwkAU3c2EggKK1BxAoRAmXIKjYAkztsYDaCk34Ara6QEIVKAdDWoFDQUFDPF9hgxZJOEFRhvzZ3aS3f/ef5v3N0zQKmX0er0LrfWD0IIgaNXr9fc0JTQLHg6HzmKxuAX+GsPe8la4Pubz+btKpTLbriVejgriKezBYNBcr9ceKjkx1WaWZXm1Wq2Dp5dNxEaiYL/fb0DwHuMytkIkAbE3TFuu6z5Hlo3bg4K+74uACDUMNDmB8BOgbQjLBowwBLd98oBoYoR9MggpJmJtB/31ov3dCJJ9SqFlQI3+6rR9MkqlmEh/Mdoa71XA8nK5nCqVSqpQKGwo8/lcTSYTtVwu2RJ8n0SsXC4r29611nEcVSwW1Wg0okUtdmvyZFGxkCdrkmODFgxtPFQ4KbePpwX3iafOaUE5IHGRlNvn0IJyGlernz+TsiY5NnZH7ghDjr6cxj97LWQ/Ijoej49sLTlNW5pchs9mgrxXJDKzlDSKh2WW8l6RyMxS0ige9j8s/eINOQ+JD+FPsfTlvDI8G38pXi18V96AMuVpJyOnomVVq9UP3FyhTBfjN+yVml3REK1volCeXrtQ40gAAAAASUVORK5CYII='/>
                            <span>상품태그</span>
                        </LocTitle>
                        <LocDesc>#아무거나 #자유로운 #좋은하루</LocDesc>
                    </Location>
                </Namma>
            </Desc>
            <MyStore>
                <Goods>상점정보</Goods>
                <Store>
                    <Store1>
                        <AHoue href='/shop/{id}/products'>
                            <img alt='' style={{height:"48px"}} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbD0iI0ZBRkFGQSIgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIi8+CiAgICAgICAgPHBhdGggZD0iTTM2LjIxNiA0MS42ODNjLjI0OC0xLjkzMS40OTgtMy44NjIuNzUtNS43OTRoNi43OWwtLjI4MyA1LjUzN2MwIC4wMTcuMDA3LjAzNC4wMDcuMDUxLS4wMDIuMDEtLjAwMi4wMi0uMDAyLjAzLS4wOTggMS44NzYtMS44OTcgMy4zOTItNC4wMzUgMy4zOTItMS4wNjYgMC0yLjAxOC0uMzktMi42MTUtMS4wNzItLjUxLS41ODUtLjcyMi0xLjMyNS0uNjEyLTIuMTQ0em04Ljg4OCA0LjA3OGMxLjIyNCAxLjI4OSAzLjAwOSAyLjAyOCA0Ljg5IDIuMDI4IDEuODkgMCAzLjY3NC0uNzQgNC45LTIuMDMzLjEwNy0uMTEyLjIwNy0uMjI4LjMwNC0uMzQ1IDEuMjggMS40NDcgMy4yMTcgMi4zNzggNS4zNSAyLjM3OC4xMTIgMCAuMjE2LS4wMjcuMzI4LS4wMzJWNjMuNkgzOS4xMTVWNDcuNzU3Yy4xMTIuMDA1LjIxNS4wMzIuMzI4LjAzMiAyLjEzMyAwIDQuMDcxLS45MzEgNS4zNTEtMi4zOC4wOTkuMTIxLjIuMjM4LjMxLjM1MnptMS41NDUtOS44NzJoNi42OThsLjI4MiA1LjYxOWMwIC4wMTUtLjAwNy4wMjctLjAwNy4wNGwuMDA0LjA4NmEyLjkzOSAyLjkzOSAwIDAgMS0uODI2IDIuMTMyYy0xLjM2NyAxLjQ0LTQuMjMzIDEuNDQxLTUuNjA0LjAwM2EyLjk1IDIuOTUgMCAwIDEtLjgzLTIuMTQybC4wMDQtLjA3OGMwLS4wMTYtLjAwOC0uMDMtLjAwOC0uMDQ4bC4yODctNS42MTJ6bTE2LjM3NiAwYy4yNTIgMS45MzMuNTAyIDMuODY1Ljc1MyA1LjgwNC4xMDkuODEtLjEwNCAxLjU0Ny0uNjE0IDIuMTMyLS41OTYuNjgzLTEuNTUgMS4wNzQtMi42MTYgMS4wNzQtMi4xMzcgMC0zLjkzMi0xLjUxNC00LjAzNC0zLjM4OGEuMzU5LjM1OSAwIDAgMC0uMDAzLS4wNDRjMC0uMDE1LjAwNi0uMDI3LjAwNi0uMDRsLS4yNzgtNS41MzhoNi43ODZ6TTM2LjIyNiA0Ni45NDZ2MTguMDk4YzAgLjc5OC42NDYgMS40NDUgMS40NDQgMS40NDVoMjQuNjVjLjc5OSAwIDEuNDQ1LS42NDcgMS40NDUtMS40NDVWNDYuOTQ2Yy41OS0uMzI4IDEuMTM3LS43MTkgMS41NzUtMS4yMiAxLjA2MS0xLjIxNCAxLjUyMi0yLjc4NSAxLjMwMS00LjQxLS4zLTIuMzU1LS42MDctNC43MDctLjkxOC03LjA2YTEuNDQzIDEuNDQzIDAgMCAwLTEuNDMxLTEuMjU3SDM1LjY5OWMtLjcyNCAwLTEuMzM4LjUzOC0xLjQzMSAxLjI1Ny0uMzExIDIuMzU0LS42MTcgNC43MDctLjkxNiA3LjA1LS4yMjEgMS42MzcuMjQgMy4yMDggMS4zIDQuNDIxLjQzOS41MDIuOTg0Ljg5MyAxLjU3NCAxLjIyeiIgZmlsbD0iI0NDQyIvPgogICAgPC9nPgo8L3N2Zz4K'/>
                        </AHoue>
                        <div>
                            <p style={{fontSize:"14px",margin:"4px 0px 8px"}}>한점이</p>
                            <p style={{fontSize:"13px", color:"#a0a0a0",marginRight:"17px"}}>상품5  <span style={{paddingLeft:"10px", borderLeft:"1px solid #a0a0a0" }}>팔로워0</span></p>
                        </div>
                    </Store1>
                    <StoreBut>
                        <img alt='' style={{height:"18px"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAAAXNSR0IArs4c6QAAAfZJREFUWAntVrFOAkEQ5VYjjZ9gjKWcP0BNYeIPkFjYaWHUxo6CC4GCzkpiY2dhwg+YUEBBox8gWBo+wMoGizvn4WKysLN3c3diwybHZmfem3nM7d6sV0g4ms3mQRiGpwQ/pGdX0yY095RS90EQvGpbrpMXF63b7W6Nx+ObKIrOCasYfOh53l2pVLquVqtfDMZqbjQaERw0W7VwCWfBIG40Gj2RuAsyuLAKGGDBmZFz+nElLaBylKciyFXRHAHFDWUFYs/p1+qOsOAFB9wFc+olK1AfCNbvyKg01wFJ7nIJwGlNO7JwjZybxspczD8lpjXZaok7P60cnfO7KsjFWqndVcEJKfFTqgHXGNx3bl45zu+qYM/IIFtk4RqZWIFoX4QMDXSyRai5ydAxKFYgeivaVwx/yQ1Onn2ZFYjM6K009ZdU8Ia+5vAIoccpEI3f9/0jqkqH4rpeNy4LHWCll4U4vdYbhI30X9ctm5a1TVKB31dMtxDVarUuqdGfUIB9erYlgSzYT7K90SfnoV6v39Iede1hC/3HNBPYbrf3ptPpI5nKLDKb47lYLB7XarV3aRjchNUfi4OmMnIgl1TgBo0rIp5JiSnwO8Ph8GMwGLxIuLhcYs+tZKTJhZLjQKxqiHNBYNbTKvlz4lziTStRkwd2LTBrFb8B8aSntyo1wCwAAAAASUVORK5CYII='/>
                        <span>팔로우</span>    
                    </StoreBut>
                    <StoreImg>
                        <img alt='' src={black} style={{height:"95px"}}/>
                        <img alt='' src={blog} style={{height:"95px"}}/>
                    </StoreImg>
                    <Store2><a href="www.naver.com" style={{textDecoration: "none", color:"black",fontSize:"13px"}}>상품 더보기 ▷</a></Store2>
                    <Goods2>상점후기</Goods2>
                    <Goods3>
                        <p style={{width:"150px"}}>등록된 후기가 없습니다.첫 후기를 등록해보세요!</p>
                        <Hoogi>후기작성</Hoogi>
                    </Goods3>
                </Store>
                <ButtonSun>
                    <Light>번개톡</Light>
                    <BuyNow>바로구매</BuyNow>
                 </ButtonSun>
            </MyStore>
      </BoxDesc>
      </Box>
    </div>
  )
}
const Box = styled.div`
    width:100%;
    padding-bottom:50px;
    
`
const Cover = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: flex-start;
    /* background: rgb(249, 249, 249); */
    padding-top: 40px;
    width:1100px;
    margin: 0 auto;
    margin-bottom:60px;
`
const ImgCover = styled.div`
    margin-right: 40px;
    flex-shrink: 0;
    width: 500px;
    height: 500px;
    justify-content:flex-start;
    /* padding-right:200px; */
`
const Img = styled.img`
    border: 1px solid rgb(238, 238, 238);
    position: relative;
    width: 100%;
    height: 100%;
`
const SpanTitle = styled.span`
    margin-right:20px;
    width: 100px;
`
const ListTitle = styled.li`
    color:#ABB2B9;
    margin-bottom: 20px;
    
`
const BoxIcon =styled.div`
    height: 50px;
    border-bottom: 1px solid rgb(33, 33, 33);
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    width:1100px;
    margin: 0 auto;
    padding-right:40px;
`
const Button = styled.div`
    width: 560px;
    height: 56px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top:30px;
`
const Jimbut = styled.button`
    font-weight: 600;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    align-items: center;
    background: rgb(204, 204, 204);
    border:1px solid rgb(204, 204, 204);
    color:rgb(255, 255, 255);
    cursor: pointer;
`
const Bunbut = styled.button`
    font-weight: 600;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    align-items: center;
    background: rgb(243, 150, 20);
    color:rgb(255, 255, 255);
    border:1px solid rgb(243, 150, 20);
    cursor: pointer;
`
const Buybut = styled.button`
    font-weight: 600;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    align-items: center;
    background: rgb(247, 0, 0);
    border:1px solid rgb(223, 0, 0);
    color:rgb(255, 255, 255);
    cursor: pointer;
`
const BoxDesc = styled.div`
    margin: 0 auto;
    width:1100px;
    display: flex;
    
`
const Desc = styled.div`
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
    padding-right:30px;
    width:770px;
    border-right:1px solid rgb(238, 238, 238);
    min-height:570px;
`
const Goods = styled.div`
    padding:48px 0px 16px;  
    font-size:18px;
    border-bottom: 1px solid rgb(238, 238, 238);
`
const Content =styled.div`
    margin:48px 0px 48px;
    width:100%;
    /* min-height:60px; */
`
const Namma = styled.div` 
    border-top: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    padding: 28px 0px 28px;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    
`
const Location =styled.div`
    /* display: flex; */
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border-right:1px solid rgb(238, 238, 238);
    align-items: center;
    text-align:center;
`
const LocTitle = styled.div`
    margin-bottom: 15px;
    font-size:14px;
    color: #a0a0a0;
    font-weight: 600px;
    font-family: "Noto Sans KR"
`
const LocDesc = styled.div`
    font-size:14px;
`
const MyStore = styled.div`
    width:330px;
    padding: 0px 30px 0px 60px;
`
const Store = styled.div`
    padding: 0px 10px;
`
const Store1 = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 25px;
`
const AHoue = styled.a`
    margin-right: 16px;
    
`
const StoreBut = styled.button`
    width:90%;
    background-color:white;
    border:1px solid #a0a0a0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 3px;
`
const StoreImg = styled.div`
    justify-content:flex-start;
    display:flex;
    margin-top: 18px;
    margin-left: 5px;
    cursor: pointer;
`
const Store2 = styled.div`
    border-bottom: 1px solid rgb(238, 238, 238);
    margin-left:3px;
    margin-top:5px;
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Goods2 = styled.div`
    padding:30px 0px 16px;  
    font-size:15px;
    border-bottom: 1px solid rgb(238, 238, 238);
    width:90%;
`
const Goods3 = styled.div`
    padding:30px 0px 16px;  
    font-size:13px;
    display:flex;
    justify-content: space-between;
`
const Hoogi = styled.button`
    height: 32px;
    width: 80px;
    background: rgb(178, 178, 178);
    color: rgb(255, 255, 255);
    border-radius: 2px;
    border: 1px solid rgb(178, 178, 178);
    margin-right:30px;
`
const ButtonSun = styled.div`
    padding:30px 0px 16px 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height:60px;
    width:100%;
`
const Light = styled.button`
    font-weight: 600;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    align-items: center;
    background: rgb(243, 150, 20);
    color:rgb(255, 255, 255);
    border:1px solid rgb(243, 150, 20);
    cursor: pointer;
    margin-left:-15px;
`
const BuyNow = styled.button`
    font-weight: 600;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    align-items: center;
    background: rgb(247, 0, 0);
    border:1px solid rgb(223, 0, 0);
    color:rgb(255, 255, 255);
    cursor: pointer;
`
export default DetailPage
