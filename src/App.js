import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import Home from "./Pages/Home/Home";
import "./Style/Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const location = useLocation();
  const pn = location.pathname;
  let pnstr = pn?.substring(1);
  // title
  useEffect(() => {
    if (pn === "/") {
      document.title = "hospital home";
    } else {
      document.title = pnstr;
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
