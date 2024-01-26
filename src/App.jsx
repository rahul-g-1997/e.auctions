import "./App.css";
import Footer from "./components/footers/Footer";
import Navbar from "./components/headers/Navbar";
import upArrowIcon from "./assets/up-arrow.png"

function App() {
  return (
    <>
      <Navbar />
      <h1>hello</h1>
      <button>hello</button>
      <Footer />
      {/* 👇️ scroll to top on button click */}
      <div>
        <div style={{ height: "155rem" }} />
        <img
          src={upArrowIcon}
          alt="Scroll to top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            color: "#fff",
            textAlign: "center",
            borderRadius: "50%",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)",
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