import css from './Trade.css'
import arrow from "./icons/down.png";
export const Trade = (props) => {
  return (
    <div className="trade">
       <div className="trade-details">
        <p>Rank</p>
        <p>Rank</p>
        <p>price</p>
        <p>price</p>
        <p>Open Price</p>
        <p>Open Price</p>
        <p>24h Change:</p>
        <p>24h Change:</p>
        <p>24h Volume:</p>
        <p>24h Volume:</p>
        <p>Market Cap:</p>
        <p>Market Cap:</p>
        <p>Circulating:</p>
        <p>Circulating:</p>
        <p>Total :</p>
        <p>Total :</p>
      </div>
      <div className="trade-exchange-box">
      <div className="trade-exchange">
       <input placeholder="Value"></input>
        <div className="market-coin-choice">
          <p
            onClick={() => {
              props.setCoinModalIsOpen(true);
            }}
          >
            Choice Your Coin<img src={arrow}></img>
          </p>
        </div>
        <p>Exchange:</p>
        <div className="market-coin-choice">
          <p
            onClick={() => {
              props.setCoinModalIsOpen(true);
            }}
          >
            Choice Your Coin<img src={arrow}></img>
          </p>
        </div>
        <input placeholder="Value"></input>
      </div>
      </div>
      <div className="market-actions">
        <button className="market-buy-btn">Buy</button>
        <button className="market-sell-btn">Sell</button>
      </div>
      <div className="trade-history">
        <div className="trade-history-header">
          <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span>
          <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span> <span>Type</span>
          <span>Price</span>
          <span>Value</span>
          <span>Total</span>
          <span>time</span>
        </div>
      </div>
    </div>
  );
};
