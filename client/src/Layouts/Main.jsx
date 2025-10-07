import { Outlet } from "react-router-dom";
import Footer from "../Componnents/Shared/Footer/Footer";
import Navbar from "../Componnents/Shared/NavBar/Navbar";
import TopNav from "../Componnents/Shared/NavBar/TopNav/TopNav";

const Main = () => {
  return (
    <div>
      
      <div>
        <TopNav />
        <Navbar />
        <Outlet />
        <Footer />
      </div>

    </div>
  );
};

export default Main;
