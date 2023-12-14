import React from 'react'
import './Navbar.css';
import logo_dark from '../../assets/logo-white.png';
import logo_light from '../../assets/logo-black.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_dark from '../../assets/day.png';
import toggle_light from '../../assets/night.png';



const Navbar = ({theme,setTheme}) => {

    const toggle_mode = () => {
        theme == 'dark'?setTheme('light'):setTheme('dark');
    }

  return (
    <div className='navbar'>
      <img src={theme == 'dark'?logo_dark:logo_light} alt='' className='logo'/>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search'/>
        <img src={theme == 'dark'?search_icon_dark:search_icon_light} alt="" />
      </div>
      <img onClick={()=>{toggle_mode()}} src={theme == 'dark'?toggle_dark:toggle_light} alt="" className='toggle-icon' />
    </div>
  )
}

export default Navbar
