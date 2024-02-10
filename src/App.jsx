import "./App.css";
import Footer from "./components/footers/Footer";
import Navbar from "./components/headers/Navbar";
import upArrowIcon from "./assets/up-arrow.png";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Sidebar />
      <Footer />
      {/* 👇️ scroll to top on button click */}
      <div>
        <img
          src={upArrowIcon}
          alt="Scroll to top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            backgroundColor: "white",
            position: "fixed",
            bottom: "20px",
            right: "7px",
            color: "#fff",
            textAlign: "center",
            borderRadius: "50%",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 1)",
            transition: "transform 0.2s ease",
          }}
          className="hover-scale"
          onMouseEnter={() => {
            document.querySelector(".hover-scale").style.transform =
              "scale(1.1)";
          }}
          onMouseLeave={() => {
            document.querySelector(".hover-scale").style.transform = "scale(1)";
          }}
        />
      </div>
    </>
  );
}

export default App;
