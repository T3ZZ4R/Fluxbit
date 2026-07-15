import { History } from "./pages/history"
import { Home } from "./pages/home"
import { Markets } from "./pages/markets"
import { Trade } from "./pages/trade"
import { Wallet } from "./pages/wallet"

export const Main=(props)=>{
    return(<div className="main">
        {props.currentPage==='home'&&<Home setLoader={props.setLoader} coins={props.coins}/>}
         {props.currentPage==='markets'&&<Markets setCoinModalIsOpen={props.setCoinModalIsOpen}/>}
          {props.currentPage==='trade'&&<Trade  setCoinModalIsOpen={props.setCoinModalIsOpen}/>}
           {props.currentPage==='wallet'&&<Wallet setActivePage={props.setActivePage}/>}
            {props.currentPage==='history'&&<History/>}
    </div>)
}