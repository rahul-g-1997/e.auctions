import { useState, useEffect } from "react";
import style from "./navbar.module.css";
import logo from "../../assets/hfdc-logo.png";
import Time from "../time/Time";

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
          <img className={style.logo} src={logo} alt="HFDC Logo" />
          <div className={style.name}>
            <h3>eAuction</h3>
            <p>
              हरियाणा वन विकास निगम<br />Haryana Forest Development Corporation
            </p>
          </div>
        </div>

        <div className={style.navdiv}>
          <div className={style.upperNav}>
            <ul>
              <li className={style.time}><strong><Time/></strong></li>
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
            <div>
              <ul>
                <li>
                  <a >home</a>
                </li>
                <li>
                  <a >contact</a>
                </li>
                <li>
                  <a >Auction Lots</a>
                </li>
                <li>
                  <a >Auction Results</a>
                </li>
                <li>
                  <a >Lot Lists</a>
                </li>
                <li>
                  <a >Notices</a>
                </li>
              </ul>
            </div>

            <div className={style.buttondiv}>
              <button>Registration</button>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
