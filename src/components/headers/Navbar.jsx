import { useState, useEffect } from "react";
import style from "./navbar.module.css";
import logo from "../../assets/hfdc-logo.png";

export default function Navbar() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    const element = document.documentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    }
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.logodiv}>
          <img src={logo} alt="HFDC Logo" />
        </div>

        <div className={style.navdiv}>
          <div className={style.upperNav}>
            <ul>
              <li>
                <span className="material-symbols-outlined">support_agent</span>
              </li>
              <li>
                <span className="material-symbols-outlined">text_increase</span>
              </li>
              <li>
                <span className="material-symbols-outlined">match_case</span>
              </li>
              <li>
                <span className="material-symbols-outlined">text_decrease</span>
              </li>
              <li>
                <span className="material-symbols-outlined">dark_mode</span>
              </li>
              <li>
                <span className="material-symbols-outlined">light_mode</span>
              </li>
              <li>
                <i className={style.screenbtn} onClick={handleFullscreen}>
                  {isFullscreen ? (
                    <span className="material-symbols-outlined">
                      fullscreen_exit
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">
                      fullscreen
                    </span>
                  )}
                </i>
              </li>
            </ul>
          </div>

          <div className={style.lowerNav}>
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
              <li>
                <a href="">downloads</a>
              </li>
              <li>
                <a href="">Auction Lots</a>
              </li>
              <li>
                <a href="">Auction Results</a>
              </li>
              <li>
                <a href="">Lot Lists</a>
              </li>
              <li>
                <a href="">Notices</a>
              </li>
              <li>
                <button>Registration</button>
              </li>
              <li>
                <button>Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
