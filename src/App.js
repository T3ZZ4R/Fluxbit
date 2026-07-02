import "./css/App.css";
import { Loader } from "./component/loader.js";
import { useEffect, useState } from "react";
import { Header } from "./component/header.js";
import { Sidebar } from "./component/sidebar.js";
import { Nav } from "./component/nav.js";
import { Main } from "./component/main.js";
import { Footer } from "./component/footer.js";
import axios from "axios";

function App() {
  const [loading, setLoader] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const [language, setLanguage] = useState("en");
  const [userNotification, setUserNOtificacion] = useState({});
   const [currentPage,setCurrentPage]=useState('home');
     const [coins, setCoins] = useState([]);
 const fetchData = async () => {
 try{    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200&page=1",
    );
    setCoins(res.data);
 }finally{  setLoader(false);}
  }
  useEffect(() => {
    fetchData();
  }, []);
  const userNOtificationHandler = (text, color = "black") => {
    setUserNOtificacion({ message: text, color: color });
    setTimeout(() => {
      setUserNOtificacion({});
    }, 3000);
  };
  return (
    <div className="App">
      {loading && <Loader />}
      <Header sideBar={sideBar} setSideBar={setSideBar} />
      <Sidebar isOpen={sideBar} setOpen={setSideBar} />
      <Nav language={language} setLanguage={setLanguage} />
      <div
        style={{
          backgroundColor: `${userNotification && userNotification.color}`,
        }}
        className={`user-notification ${userNotification.message ? "user-notification--active" : ""}`}
      >
        {userNotification.message ? userNotification.message : ""}
      </div>
      <Main currentPage={currentPage} setLoader={setLoader} coins={coins}/>
      <Footer activePage={currentPage} setActivePage={setCurrentPage}/>
    </div>
  );
}

export default App;
