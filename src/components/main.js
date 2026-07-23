import { History } from "./pages/History/History"
import { Home } from "./pages/Home/Home"
import { Markets } from "./pages/Market/Market"
import { Trade } from "./pages/Trade/Trade"
import { Wallet } from "./pages/Wallet/Wallet"

export const Main=(props)=>{
    return(<div className="main">
        {props.currentPage==='home'&&<Home setLoader={props.setLoader} coins={props.coins}/>}
         {props.currentPage==='markets'&&<Markets setCoinModalIsOpen={props.setCoinModalIsOpen}/>}
          {props.currentPage==='trade'&&<Trade  setCoinModalIsOpen={props.setCoinModalIsOpen}/>}
           {props.currentPage==='wallet'&&<Wallet setActivePage={props.setActivePage}/>}
            {props.currentPage==='history'&&<History/>}
    </div>)
}