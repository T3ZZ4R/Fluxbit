import menu from"../../css/svg/side_navigation_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import logo from'../../css/svg/logo.png'
import search from '../../css/svg/search_17dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.svg'
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

    <span className="menu-btn-tooltip">
      Menu
    </span>
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