import { click } from "@testing-library/user-event/dist/click";
import css from "./Sidebar.css";
import {
  cancel,
  dashbord,
  markets,
  trade,
  wallet,
  history,
  home,
  bookmark,
  profile,
  notification,
  setting,
} from "./icons/index";
export const Sidebar = (props) => {
  const clickHandler = (page) => {
    props.setCurrentPage(page);
    props.setOpen(false);
  };
  return (
    <div className={`slidebar ${props.isOpen ? "slidebar-active" : ""}`}>
      <div className="slidebar-header">
        <h1 className="slidebar-header-title">MENU</h1>
        <button
          name="slidebar-cancel"
          className="slidebar-cancel-btn"
          onClick={() => {
            props.setOpen(false);
          }}
        >
          <img
            className="slidebar-cancel-btn-logo"
            src={cancel}
            alt="cancel-button"
          />
        </button>
      </div>
      <div className="sidebar-menu">
        <button className="dashbord">
          <img src={dashbord} alt="dashbord" />
          Dashbord
        </button>
        <button
        onClick={()=>clickHandler('home')}>
          <img src={home} alt="home" />
          Home
        </button>
        <button onClick={()=>clickHandler("markets")}>
          <img src={markets} alt="markets" />
          Markets
        </button>
        <button
          onClick={() => {
            clickHandler("trade");
          }}
        >
          <img src={trade} alt="trade" />
          Trade
        </button>
        <button onClick={()=>clickHandler('wallet')}>
          <img src={wallet} alt="wallet" />
          Wallet
        </button>
        <button onClick={()=>clickHandler('history')}>
          <img src={history} alt="history" />
          History
        </button>
        <button>
          <img src={bookmark} alt="bookmark" />
          Bookmark
        </button>
        <button>
          <img src={notification} alt="notification" />
          Notification
        </button>
        <button>
          <img src={setting} alt="setting" />
          Setting
        </button>
        <button>
          <img src={profile} alt="profile" />
          Profile
        </button>
      </div>
    </div>
  );
};
