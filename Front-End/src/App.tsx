import { Link, Route, Router, Routes } from "react-router-dom";
import Main from "./pages";
import PrfsrMain from "./modules/prfsrMain";
import { useState } from "react";
import NotFound from "./modules/notFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/prfsr-main/:id" element={<PrfsrMain />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
