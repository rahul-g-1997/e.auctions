import style from "./sidebar.module.css";
import Speech from "../../components/speechSynthesis/Speech";

const Sidebar = () => {
  return (
    <div>
      <Speech />
      <aside className={style.aside1}>
        <div className={style.link} data-link="dashboard">
          <div className={style.text}>User Manual</div>
          <div className={style.icon}>
            <span className="material-symbols-outlined">description</span>
          </div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.text}>Sale Conditions</div>
          <div className={style.icon}>
            <span className="material-symbols-outlined">description</span>
          </div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.text}>AnyDesk</div>
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.text}>download</div>
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
