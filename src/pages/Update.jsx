import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { _updatePost } from '../redux/modules/PostSlice'
import './style.css'

const Update = () => {
  const {id} = useParams();
  const dispatch = useDispatch();


  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [fileImage, setFileImage] = useState([]);
  console.log(fileImage)

  // const {isLoading, error, post} = useSelector((state) => state.postSlice)
  // console.log(post)

  // useEffect(() => {
  //     dispatch(_getPost());
  //   }, [dispatch]);

  //   if (isLoading) {
  //     return <div>로딩중....</div>;
  //   }

  //   if(error) {
  //     return <div>{error.message}</div>;
  //   }

  //   const list = post.find(post => {
  //     return (post.id) === Number(id)
  // });
  
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('change')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }
  const checkOnlyOne1 = (checkThis) => {
    console.log(checkThis)
    const checkboxes = document.getElementsByName('state')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }
  
  const onChangeImg = (e) => {
      setImgUrl(e.target.files);
      const imgFiles = [...fileImage]
      for (let i = 0; i<setImgUrl.length; i++){
        const nowImageUrl = URL.createObjectURL(e.target.files[i]);
        imgFiles.push(nowImageUrl)
      }
      setFileImage(imgFiles);
  };
  const handleDeleteImage = (id) => {
    setFileImage(fileImage.filter((_,index) => index !== id))
  }

  //value를 setState해준다
  const onChangeHandler = (event, setState) => setState(event.target.value);

  const onUpdatePost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("imgUrl", fileImage);
    formData.append("price", price);
    formData.append("content", content);
    
    const payload = {
      id:id,
      data: formData
    }
    
    dispatch(_updatePost(payload))
  };


  return (
  <>
    <Box>
      <Cover>
        <Normal>
            <h2>기본정보</h2>
            <p style={{color:"rgb(255, 80, 88)",fontSize:"18px",marginLeft:"30px"}}> *필수항목</p>
        </Normal>
        <Ul>
          <LiImg>
            <ImgTitle>
              <b>상품이미지 <span style={{color:"rgb(255, 80, 88)"}}>*</span></b>
            </ImgTitle>
            <div style={{width:"100%"}}>
              <ImgBox>
                <ImgLabel>
                  <img alt='' style={{height:"40px"}} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI4LjQ3MSAzMkgzLjUzYy0uOTcxIDAtMS44OTQtLjQyMi0yLjUyOS0xLjE1N2wtLjAyNi0uMDNBNCA0IDAgMCAxIDAgMjguMTk4VjguNjA3QTQgNCAwIDAgMSAuOTc0IDUuOTlMMSA1Ljk2YTMuMzQzIDMuMzQzIDAgMCAxIDIuNTI5LTEuMTU2aDIuNTM0YTIgMiAwIDAgMCAxLjUzNy0uNzJMMTAuNC43MkEyIDIgMCAwIDEgMTEuOTM3IDBoOC4xMjZBMiAyIDAgMCAxIDIxLjYuNzJsMi44IDMuMzYzYTIgMiAwIDAgMCAxLjUzNy43MmgyLjUzNGMuOTcxIDAgMS44OTQuNDIzIDIuNTI5IDEuMTU3bC4wMjYuMDNBNCA0IDAgMCAxIDMyIDguNjA2djE5LjU5MWE0IDQgMCAwIDEtLjk3NCAyLjYxN2wtLjAyNi4wM0EzLjM0MyAzLjM0MyAwIDAgMSAyOC40NzEgMzJ6TTE2IDkuNmE4IDggMCAxIDEgMCAxNiA4IDggMCAwIDEgMC0xNnptMCAxMi44YzIuNjQ3IDAgNC44LTIuMTUzIDQuOC00LjhzLTIuMTUzLTQuOC00LjgtNC44YTQuODA1IDQuODA1IDAgMCAwLTQuOCA0LjhjMCAyLjY0NyAyLjE1MyA0LjggNC44IDQuOHoiLz4KPC9zdmc+Cg=='/>
                  <p style={{marginTop:"15px",fontSize:"17px"}}>이미지 등록</p>
                  <ImgInput
                    type="file"
                    name="imgUrl"
                    accept="image/*"
                    multiple="multiple"
                    onChange={onChangeImg}
                    id="image"
                  />  
                </ImgLabel>
                {fileImage.map((image,id) => (
                  <div key={id}>
                      <Img alt={`${image}-${id}`} src={image}/>
                      <DeleteImg onClick={() => handleDeleteImage(id)}>X</DeleteImg>
                  </div>
                ))}
              </ImgBox>
              <ImgDesc>
                <b>* 상품 이미지는 640x640에 최적화 되어 있습니다.</b>
                <p>- 상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여집니다.</p>
                <p>- 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.</p>
                <p>- 이미지를 클릭할 경우 원본 이미지를 확인할 수 있습니다.</p>
                <p>- 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.</p>
                <p>- 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.</p>
                <p>최대 지원 사이즈인 640 X 640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)</p>
              </ImgDesc>
            </div>
          </LiImg>
          <LiTilte>
              <PTitle>제목<span style={{color:"rgb(255, 80, 88)"}}>*</span></PTitle>
                  <InputTit
                      type='text'
                      name='title'
                      value={title}
                      onChange={(event) => onChangeHandler(event, setTitle)}
                      placeholder='상품 제목을 입력해주세요'
                  />  
          </LiTilte>
          <LIState>
              <PState>상태<span style={{color:"rgb(255, 80, 88)"}}>*</span></PState>
              <DivState>
                <StateInput
                    type='checkbox'
                    id='state1'
                    name='state'
                    onChange={(e) => checkOnlyOne1(e.target)}
                />
                <StateLabel for='state1'></StateLabel>
                <span style={{paddingRight:"30px"}}>중고상품</span>
                <StateInput
                    type='checkbox'
                    id='state2'
                    name='state'
                    onChange={(e) => checkOnlyOne1(e.target)}
                />
                <StateLabel for='state2'></StateLabel>
                <span>새상품</span>
              </DivState>
          </LIState>
          <LIChange>
              <PChange>교환<span style={{color:"rgb(255, 80, 88)"}}>*</span></PChange>
              <DivChange>
                <ChangeInput
                    type='checkbox'
                    id='change1'
                    name='change'
                    onChange={(e) => checkOnlyOne(e.target)}
                />
                <ChangeLabel for='change1'></ChangeLabel>
                <span style={{paddingRight:"30px"}}>교환불가</span>
                <ChangeInput
                    type='checkbox'
                    id='change2'
                    name='change'
                    onChange={(e) => checkOnlyOne(e.target)}
                />
                <ChangeLabel for='change2'></ChangeLabel>
                <span>교환가능</span>
              </DivChange>
          </LIChange>
          <LiPrice>
              <PTitle>가격<span style={{color:"rgb(255, 80, 88)"}}>*</span></PTitle>
              <DivPri>
                <InputPri
                    type='number'
                    value={price}
                    onChange={(event) => onChangeHandler(event, setPrice)}
                    placeholder='숫자만 입력해주세요'
                />
                <span style={{paddingLeft:"16px"}}>원</span>
                <CheckPri>
                    <CheckInput 
                        type='checkbox'
                        id='check'
                    />
                    <CheckLabel for='check'></CheckLabel>
                    <span style={{fontSize:"15px",cursor:"pointer"}}>배송비 포함</span>
                </CheckPri>
              </DivPri>  
          </LiPrice>
          <LiContent>
              <PContent>설명<span style={{color:"rgb(255, 80, 88)"}}>*</span></PContent>
                <DivCont>
                  <TextCont
                      type='text'
                      name='content'
                      value={content}
                      onChange={(event) => onChangeHandler(event, setContent)}
                      placeholder='여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해주세요.(10자이상)'
                  />
                  <ContBottom>
                     <span>혹시 <a href="https://m.bunjang.co.kr/customer/notice?id=607">카카오톡 ID</a>를 적으셨나요?</span>
                  </ContBottom>
                </DivCont>
          </LiContent>
          <LiTag>
              <PTag>연관태그</PTag>
              <DivTag>
                  <input
                    type="text"
                    name="Tag"
                    // value={tag}
                    // onChange={(event) => onChangeHandler(event, setTag)}
                    placeholder='연관태그를 입력해주세요.'
                  />
                  <div style={{fontSize:"15px",color:"rgb(155, 153, 169)"}}>
                      <p style={{marginBottom:"7px"}}>- 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있습니다.</p>
                      <p style={{marginBottom:"7px"}}>- 태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을 보장하지는 않습니다.</p>
                      <p style={{marginBottom:"7px"}}>- 검색 광고는 태그정보를 기준으로 노출됩니다.</p>
                      <p>- 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.</p>
                  </div>
              </DivTag>
          </LiTag>
          <LiCount>
              <PCount>수량</PCount>
              <DivCount>
                  <input
                    type="number"
                    name="count"
                    // value={count}
                    // onChange={(event) => onChangeHandler(event,setCount)}
                  />
                  <span style={{paddingLeft:"16px"}}>개</span>
              </DivCount>
          </LiCount>
        </Ul>
      </Cover>
    </Box>
    <Btnarea>
      <button onClick={onUpdatePost}>수정하기</button>
    </Btnarea>
  </>
  );
};
const Box = styled.div`
    width:100%;
    
`
const Cover = styled.div`
  /* display: flex; */
  -webkit-box-pack: center;
  justify-content: flex-start;
  /* background: rgb(249, 249, 249); */
  padding-top: 40px;
  width:1024px;
  margin: 0 auto;
  margin-bottom:60px;
`
const Normal = styled.div`
  border-bottom: 2px solid rgb(30, 29, 41);
  padding-bottom: 32px;
  width:100%;
  font-size:23px;
  display: flex;
  height:100%;
  align-items:center
`
const Ul = styled.ul`
  list-style:none;
  padding-left:0px;
`
const LiImg = styled.li`
  width:100%;
  display:flex;
  padding:32px 0px;
  border-bottom: 1px solid rgb(204, 204, 204);
`
const ImgTitle = styled.div`
  font-size:18px;
  width:10.5rem;
`
const ImgBox =styled.div`
  width:100%;
  display: flex;
  flex-wrap:wrap;
`
const ImgInput = styled.input`
  display:none;
`
const ImgLabel = styled.label`
  width: 202px;
  height: 202px;
  position: relative;
  border: 1px solid rgb(230, 229, 239);
  background: rgb(250, 250, 253);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(155, 153, 169);
  font-size: 1rem;
`
const Img = styled.img`
  width: 202px;
  height: 200px;
  font-synthesis: none;
  ::-webkit-font-smoothing{
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
  } 
`
const DeleteImg = styled.button`
  margin:-10.3px;
  position: relative;
  color:red;
  right:11.5px;
  bottom:186px;
  background-color:white;
  border:none;
`
const ImgDesc = styled.div`
  font-size:14px;
  color: #4AA4FF;
  margin: 28px 0px 0px;
`
const LiTilte = styled.li`
  padding: 38px 0px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(195, 194, 204);
`
const PTitle = styled.b`
  width:168px;
  height:48px;
  align-items:center;
  display:flex;
  justify-content:flex-start;
  font-size:18px
`
const InputTit = styled.input`
  font-size:15px;
  width:79.7%;
  border:1px solid rgb(195, 194, 204);
  color: rgb(195, 194, 204);
  padding: 0px 16px;
`
const LIState = styled.div`
  padding: 38px 0px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(195, 194, 204);
`
const PState = styled.b`
  width:168px;
  height:48px;
  align-items:center;
  display:flex;
  justify-content:flex-start;
  font-size:18px
`
const DivState = styled.div`
  font-size:16px;
`
const StateInput = styled.input.attrs({type:"checkbox"})`
  cursor: pointer;
  display:none;
`
const StateLabel =styled.label`
  display: inline-block; 
  width:20px; 
  height:20px; 
  cursor: pointer; 
  border-radius: 3px;
  margin-right:5px;
`
const LIChange = styled.div`
  padding: 38px 0px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(195, 194, 204);
`
const PChange  = styled.b`
  width:168px;
  height:48px;
  align-items:center;
  display:flex;
  justify-content:flex-start;
  font-size:18px
`
const DivChange  = styled.div`
  font-size:16px;
`
const ChangeInput = styled.input.attrs({type:"checkbox"})`
  cursor: pointer;
  display:none;
`
const ChangeLabel =styled.label`
  display: inline-block; 
  width:20px; 
  height:20px; 
  cursor: pointer; 
  border-radius: 3px;
  margin-right:5px;
 
`
const LiPrice =styled.li`
  padding: 38px 0px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(195, 194, 204);
`
const DivPri =styled.div`
  font-size:16px;
  width:75%;
  padding-bottom:20px;
`
const InputPri  = styled.input`
  font-size:15px;
  width:220px;
  height:48px;
  border:1px solid rgb(195, 194, 204);
  padding: 0px 16px;
  margin-bottom:20px;
  ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
const CheckPri =styled.div`
  font-size:16px;
