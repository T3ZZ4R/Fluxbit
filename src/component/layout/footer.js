import history from "../../css/svg/history_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import wallet from "../../css/svg/wallet_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import trade from "../../css/svg/swap_horizontal_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import markets from "../../css/svg/finance_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import home from "../../css/svg/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import { useState } from "react";
export const Footer = (props) => {
   
  return (
    <div className="footer">
      <div>
        <button className={props.activePage==='history'?'active':''} onClick={()=>{props.setActivePage('history')}}>
            <img src={history}></img>
          <span>History</span>
        </button>
      </div>
      <div>
        <button className={props.activePage==='wallet'?'active':''} onClick={()=>{props.setActivePage('wallet')}}>
            <img src={wallet}></img>
          <span>Wallet</span>
        </button>
      </div>
      <div>
        <button className={props.activePage==='trade'?'active':''} onClick={()=>{props.setActivePage('trade')}}>
            <img src={trade}></img>
          <span>Trade</span>
        </button>
      </div>
      <div>
        <button className={props.activePage==='markets'?'active':''} onClick={()=>{props.setActivePage('markets')}}>
            <img src={markets}></img>
          <span>Markets</span>
        </button>
      </div>
      <div>
        <button className={props.activePage==='home'?'active':''} onClick={()=>{props.setActivePage('home')}}>
            <img src={home}></img>
          <span>Home</span>
        </button>
      </div>
    </div>
  );
};
