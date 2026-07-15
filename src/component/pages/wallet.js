import { useState } from "react";
import cancel from "../../css/svg/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
export const Wallet = (props) => {
  const [withdarwModalIsOPen, setWithdarwModalIsOpen] = useState(null);
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
      <div className={`withdraw-modal ${withdarwModalIsOPen ? "open" : ""}`}>
        {withdarwModalIsOPen ? (
          <div
            className="withdraw-modal--active"
            style={{
              borderColor: `${withdarwModalIsOPen === "Deposit" ? "rgba(123, 243, 3, 0.627)" : "rgba(255, 4, 4, 0.63)"}`,
            }}
          >
            <div className="withdraw-modal-header">
              <p>{withdarwModalIsOPen}</p>
              <button
                name="slidebar-cancel"
                className="slidebar-cancel-btn"
                onClick={() => setWithdarwModalIsOpen(false)}
              >
                <img
                  className="slidebar-cancel-btn-logo"
                  src={cancel}
                  alt="cancel-button"
                />

                <span className="slidebar-cancel-btn-tooltip">Close</span>
              </button>
            </div>
            <div className="withdraw-modal-actions">
              <button
                className={withdarwModalIsOPen === "Withdraw" ? "active" : ""}
                onClick={() => setWithdarwModalIsOpen("Withdraw")}
              >
                Withdraw
              </button>
              <button
                className={withdarwModalIsOPen === "Deposit" ? "active" : ""}
                onClick={() => setWithdarwModalIsOpen("Deposit")}
              >
                Deposit
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
