import Login from "./pages/Login";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import DetailPage from "./pages/DetailPage";
import SignUp from "./pages/SignUp";
import MyShop from "./pages/MyShop";
import Update from "./pages/Update";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Footer from "./components/Footer";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Search from "./pages/Search";

function App() {


  return (
    <>
      <Helmet>
        <title>번개장터</title>
      </Helmet>
      <Header1 />
      <Header2 />
      <Header3 />
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
