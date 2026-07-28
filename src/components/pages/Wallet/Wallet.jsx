import css from "./Wallet.css";
import { useState } from "react";
import cancel from "./icons/close.svg";
import { WithdrawModall } from "./WithdrawModall";
export const Wallet = (props) => {
  const [withdarwModalIsOPen, setWithdarwModalIsOpen] = useState(null);
  const [networkModallOpen, setNetworkModallOpen] = useState(false);
  const [sortBoxIsOpen, setSortBoxIsOpen] = useState(false);
  const [sorting, setSorting] = useState("Maximum");
  return (
    <div className="wallet">
      <div className="wallet-all-wealth">
        <span>
          <p>All Wealth</p>
          <p>---</p>
        </span>
        <span>
          <p>Today Profit</p>
          <p>---</p>
        </span>
        <div className="all-wealth-action">
          <button
            onClick={() => {
              setWithdarwModalIsOpen("Deposit");
            }}
          >
            Deposit
          </button>
          <button
            onClick={() => {
              setWithdarwModalIsOpen("Withdraw");
            }}
          >
            Withdraw
          </button>
          <button
            onClick={() => {
              props.setActivePage("trade");
            }}
          >
            Trade
          </button>
        </div>
      </div>
      <WithdrawModall
        withdarwModalIsOPen={withdarwModalIsOPen}
        setWithdarwModalIsOpen={setWithdarwModalIsOpen}
        setNetworkModallOpen={setNetworkModallOpen}
        networkModallOpen={networkModallOpen}
        setCoinModalIsOpen={props.setCoinModalIsOpen}
      />
      <div className="wallet-coins-box">
        <div className="balance-header">
          <p>Balance</p>

          <div
            className="balance-sort-box"
            onClick={() => {
              setSortBoxIsOpen(!sortBoxIsOpen);
            }}
          >
            {sorting}
          </div>
          <div className={`sort-box ${sortBoxIsOpen ? "active" : ""}`}>
            {sortBoxIsOpen && (
              <>
                <span
                  onClick={() => {
                    setSorting("Maximum");
                    setSortBoxIsOpen(false);
                  }}
                >
                  Max
                </span>
                <span
                  onClick={() => {
                    setSorting("Minimum");
                    setSortBoxIsOpen(false);
                  }}
                >
                  Min
                </span>
              </>
            )}
          </div>
        </div>
        <ul className="coin-list">
          <li><p>Number</p><p>Icon</p><p>Simble</p><p>Price</p><p>Balance</p></li>
      {props.coins.map((c,index) => {
          return (
            <li key={c.id}>
              <p>.{index+1}</p>
              <p>
              <img src={c.image}alt="c.name"></img></p>
              <p>{c.name.split(" ")[0]}</p>
              <p
                style={{
                  borderRadius: "7px",
                  background: `${c.price_change_24h > 0 ? "green" : "red"}`,
                 WebkitTextFillColor:"transparent"
                 ,WebkitBackgroundClip:"text"
                }}
              >
                {c.current_price}
              </p>
              <p>1$</p>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
};
