import { useState, useEffect } from "react";
import style from "./navbar.module.css";
import logo from "../../assets/hfdc-logo.png";
import Time from "../time/Time";
import { NavLink } from "react-router-dom";

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
            <h1>eAuction</h1>
            <p>
              हरियाणा वन विकास निगम
              <br />
              Haryana Forest Development Corporation
            </p>
          </div>
        </div>

        <div className={style.navdiv}>
          <div className={style.upperNav}>
            <ul>
              <li className={style.time}>
                <strong>
                  <Time />
                </strong>
              </li>
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
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contacts"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    contacts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="auction-lots"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    Auction Lots
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="auction-results"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    Auction Results
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="lotlists"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    Lot Lists
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="notices"
                    className={({ isActive }) => (isActive ? style.active : "")}
                  >
                    Notices
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={style.buttondiv}>
              <NavLink to="registration">
                <button>Registration</button>
              </NavLink>
              <NavLink to="signin">
                <button>Sign In</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
