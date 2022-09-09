import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState } from 'react'


const Form = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [fileImage, setFileImage] = useState("");

  const onChangeImg = (e) => {
    console.log(e.target.files);
    setImgUrl(e.target.files[0]);
  };
  //value를 setState해준다
  const onChangeHandler = (event, setState) => setState(event.target.value);

  const onAddPost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("imgUrl", imgUrl);
    formData.append("price", price);
    formData.append("content", content);
    const res = await axios.post("http://localhost:3001/posts", formData, {
      headers: {
        "Content-Type": "multipart/form",
      },
    });
    console.log(res);
    return res.data;
  };


  return (
    <div>
      <div>
        <div>상품등록</div>
        <div>
          <div>
            <div>
              <label>
                상품이미지
                <input
                  type="file"
                  name="imgUrl"
                  accept="image/*"
                  onChange={onChangeImg}
                />
              </label>
            </div>
            {/* <div>
                    <label>카테고리
                        <input 
                            type='select'
                            name='catergori'
                        />
                    </label>
                </div>
                <div>
                    <p>거래지역</p>
                    
                </div> */}

                <div>
                    <label>제목
                        <input
                            type='text'
                            name='title'
                            value={title}
                            onChange={(event) => onChangeHandler(event, setTitle)}
                            placeholder='상품 제목을 입력해주세요'
                        />
                    </label>
                </div>
                <div>
                    <label>가격
                        <input
                            type='text'
                            value={price}
                            onChange={(event) => onChangeHandler(event, setPrice)}
                            placeholder='숫자만 입력해주세요'
                        />
                    </label>
                </div>
                <div>
                    <label> 설명
                        <input
                            type='text'
                            name='content'
                            value={content}
                            onChange={(event) => onChangeHandler(event, setContent)}
                            placeholder='여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해주세요.(10자이상)'
                        />
                    </label>
                </div>
            </div>
            <div>
              <label>
                {" "}
                설명
                <input
                  type="text"
                  name="content"
                  value={content}
                  onChange={(event) => onChangeHandler(event, setContent)}
                  placeholder="여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해주세요.(10자이상)"
                />
              </label>
            </div>
          </div>
          <button onClick={onAddPost}>등록하기</button>
        </div>
      </div>
    
  );
};

export default Form;
