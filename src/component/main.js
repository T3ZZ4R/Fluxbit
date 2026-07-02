import { History } from "./history"
import { Home } from "./home"
import { Markets } from "./markets"
import { Trade } from "./trade"
import { Wallet } from "./wallet"

export const Main=(props)=>{
    return(<div className="main">
        {props.currentPage==='home'&&<Home setLoader={props.setLoader} coins={props.coins}/>}
         {props.currentPage==='markets'&&<Markets/>}
          {props.currentPage==='trade'&&<Trade/>}
           {props.currentPage==='wallet'&&<Wallet/>}
            {props.currentPage==='history'&&<History/>}
    </div>)
}