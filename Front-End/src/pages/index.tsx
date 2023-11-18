import { Router } from "react-router-dom";
import AuthorsCourses from "../modules/authorsCourses";
import BestCourses from "../modules/bestCourses";
import Footer from "../modules/footer";
import Header from "../modules/header";
import MainCourses from "../modules/mainCourses";
import { MainScreen } from "../modules/mainScreen";
import MyComponent from "../modules/onlineCourses";
import PrfsrMain from "../modules/prfsrMain";
import PrfsrCatalog from "../modules/prfsrCatalog";
import CourseMain from "../modules/CourseMain";
import CourseDescription from "../modules/CourseDescription";
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
export const Professor = () => {
  return (
    <>
      <Header />
      <PrfsrMain />
      <PrfsrCatalog />
      <Footer />
    </>
  );
};

export const Course = () => {
  return (
    <>
      <Header />
      <CourseMain />
      <CourseDescription />
      <Footer />
    </>
  );
};
