import Header from "./modules/header";
import MainCourses from "./modules/mainCourses";
import { MainScreen } from "./modules/mainScreen";
import MyComponent from "./modules/onlineCourses";
import BestCourses from "./modules/bestCourses";
import AuthorsCourses from "./modules/authorsCourses";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <MainCourses />
      <MyComponent />
      <AuthorsCourses />
      <BestCourses />
    </>
  );
}

export default App;
