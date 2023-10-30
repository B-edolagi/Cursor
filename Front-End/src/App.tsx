import Header from "./modules/header";
import MainCourses from "./modules/mainCourses";
import { MainScreen } from "./modules/mainScreen";
import MyComponent from "./modules/onlineCourses";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <MainCourses />
      <MyComponent />
    </>
  );
}

export default App;
