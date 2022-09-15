import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import DetailPage from "./pages/DetailPage";
import SignUp from "./pages/SignUp";
import MyShop from "./pages/MyShop";
import Update from "./pages/Update";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Search from "./pages/Search";

function App() {
  // 로그인 모달
  let [modal1, setModal1] = useState(false);
  const openModal1 = () => {
    setModal1(true);
  };
  const closeModal1 = () => {
    setModal1(false);
  };
  //회원가입 모달
  let [modal2, setModal2] = useState(false);
  const openModal2 = () => {
    setModal2(true);
  };
  const closeModal2 = () => {
    setModal2(false);
  };

  return (
    <>
      <Helmet>
        <title>번개장터</title>
      </Helmet>
      <Header1 open1={openModal1} />
      <Header2 open1={openModal1} />
      <Header3 />
      {modal1 && <Login close1={closeModal1} />}
      {modal2 && <Login open2={openModal2} />}
      {modal1 && <Home mo1={modal1} />}
      {modal2 && <Home mo2={modal2} />}
      {modal1 && <MyShop mo1={modal1} />}
      {modal2 && <SignUp close2={closeModal2} />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myshop" element={<MyShop />} />
        <Route path="/products/new" element={<AddForm />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="/products/update/:id" element={<Update />} />
        <Route path="/products/search/:title" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
