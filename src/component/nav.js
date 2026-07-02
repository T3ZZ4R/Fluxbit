import login from "../css/svg/ChatGPT Image Jun 29, 2026, 12_50_51 PM.png";
import notification from "../css/svg/notifications_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import language from "../css/svg/language_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import upicon from"../css/svg/arrow_upward_20dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.svg";
import { useState } from "react";
export const Nav = (props) => {
  const [notificationNumber, setNotificationNumber] = useState(0);
  const [navbarModal,setNavbarModal]=useState(null)
  const [timer,setTimer]=useState(null)
  const clearCloseTimer=()=>{
    if(timer){
      clearTimeout(timer)
    setTimer(null)  
    }
  }
  const startCloseTimer=()=>{
    clearCloseTimer()
 const close=setTimeout(() => {
  setNavbarModal(null)
 }, 200);
 setTimer(close)
  }
  const interHandler=(action)=>{
    if(action===navbarModal){
    clearCloseTimer()
      setNavbarModal(null)
      return
    }
    clearCloseTimer()
    setNavbarModal(action)
  }
  const leaveHandler=()=>{
    startCloseTimer();
  }
  return (
    <div  className="navbar">
      <div  onMouseLeave={leaveHandler}onMouseEnter={clearCloseTimer} className="navbar-left">
        <div onClick={()=>{interHandler('balance')}}><img className={navbarModal==='balance'?'navbar-arrow--active':''} src={upicon}></img>Balance</div>
        <div onClick={()=>{interHandler('market')}}><img className={navbarModal==='market'?'navbar-arrow--active':""} src={upicon}></img>Markets</div>
        <div onClick={()=>{interHandler('trade')}} className="navbar-trade"><img className={navbarModal==='trade'?'navbar-arrow--active':" "} src={upicon}></img>Trade</div>
        <span className={` navbar-modal ${navbarModal&&"navbar-modal--active"}`}>{navbarModal}</span></div>
      <div className="navbar-right">
        <div className="language-btns">
          <button className={`language-btn`}>
            <img src={language} alt="Language Button"></img>
          </button>
        </div>
        <div className="notification">
          <button className="notification-btn">
            <img src={notification} alt="Language Button"></img>
            {notificationNumber > 0 && (
              <span className="notification-number">{notificationNumber}</span>
            )}
          </button>
        </div>
        <div className="profile-area">
          <button className="profile-icon">
            <img src={login} alt="Login"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
