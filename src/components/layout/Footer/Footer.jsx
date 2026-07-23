import css from './Footer.css'
import history from "./icons/history.svg";
import wallet from "./icons/wallet.svg";
import trade from "./icons/trade.svg";
import markets from "./icons/markets.svg";
import home from "./icons/home.svg";
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
