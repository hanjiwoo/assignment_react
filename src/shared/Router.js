import Chan from "pages/Chan";
import FanFan from "pages/FanFan";
import Home from "pages/Home";
import Soo from "pages/Soo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="soo" element={<Soo />}></Route>
        <Route path="chan" element={<Chan />}></Route>
        <Route path="fanfan/:id" element={<FanFan />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
