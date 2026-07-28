import { useState } from "react";
import css from "./History.css";
export const History = () => {
  const [activeFilter, setActiveFilter] = useState(null);
const [history,sethistory]= useState(false);
  return (
    <div className="history">
      <div className="history-header">
        <div className="history-header-text">
          <p>TransAction</p>
        </div>
        <div className="history-header-filters">
          <button
            className={activeFilter === "1" ? "active" : ""}
            onClick={() => {
              setActiveFilter("1");
            }}
          >
            1
          </button>
          <button
            className={activeFilter === "2" ? "active" : ""}
            onClick={() => {
              setActiveFilter("2");
            }}
          >
            2
          </button>
          <button
            className={activeFilter === "3" ? "active" : ""}
            onClick={() => {
              setActiveFilter("3");
            }}
          >
            3
          </button>
          <button
            className={activeFilter === "4" ? "active" : ""}
            onClick={() => {
              setActiveFilter("4");
            }}
          >
            4
          </button>
          <button
            className={activeFilter === "5" ? "active" : ""}
            onClick={() => {
              setActiveFilter("5");
            }}
          >
            5
          </button>
        </div>
      </div>
      <div className="history-box">
  <ul>
        <li className='history-sample'>Pair</li>
        <li className='history-sample'>Type</li>
        <li className='history-sample'>Price</li>
        <li className='history-sample'>Amount</li>
        <li className='history-sample'>Total</li>
        <li className='history-sample'>Date</li>
      </ul>
      {history? <ul>
        <li>Pair</li>
        <li>Type</li>
        <li>Price</li>
        <li>Amount</li>
        <li>Total</li>
        <li>Date</li>
      </ul>
    :<p>You Dont Have Any Histories  .  .  .</p>}
     
      </div>
    </div>
  );
};
