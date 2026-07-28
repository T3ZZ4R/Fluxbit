import { useEffect, useState } from "react";
import css from "./Trade.css";
import arrow from "./icons/down.png";
import axios from "axios";
export const Trade = (props) => {
  const [coinData,setCoinData]=useState(null);
  const [trades,setTrades]=useState(null)
  useEffect(() => {
    const fetchData=async ()=>{
      if(props.selectedCoin){
        
       const data=await axios.get(`https://api.coingecko.com/api/v3/coins/${props.selectedCoin}`)
       const symbol = data.data.symbol;
       setTrades(symbol)
    fetch('https://api.kucoin.com/api/v1/market/histories?symbol=BTC-USDT')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error)
       // const tradesData =await axios.get(`https://api.kucoin.com/api/v1/market/histories?symbol=${data.data.symbol.toUpperCase()}-USDT`)
// setTrades(tradesData.data)
    setCoinData(data.data)
      }

  }
  
  fetchData();
  console.log(coinData);
  console.log(trades);
  
}, [props.selectedCoin]);
  return (
    <div className="trade">
      <div className="trade-details">
        <p>Name</p>
        <p>{coinData?coinData.name:'----'}</p>
        <p>Rank</p>
        <p>{coinData?coinData.market_cap_rank:`----`}</p>
        <p>Price</p>
        <p>{coinData?coinData.market_data.current_price.usd+"$":`----`}</p>
        <p>High Price</p>
        <p>{coinData?coinData.market_data.ath.usd+'$':`----`}</p>
        <p>24h Change:</p>
        <p>{coinData?coinData.market_data.price_change_percentage_24h
+'%':`----`}</p>
        <p>24h Volume:</p>
        <p>{coinData?coinData.market_data.total_volume.usd:'----'}</p>
        <p>Market Cap:</p>
        <p>{coinData?coinData.market_data.market_cap.usd+'$':'----'}</p>
        <p>Circulating:</p>
        <p>{coinData?coinData.market_data.circulating_supply:`----`}</p>
        <p>Total :</p>
        <p>{coinData?coinData.market_data.total_supply:`----`}</p>
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
              {coinData?coinData.symbol.toUpperCase():'Chooese Your Coin'}<img src={arrow}></img>
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
