import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./modules/header";
import MainCourses from "./modules/mainCourses";
import { MainScreen } from "./modules/mainScreen";
import MyComponent from "./modules/onlineCourses";
import BestCourses from "./modules/bestCourses";
import AuthorsCourses from "./modules/authorsCourses";
import Footer from "./modules/footer";

function HomePage() {
  return (
    <>
      <Header />
      <MainScreen />
      <MainCourses />
      <MyComponent />
      <AuthorsCourses />
      <BestCourses />
      <Footer />
    </>
  );
}

function CoursePage() {
  return (
    <>
      <Header />
      <h1>COURSE PAGE</h1>
      <Footer />
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
