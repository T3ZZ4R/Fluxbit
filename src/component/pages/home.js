import axios from "axios";
import { useState, useEffect, useRef } from "react";

export const Home = (props) => {
  const [selectBoxIsOpen, setSelectBoxIsOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [filter, setFilter] = useState("All");
  const boxRef = useRef(null);
  const filterBoxClickHandler = (f) => {
    setFilter(f);
    setSelectBoxIsOpen(false);
    setShowItems(false);
  };

  useEffect(() => {
    if (selectBoxIsOpen) {
      const t = setTimeout(() => {
        setShowItems(true);
      }, 300);

      return () => clearTimeout(t);
    } else {
      setShowItems(false);
    }
  }, [selectBoxIsOpen]);

  console.log(props.coins);

  return (
    <div className="home">
      <div className="home-header">
        <div className="home-title">
          <h1>Market Overview</h1>
        </div>

        <div className="home-select-field">
          <button
            className={`home-select-field-btn ${
              selectBoxIsOpen ? "active" : ""
            }`}
            onClick={() => setSelectBoxIsOpen(!selectBoxIsOpen)}
          >
            {filter}
          </button>

          <ul
            className={`home-select-box ${
              selectBoxIsOpen ? "home-select-box--active" : ""
            }`}
          >
            {showItems && (
              <>
                <li onClick={() => filterBoxClickHandler("All")}>All</li>
                <li onClick={() => filterBoxClickHandler("Popular")}>
                  Popular
                </li>
                <li onClick={() => filterBoxClickHandler("Price ↓")}>
                  Price ↓
                </li>
                <li onClick={() => filterBoxClickHandler("Price ↑")}>
                  Price ↑
                </li>
                <li onClick={() => filterBoxClickHandler("Change ↑")}>
                  Change ↑
                </li>
                <li onClick={() => filterBoxClickHandler("Change ↓")}>
                  Change ↓
                </li>
                <li onClick={() => filterBoxClickHandler("Volume ↑")}>
                  Volume ↑
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div ref={boxRef} className="home-cards">
        {props.coins.length > 0 ? (
          props.coins.map((c) => {
            return (
              <div
                key={c.id}
                className="card"
                onClick={(e) => {
                  console.log(c.id);
                }}
              >
                <div className="card-body">
                  <img src={c.image} alt={c.name} />
                  <p>{c.symbol}</p>
                  <p>{c.name.split(" ")[0]}</p>
                  <p className="price">{c.current_price}$</p>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
        <div className="home-scroll-buttons left">
          <button className="left"
            onClick={() => {
              boxRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
              });
            }}
          >
            {'<'}
          </button>

          <button
            onClick={() => {
              boxRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
              });
            }}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};
