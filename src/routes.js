import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="filme/:id" element={<Filme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;