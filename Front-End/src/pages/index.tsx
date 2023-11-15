import { Router } from "react-router-dom";
import AuthorsCourses from "../modules/authorsCourses";
import BestCourses from "../modules/bestCourses";
import Footer from "../modules/footer";
import Header from "../modules/header";
import MainCourses from "../modules/mainCourses";
import { MainScreen } from "../modules/mainScreen";
import MyComponent from "../modules/onlineCourses";
export default function Main() {
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
