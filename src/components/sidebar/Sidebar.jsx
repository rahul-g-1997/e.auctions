import style from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <aside className={style.aside1}>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
          <div className={style.text}>download</div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
          <div className={style.text}>download</div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
          <div className={style.text}>download</div>
        </div>
        <div className={style.link} data-link="dashboard">
          <div className={style.icon}>
            <span className="material-symbols-outlined">download</span>
          </div>
          <div className={style.text}>download</div>
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
