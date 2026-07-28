import "./css/App.css";
import { Loader } from "./components/ui/Loader/Loader.jsx";
import { useEffect, useState } from "react";
import { Header } from "./components/layout/Header/Header.jsx";
import { Sidebar } from "./components/layout/Sidebar/Sidebar.jsx";
import { Nav } from "./components/layout/Nav/Nav.jsx";
import { Main } from "./components/main.js";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import { CoinList } from "./components/ui/Coinlist/Coinlist.jsx";
import axios from "axios";

function App() {
  const [loading, setLoader] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const [language, setLanguage] = useState("en");
  const [userNotification, setUserNOtificacion] = useState({});
  const [currentPage, setCurrentPage] = useState("home");
  const [coins, setCoins] = useState([]);
  const [coinModalIsOpen, setCoinModalIsOpen] = useState(false);
const [selectedCoin,setSelectedCoin]=useState(null);
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
  }, []);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [coinModalIsOpen]);
  const userNOtificationHandler = (text, color = "black") => {
    setUserNOtificacion({ message: text, color: color });
    setTimeout(() => {
      setUserNOtificacion({});
    }, 3000);
  };
  return (
    <div className="App">
      {coinModalIsOpen ? (
        <CoinList coins={coins} setCoinModalIsOpen={setCoinModalIsOpen} setSelectedCoin={setSelectedCoin}/>
      ) : (
        ""
      )}
      {loading && <Loader />}
      <Header sideBar={sideBar} setSideBar={setSideBar} />
      <Sidebar isOpen={sideBar} setOpen={setSideBar} setCurrentPage={setCurrentPage} />
      <Nav language={language} setLanguage={setLanguage} />
      <div
        style={{
          backgroundColor: `${userNotification && userNotification.color}`,
        }}
        className={`user-notification ${userNotification.message ? "user-notification--active" : ""}`}
      >
        {userNotification.message ? userNotification.message : ""}
      </div>
      <Main
      selectedCoin={selectedCoin}
      setSelectedCoin={setSelectedCoin}
        currentPage={currentPage}
        setActivePage={setCurrentPage}
        setLoader={setLoader}
        coins={coins}
        setCoinModalIsOpen={setCoinModalIsOpen}
      />
      <Footer activePage={currentPage} setActivePage={setCurrentPage} />
    </div>
  );
}

export default App;
