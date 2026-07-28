import css from './Header.css'
import menu from"./icons/sidebar.svg"
import logo from'./icons/logo.png'
import search from './icons/search.svg'
export const Header=(props)=>{return(<header>
   <div className="header-left">
  <button
    name="menuButton"
    className="header-menu-btn"
    onClick={() => {
      props.setSideBar(!props.sideBar);
    }}
  >
    <img src={menu} alt="menu-button" />

  
  </button>
</div>
    <div className='header-center'>
    <img src={logo} alt="logo"></img>
      </div>
  <div className='header-right'>
    <div className="header-search">
  <input className="header-search-input" placeholder="Search"></input>
  <button className='header-search-logo'>
  <img  src={search} alt="Search"></img>
   </button> </div>
    </div>
    </header>
)}