import { Link, Route, Router, Routes } from "react-router-dom";
import Main, { Course, Professor } from "./pages";
import NotFound from "./modules/notFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/prfsr-main/:id" element={<Professor />} />
      <Route path="/course" element={<Course />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
