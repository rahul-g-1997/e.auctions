import  Style  from "./dialog.module.css";

// eslint-disable-next-line react/prop-types
const Dialog = ({ open, onClose, children }) => {
  if (open) {
    return (
        <div className={Style.dialogContainer}>
            <div className={Style.dialog}>
          <h2>Speech settings</h2>
          {children}
          <span className={Style.dialog__close} onClick={onClose}>
            Done
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default Dialog;
