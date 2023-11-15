import Header from "../../modules/header";
import MainCourses from "../../modules/mainCourses";
import { MainScreen } from "../../modules/mainScreen";
import MyComponent from "../../modules/onlineCourses";
import BestCourses from "../../modules/bestCourses";
import AuthorsCourses from "../../modules/authorsCourses";
import Footer from "../../modules/footer";

const Home = () => {
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
};

export default Home;
