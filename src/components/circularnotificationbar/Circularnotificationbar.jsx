import style from "./circularnotificationbar.module.css";
export default function Circularnotificationbar() {
  return (
    <div>
      <div className={style.clock}>
        <div className={style.notifications}>abcd</div>
        <div className={style.dates}>xyz</div>
      </div>
    </div>
  );
}
