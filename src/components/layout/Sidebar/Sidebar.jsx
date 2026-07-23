import css from './Sidebar.css'
import cancel from "./icons/close.svg";
export const Sidebar = (props) => {
  return (
    <div className={`slidebar ${props.isOpen ? "slidebar-active" : ""}`}>
      <div className="slidebar-header">
        <h1 className="slidebar-header-title">MENU</h1>
   <button
  name="slidebar-cancel"
  className="slidebar-cancel-btn"
  onClick={() => props.setOpen(false)}
>
  <img
    className="slidebar-cancel-btn-logo"
    src={cancel}
    alt="cancel-button"
  />

  <span className="slidebar-cancel-btn-tooltip">
    Close
  </span>
</button>
      </div>
    </div>
  );
};
