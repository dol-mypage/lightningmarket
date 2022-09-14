import React from 'react'
import { useDispatch } from 'react-redux'
import { _deletePost } from '../../redux/modules/PostSlice';
import styled from 'styled-components'

const DeleteModal = ({detail, close}) => {
  const dispatch = useDispatch();
  console.log(detail,close)
  return (
    <DivBack>
        <PageDel>
            <p>정말 삭제하시겠습니까?</p>
            <Button>
            <Jimbut onClick={() => {dispatch(_deletePost(detail))}}>삭제</Jimbut>
            <Bunbut onClick={() => {close(false)}}>취소</Bunbut>
            </Button>
        </PageDel>
    </DivBack>
  )
}

export default DeleteModal
const DivBack=styled.div`
    z-index:10;
    position:fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.2);
`
const PageDel = styled.div`
  font-size:17px;
  font-family: "Noto Sans KR", sans-serif;
  width: 296px;
  height: 141px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`
const Button = styled.div`
    width: 160px;
    height: 35px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: center;
    margin-top:20px;
`
const Jimbut = styled.button`
    font-weight: 600;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 16px;
    align-items: center;
    background: rgb(247, 0, 0);
    border:1px solid rgb(223, 0, 0);
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
    background: rgb(204, 204, 204);
    border:1px solid rgb(204, 204, 204);
    color:rgb(255, 255, 255);
    cursor: pointer;
`
