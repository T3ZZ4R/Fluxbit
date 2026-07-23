import css from './Nav.css'
import login from "./icons/login.png";
import notification from "./icons/notification.svg";
import language from "./icons/language.svg";
import upIcon from"./icons/upIcon.svg";
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
        <div onClick={()=>{interHandler('balance')}}><img className={navbarModal==='balance'?'navbar-arrow--active':''} src={upIcon}></img>Balance</div>
        <div onClick={()=>{interHandler('market')}}><img className={navbarModal==='market'?'navbar-arrow--active':""} src={upIcon}></img>Markets</div>
        <div onClick={()=>{interHandler('trade')}} className="navbar-trade"><img className={navbarModal==='trade'?'navbar-arrow--active':" "} src={upIcon}></img>Trade</div>
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
