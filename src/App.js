import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import DetailPage from "./pages/DetailPage";

import "../src/style.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/new" element={<AddForm />} />
        <Route path="/products/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}
export default App;
