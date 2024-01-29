import style from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <aside className={style.aside1}>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">description</span>
          </div>
          <div className={style.text}>User Manual</div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">description</span>
          </div>
          <div className={style.text}>Sale Conditions</div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
          <div className={style.text}>AnyDesk</div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
          <div className={style.text}>download</div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
