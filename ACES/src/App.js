import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Calender from "./pages/Calender";
import Calender1 from "./pages/Calender1";
import Calender2 from "./pages/Calender2";
import Calender3 from "./pages/Calender3";
import Calender4 from "./pages/Calender4";
import Policies from "./pages/Policies";
import Calender5 from "./pages/Calender5";
import Calender6 from "./pages/Calender6";
import FallSchedule from "./pages/FallSchedule";
import Overview from "./pages/Overview";
import TestPrepUSAPHO from "./pages/TestPrepUSAPHO";
import ScienceUSAPHO from "./pages/ScienceUSAPHO";
import ProgrammingUSACO from "./pages/ProgrammingUSACO";
import Mathematics from "./pages/Mathematics";
import English from "./pages/English";
import AboutUs from "./pages/AboutUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/calender":
        title = "";
        metaDescription = "";
        break;
      case "/calender1":
        title = "";
        metaDescription = "";
        break;
      case "/calender2":
        title = "";
        metaDescription = "";
        break;
      case "/calender3":
        title = "";
        metaDescription = "";
        break;
      case "/calender4":
        title = "";
        metaDescription = "";
        break;
      case "/policies":
        title = "";
        metaDescription = "";
        break;
      case "/calender5":
        title = "";
        metaDescription = "";
        break;
      case "/calender6":
        title = "";
        metaDescription = "";
        break;
      case "/fall-schedule":
        title = "";
        metaDescription = "";
        break;
      case "/overview":
        title = "";
        metaDescription = "";
        break;
      case "/test-prepusapho":
        title = "";
        metaDescription = "";
        break;
      case "/scienceusapho":
        title = "";
        metaDescription = "";
        break;
      case "/programmingusaco":
        title = "";
        metaDescription = "";
        break;
      case "/mathematics":
        title = "";
        metaDescription = "";
        break;
      case "/english":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/calender1" element={<Calender1 />} />
      <Route path="/calender2" element={<Calender2 />} />
      <Route path="/calender3" element={<Calender3 />} />
      <Route path="/calender4" element={<Calender4 />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/calender5" element={<Calender5 />} />
      <Route path="/calender6" element={<Calender6 />} />
      <Route path="/fall-schedule" element={<FallSchedule />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/test-prepusapho" element={<TestPrepUSAPHO />} />
      <Route path="/scienceusapho" element={<ScienceUSAPHO />} />
      <Route path="/programmingusaco" element={<ProgrammingUSACO />} />
      <Route path="/mathematics" element={<Mathematics />} />
      <Route path="/english" element={<English />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
