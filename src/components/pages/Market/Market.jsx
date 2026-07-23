import css from './Market.css'
import arrow from'./icons/down.png'
export const Markets = (props) => {
  return (
    
    <div className="market">
      
      <div className="market-chartbox">chart</div>
      <div className="market-details">
        <div>
          <p className="market-detail-item">item</p>
          <p>value</p>
        </div>
        <div>
          <p className="market-detail-item">item</p>
          <p>value</p>
        </div>
        <div>
          <p className="market-detail-item">item</p>
          <p>value</p>
        </div>
        <div>
          <p className="market-detail-item">item</p>
          <p>value</p>
        </div>
        <div>
          <p className="market-detail-item">item</p>
          <p>value</p>
        </div>
        <div>
          <p className="market-detail-item">item</p>
          <p>value</p>
        </div>
      </div>
      <div className="market-coin-choice"><p onClick={()=>{props.setCoinModalIsOpen(true)}}>Choice Your Coin<img src={arrow}></img></p></div>
      <div className="market-actions">
        <button className='market-buy-btn'>Buy</button>
        <button className='market-sell-btn'>Sell</button>
      </div>
    </div>
  );
};
