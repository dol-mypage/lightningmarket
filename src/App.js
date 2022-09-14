import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
// import Header3 from "./components/header/Header3";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import DetailPage from "./pages/DetailPage";
import SignUp from "./pages/SignUp";
import MyShop from "./pages/MyShop";
import { Route, Routes } from "react-router-dom";
import Update from "./pages/Update";
import { useState } from "react";

function App() {
  let [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Header1 open={openModal} />
      <Header2 />
      {/* <Header3 /> */}
      <Routes>
        <Route path="/" element={<Home mo={modalOpen} />} />
        <Route path="/login" element={<Login close={closeModal} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myshop" element={<MyShop />} />
        <Route path="/products/new" element={<AddForm />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="/products/update/:id" element={<Update />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
