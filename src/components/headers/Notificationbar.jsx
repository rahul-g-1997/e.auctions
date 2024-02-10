import style from "./notificationbar.module.css";
import useHoverSpeech from "../speechSynthesis/useHoverSpeech";

export default function Notificationbar() {
    const { handleMouseOver } = useHoverSpeech();

  return (
    <div className={style.notificationbar}>
      <strong>
        <div className={style.text} onMouseOver={handleMouseOver}>
          Notification Text Goes Here. This is a rolling notification.
        </div>
      </strong>
    </div>
  );
}
