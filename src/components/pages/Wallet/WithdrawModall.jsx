import css from './WithdrawModall.css'
import cancel from "./icons/close.svg";
export const WithdrawModall = (props) => {
  return (
    <div
      className={`withdraw-modal ${props.withdarwModalIsOPen ? "open" : ""}`}
    >
      {props.withdarwModalIsOPen ? (
        <div
          className="withdraw-modal--active"
          style={{
            borderColor: `${props.withdarwModalIsOPen === "Deposit" ? "rgba(123, 243, 3, 0.627)" : "rgba(255, 4, 4, 0.63)"}`,
            boxShadow: `1px 1px 10px 2px ${props.withdarwModalIsOPen === "Deposit" ? "rgba(123, 243, 3, 0.627)" : "rgba(255, 4, 4, 0.63)"}`,
          }}
        >
          <div className="withdraw-modal-header">
            <p>{props.withdarwModalIsOPen}</p>
            <button
              name="slidebar-cancel"
              className="slidebar-cancel-btn"
              onClick={() => props.setWithdarwModalIsOpen(false)}
            >
              <img
                className="slidebar-cancel-btn-logo"
                src={cancel}
                alt="cancel-button"
              />
            </button>
          </div>
          <div className="withdraw-modal-actions">
            <button
              className={
                props.withdarwModalIsOPen === "Withdraw" ? "active" : ""
              }
              onClick={() => props.setWithdarwModalIsOpen("Withdraw")}
            >
              Withdraw
            </button>
            <button
              className={
                props.withdarwModalIsOPen === "Deposit" ? "active" : ""
              }
              onClick={() => props.setWithdarwModalIsOpen("Deposit")}
            >
              Deposit
            </button>
          </div>
          <div className="withdraw-form">
            <div className="withdraw-information-box">
              {props.withdarwModalIsOPen === "Withdraw" ? (
                <div className="withdraw-values">
                  <p>
                    <span className="gradient-text">Amount</span>
                  </p>
                  <input type="number" placeholder="Type here"></input>
                </div>
              ) : (
                <div className="withdraw-values">
                  {" "}
                  <p>
                    <span className="gradient-text">Address</span>
                  </p>
                  <p>
                    <span className="gradient-text">----</span>
                  </p>
                </div>
              )}

              <div className="withdraw-values">
                <p>
                  <span className="gradient-text">Network</span>
                </p>
                <span
                  className="network-choose"
                  onClick={() => {
                    props.setNetworkModallOpen(!props.networkModallOpen);
                  }}
                >
                  Choose
                  <div
                    className={`network-modal ${props.networkModallOpen ? "active" : ""}`}
                  >
                    {props.networkModallOpen ? (
                      <div className="network-list">
                        <p className="networks">
                          asdfasdfasdfasflk;asjflas;fjslkajfl;aksf
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </span>
              </div>
              <div className="withdraw-values">
                <p>
                  <span className="gradient-text">Coin</span>
                </p>
                <span
                  onClick={() => {
                    props.setCoinModalIsOpen(true);
                  }}
                >
                  Choose
                </span>
              </div>
              {props.withdarwModalIsOPen === "Withdraw" ? (
                <div className="withdraw-values">
                  <p>
                    <span className="gradient-text">Fee</span>
                  </p>
                  <p>--.--</p>
                </div>
              ) : (
                <div className="withdraw-values">
                  <p>
                    <span className="gradient-text">Be Carefull ! ! !</span>
                  </p>
                </div>
              )}
            </div>
          </div>
         <div className="total-withdraw"><p >--.--</p></div> 
<div className="whithdraw-box-confirm-btn"><button >{props.withdarwModalIsOPen}</button></div>

        </div>
      ) : (
        ""
      )}
    </div>
  );
};
