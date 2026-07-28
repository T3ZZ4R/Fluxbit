import css from "./Coinlist.css";
import search from "./icons/search.svg";
import cancel from "./icons/close.svg";
export const CoinList = (props) => {
  return (
    <div className="coin-choice-modal">
      <header className="coinlist-header">
        <p>Coins</p>{" "}
        <div className="header-search">
          <input className="header-search-input" placeholder="Search"></input>
          <button className="header-search-logo">
            <img src={search} alt="Search"></img>
          </button>{" "}
        </div>{" "}
        <button
          name="slidebar-cancel"
          className="slidebar-cancel-btn"
          onClick={() => props.setCoinModalIsOpen(false)}
        >
          <img
            className="slidebar-cancel-btn-logo"
            src={cancel}
            alt="cancel-button"
          />

         
        </button>
      </header>
      <ul className="modal-coin-list">
        <li>
          <p>Logo</p>
          <p>Name</p>
          <p style={{ cursor: "pointer" }}>Change</p>
          <p>Value</p>
        </li>
        {props.coins.map((c) => {
          return (
            <li onClick={()=>{props.setSelectedCoin(c.id);
              props.setCoinModalIsOpen(false)
            }} key={c.id} className="modal-coin-list-items">
              <img src={c.image}></img>
              <p>{c.name.split(" ")[0]}</p>
              <p
                style={{
                  borderRadius: "7px",
                  background: `${c.price_change_percentage_24h > 0 ? "darkgreen" : "rgba(199, 16, 16, 0.582)"}`,
                }}
              >
                {c.price_change_percentage_24h}%
              </p>
              <p>{c.current_price}$</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
