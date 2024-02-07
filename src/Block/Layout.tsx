import Header from "./Header";
import { Outlet } from "react-router-dom";
import WelcomePage from "../Pages/WelcomePage";
import Teachers from "../Pages/Teachers";
import Footer from "../Pages/Footer"
import Footer2 from "../Pages/Footer2";
import Scroll from "./Scroll";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <WelcomePage />
      <Teachers />
      <Footer/>
      <Scroll/>
      <Footer2/>
    </div>
  );
};

export default Layout;
