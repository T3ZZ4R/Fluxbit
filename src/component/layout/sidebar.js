import cancel from "../../css/svg/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
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
