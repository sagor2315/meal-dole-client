import { Outlet } from "react-router-dom";

import Header from "../Pages/HomePage/Header/Header";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
