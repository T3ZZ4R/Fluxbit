import "./css/App.css";
import { Loader } from "./components/ui/Loader/Loader.jsx";
import { useEffect, useState, useRef } from "react";
import { Header } from "./components/layout/Header/Header.jsx";
import { Sidebar } from "./components/layout/Sidebar/Sidebar.jsx";
import { Nav } from "./components/layout/Nav/Nav.jsx";
import { Main } from "./components/main.js";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import { CoinList } from "./components/ui/Coinlist/Coinlist.jsx";
import axios from "axios";
import { Dashboard } from "./components/pages/Dashboard/Dashboard.jsx";

function App() {
  const [loading, setLoader] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const [language, setLanguage] = useState("en");
  const [userNotification, setUserNOtificacion] = useState({});
  const [currentPage, setCurrentPage] = useState("home");
  const [coins, setCoins] = useState([]);
  const [coinModalIsOpen, setCoinModalIsOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [notificationNumber, setNotificationNumber] = useState(0);
  const [notifications, setNotifications] = useState([]);

  const queueRef = useRef([]);
  const runningRef = useRef(false);

  const initialMessages = [
    { message: "msg 1", readed: false, id: crypto.randomUUID(), date: "Now" },
    { message: "msg 2", readed: false, id: crypto.randomUUID(), date: "Now" },
    { message: "msg 3", readed: false, id: crypto.randomUUID(), date: "Now" },
  ];

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200&page=1",
      );
      setCoins(res.data);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
    setNotifications(initialMessages);
  }, []);

  useEffect(() => {
    const unread = notifications.filter((m) => !m.readed);
    setNotificationNumber(unread.length);

    queueRef.current = [...unread];

    if (!runningRef.current) {
      runQueue();
    }
  }, [notifications]);

  const runQueue = async () => {
    if (runningRef.current) return;

    runningRef.current = true;

    while (queueRef.current.length > 0) {
      const current = queueRef.current.shift();

      setUserNOtificacion({
        message: current.message,
        color: "black",
      });

      await new Promise((r) => setTimeout(r, 2500));
      setUserNOtificacion({});
      await new Promise((r) => setTimeout(r, 300));
    }

    runningRef.current = false;
  };

  const userNOtificationHandler = (text, color = "black") => {
    setUserNOtificacion({ message: text, color });
    setTimeout(() => setUserNOtificacion({}), 3000);
  };

  useEffect(() => {
    setLoader(true);
    const t = setTimeout(() => setLoader(false), 500);
    return () => clearTimeout(t);
  }, [coinModalIsOpen]);

  return (
    <div className="App">
      {coinModalIsOpen && (
        <CoinList
          coins={coins}
          setCoinModalIsOpen={setCoinModalIsOpen}
          setSelectedCoin={setSelectedCoin}
        />
      )}

      {loading && <Loader />}

      <Header sideBar={sideBar} setSideBar={setSideBar} />

      <Sidebar
        isOpen={sideBar}
        setOpen={setSideBar}
        setCurrentPage={setCurrentPage}
      />

      <Nav
        language={language}
        setLanguage={setLanguage}
        setCurrentPage={setCurrentPage}
        notificationNumber={notificationNumber}
        setNotificationNumber={setNotificationNumber}
      />

      <div
        style={{ backgroundColor: userNotification.color }}
        className={`user-notification ${
          userNotification.message ? "user-notification--active" : ""
        }`}
      >
        {userNotification.message || ""}
      </div>

      <Main
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        currentPage={currentPage}
        setActivePage={setCurrentPage}
        setLoader={setLoader}
        coins={coins}
        setCoinModalIsOpen={setCoinModalIsOpen}
        notificationNumber={notificationNumber}
        notifications={notifications}
        setNotifications={setNotifications}
      />

      <Footer activePage={currentPage} setActivePage={setCurrentPage} />
    </div>
  );
}

export default App;