`
const CheckInput = styled.input.attrs({type:"checkbox"})`
  cursor: pointer;
  display:none;
`
const CheckLabel =styled.label`
  display: inline-block; 
  width:20px; 
  height:20px; 
  cursor: pointer; 
  border-radius: 3px;
  margin-right:5px;
  
`
const LiContent = styled.div`
  padding: 38px 0px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(195, 194, 204);
`
const DivCont =styled.div`
  width:842px;
  padding-bottom:30px;
`
const PContent = styled.b`
  width:168px;
  height:48px;
  align-items:center;
  display:flex;
  justify-content:flex-start;
  font-size:18px
`
const TextCont = styled.textarea`
  width:100%;
  height:100%;
  min-height:163px;
  margin-right:16px;
  font-size:14px;
  margin-left:0px;
  resize: none;
  border: 1px solid rgb(195, 194, 204);
`
const ContBottom = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    span {
        a {
            color: rgb(155, 153, 169);
            text-decoration: underline;
        }
        font-size: 15px;
        color: rgb(155, 153, 169);
    }
`;
const Btnarea = styled.div`
    width: 100%;
    height: 150px;
    background: rgb(250, 250, 253);
    box-shadow: rgb(234 233 241) 0px -1px 0px 0px;
    padding: 20px 0px 20px;
    box-sizing: border-box;
    button {
        display: absolute;
        left: 68%;
        border:none;
        height: 60px;
        width: 10rem;
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 700;
        border-radius: 2px;
        background: rgb(255, 80, 88);
        position: relative;
    }
`
const LiTag = styled.div`
  padding: 38px 0px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(195, 194, 204);
`
const PTag = styled.b`
  width:168px;
  height:48px;
  align-items:center;
  display:flex;
  justify-content:flex-start;
  font-size:18px
`
const DivTag = styled.div`
  width:842px;
  input{
    font-size:15px;
    width:96.7%;
    height:48px;
    border:1px solid rgb(195, 194, 204);
    padding: 0px 16px;
    margin-bottom:20px;
  }
`
const LiCount = styled.div`
  padding: 38px 0px;
  display: flex;
  width: 100%;
  border-bottom: 2px solid rgb(30, 29, 41);  
`
const PCount = styled.b`
  width:168px;
  height:48px;
  align-items:center;
  display:flex;
  justify-content:flex-start;
  font-size:18px
`
const DivCount = styled.div`
  font-size:16px;
  width:75%;
  padding-bottom:40px;
  input{
    font-size:15px;
    width:220px;
    height:48px;
    border:1px solid rgb(195, 194, 204);
    padding: 0px 16px;
    margin-bottom:20px;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
  }
`
export default Update;
