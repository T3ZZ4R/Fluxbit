import axios from "axios";
import { useState, useEffect, useRef } from "react";

export const Home = (props) => {
  const [selectBoxIsOpen, setSelectBoxIsOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [filter, setFilter] = useState("All");

  const containerRef = useRef(null);
  const isDown = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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

  const onMouseDown = (e) => {
    isDown.current = true;
    isDragging.current = false;
    startX.current = e.clientX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;

    const x = e.clientX;
    const walk = x - startX.current;

    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }

    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onTouchStart = (e) => {
    isDown.current = true;
    isDragging.current = false;
    startX.current = e.touches[0].clientX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onTouchEnd = () => {
    isDown.current = false;
  };

  const onTouchMove = (e) => {
    if (!isDown.current) return;

    const x = e.touches[0].clientX;
    const walk = x - startX.current;

    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }

    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onCardClick = (e) => {
    if (isDragging.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

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

      <div
        className="home-cards"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
      >
        {}
        {props.coins.length > 0 ? props.coins.map((c)=>{return( 
          <div key={c.id} className="card" onClick={onCardClick}>
            <div className="card-body">
              <img src={c.image} alt={c.name} />
              <p>{c.symbol}</p>
              <p>{c.name.split(' ')[0]}</p>
            </div>

            <div className="card-actions">
              <button
                className="card-action-buy"
                onClick={(e) => e.stopPropagation()}
              >
                Buy
              </button>
              <button
                className="card-action-sell"
                onClick={(e) => e.stopPropagation()}
              >
                Sell
              </button>
            </div>
            <div className="price">{c.current_price}$</div>
          </div>
        )})  : (
          <div></div>
        )}
      </div>
    </div>
  );
};
