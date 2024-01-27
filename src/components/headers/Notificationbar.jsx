import style from "./notificationbar.module.css";

export default function Notificationbar() {
  return (
      <div className={style.notificationbar}>
          <strong>
              <div className={style.text}>
          Notification Text Goes Here. This is a rolling notification.
          Notification Text Goes Here. This is a rolling notification.
          Notification Text Goes Here. This is a rolling notification.
      </div>
          </strong>
      
    </div>
  );
}
