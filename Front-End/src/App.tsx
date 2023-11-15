import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CoursePage from "./Pages/CoursePage";

function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

function Courses() {
  return (
    <>
      <CoursePage />
    </>
  );
}

const NotFoundPage = () => {
  return <div>404 Not Found</div>;
};

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Course" element={<CoursePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
