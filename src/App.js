import Header1 from "./components/header/Header1";
import "../src/style.css";
import { Route, Routes } from "react-router-dom";
import AddForm from "./pages/AddForm";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import Update from "./pages/Update"


function App() {
  return (
    <>
      <Header1 />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products/new" element={<AddForm />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="/products/update/:id" element={<Update/>}/>
      </Routes>
    </>
  );
}
export default App;
