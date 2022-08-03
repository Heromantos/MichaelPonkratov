import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Personal from "./pages/Personal";
import Endorder from "./pages/Endorder";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="personal" element={<Personal />} />
        <Route path="endorder" element={<Endorder />} />
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
