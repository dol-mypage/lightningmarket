import "../src/style.css";
import { Route, Routes} from "react-router-dom";
import AddForm from "./pages/AddForm";
import DetailPage from "./pages/DetailPage";

function App() {
  
  return (

    <div className="App">
{/* 백그라운드 객체가 없어도 렌더링 */}
        <Routes>
            <Route path="/products/new" element={<AddForm />} />
            <Route path="/products/:id" element={<DetailPage/>}/>
        </Routes>
    </div>
  );
}
export default App;