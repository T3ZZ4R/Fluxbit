import { Dashboard } from "./pages/Dashboard/Dashboard";
import { History } from "./pages/History/History";
import { Home } from "./pages/Home/Home";
import { Markets } from "./pages/Market/Market";
import { Notification } from "./pages/Notification/Notification";
import { Profile } from "./pages/Profile/Profile";
import { Settings } from "./pages/Settings/Settings";
import { Trade } from "./pages/Trade/Trade";
import { Wallet } from "./pages/Wallet/Wallet";
export const Main = (props) => {
  return (
    <div className="main">
      {props.currentPage === "profile" && <Profile />}
      {props.currentPage === "dashboard" && <Dashboard />}
      {props.currentPage === "settings" && <Settings />}
      {props.currentPage === "home" && (
        <Home
          setLoader={props.setLoader}
          setActivePage={props.setActivePage}
          coins={props.coins}
          selectedCoin={props.selectedCoin}
          setSelectedCoin={props.setSelectedCoin}
        />
      )}
      {props.currentPage === "markets" && (
        <Markets
          setCoinModalIsOpen={props.setCoinModalIsOpen}
          setLoader={props.setLoader}
          selectedCoin={props.selectedCoin}
          setSelectedCoin={props.setSelectedCoin}
        />
      )}
      {props.currentPage === "trade" && (
        <Trade
          setCoinModalIsOpen={props.setCoinModalIsOpen}
          selectedCoin={props.selectedCoin}
          setSelectedCoin={props.setSelectedCoin}
        />
      )}
      {props.currentPage === "wallet" && (
        <Wallet
          setActivePage={props.setActivePage}
          setCoinModalIsOpen={props.setCoinModalIsOpen}
          coins={props.coins}
        />
      )}
      {props.currentPage === "history" && <History />}
      {props.currentPage === "notification" && (
        <Notification
          notificationNumber={props.notificationNumber}
          setNotificationNumber={props.setNotificationNumber}
          notifications={props.notifications}
          setNotifications={props.setNotifications}
        />
      )}
    </div>
  );
};
