import css from "./Market.css";
import arrow from "./icons/down.png";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export const Markets = (props) => {
  const [coin, setcoin] = useState(null);
  const [coinData, setCoinData] = useState(null);
  useEffect(() => {
    const fetchCoin = async () => {
      if (props.selectedCoin) {
        try {
          props.setLoader(true);
          const info = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${props.selectedCoin}`,
          );
          const data = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${props.selectedCoin}/market_chart?vs_currency=usd&days=7&precision=2`,
          );
          const json = await data.data;
          setcoin(json.prices);
          setCoinData(info.data);
          props.setLoader(false);
        } catch (err) {
          props.setLoader(false);
          console.log(err);
        }
      }
    };
    fetchCoin();
  }, [props.selectedCoin]);
  
  let chartData = null;
  let options = null;
  
  if (coin && coinData) {
    const dates = coin.map((item) => {
      const date = new Date(item[0]);
      return date.toLocaleDateString("en-US");
    });
    
    const prices = coin.map((item) => item[1]);
    
    chartData = {
      labels: dates,
      datasets: [
        {
          label: coinData.name+`(USD)`,
          data: prices,
          borderColor: "rgb(98, 192, 75)",
          backgroundColor: "rgba(243, 255, 8, 0.1)",
          fill: false,
          tension: 0.3,
          pointRadius: 0,
        },
      ],
    };
    
    options = {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { maxTicksLimit: 8 },
        },
        y: {
          grid: { color: "rgb(193, 255, 6)" },
          ticks: {
            callback: (value) => "$" + value.toLocaleString(),
          },
        },
      },
    };
  }
  
  return (
    <div className="market">
      {coinData ? (
        <Line className="market-chartbox" data={chartData} id="myChart" />
      ) : (
        <div
        className="market-chartbox"
        style={{ justifyContent: "center", alignItems: "center" }}
        >
          Select Coin
        </div>
      )}{" "}
    
      <div className="market-details">
        <div>
          <p className="market-detail-item">Price</p>
          <p>{coinData?coinData.market_data.current_price.usd+`$`:'----'}</p>
    
        </div>
        <div>
          <p className="market-detail-item">Change</p>
          <p>{coinData?coinData.market_data.price_change_24h+`$`:'----'}</p>
        </div>
        <div>
          <p className="market-detail-item">High</p>
          <p>{coinData?coinData.market_data.high_24h.usd+`$`:`----`}</p>
        </div>
        <div>
          <p className="market-detail-item">Low</p>
          <p>{coinData?coinData.market_data.low_24h.usd+`$` :`----`}</p>
        </div>
        <div>
          <p className="market-detail-item">MarketCap</p>
          <p>{coinData?coinData.market_data.market_cap.usd:`----`}</p>
        </div>
        <div>
          <p className="market-detail-item">Volume</p>
          <p>{coinData?coinData.market_data.total_volume.usd:'----'}</p>
        </div>
      </div>
      <div className="market-coin-choice">
        <p
          onClick={() => {
            props.setCoinModalIsOpen(true);
          }}
        >
          {coinData?coinData.name:`Choice Your Coin`}<img src={arrow}></img>
        </p>
      </div>
      <div className="market-actions">
        <button className="market-buy-btn">Buy</button>
        <button className="market-sell-btn">Sell</button>
      </div>
    </div>
  );
};
