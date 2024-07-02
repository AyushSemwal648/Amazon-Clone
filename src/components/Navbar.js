import amazon_logo from '../assets/amazon_logo.png'
import dropdown_icon from '../assets/dropdown_icon.png'
import location_icon from '../assets/location_icon.png'
import search_icon from '../assets/search_icon.png'
import india from '../assets/india.png'
import cart_icon from '../assets/shopping-cart.png'
import menu_icon from '../assets/menu_icon.png'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav className='flex items-center justify-between bg-[#131921] py-3 px-5 text-white'>
        <a href="/"><img src={amazon_logo} width="100" alt=""/></a>
        <div className="nav-country hidden sm:flex items-end ml-4 text-[13px] text-[#c4c4c4]">
          <img src={location_icon} className='h-6' alt=""/>
          <div>
            <p>Deliver to</p>
            <h1 className='text-white text-[14px]'>India</h1>
          </div>
        </div>
        <div className="nav-search flex-1 flex items-center bg-[#fff] text-[gray] max-w-5xl rounded ml-4 ">
          <div className="nav-search-category flex items-center p-4 gap-1 bg-[#e5e5e5] rounded">
            <p>All</p>
            <img src={dropdown_icon} className='h-4' alt=""/>
          </div>
          <input type="text" className="nav-search-input border-none outline-none pl-5 w-full" placeholder="Search Amazon"/>
          <img src={search_icon} className="nav-search-icon w-12 h-14 p-2 sm:w-10 bg-[#ffd64f] rounded" alt=""/>
        </div>
        <div className="nav-language hidden sm:flex items-center gap-[2px] font-semibold ml-4">
          <img src={india} width="25px" alt=""/>
          <p>EN</p>
          <img src={dropdown_icon} width="8px" alt=""/>
        </div>
        <div className="nav-text hidden sm:block ml-4">
          <p className='text-[12px]'>Hello, Sign in</p>
          <h1 className='text-[14px] flex items-center gap-1'>Account & Lists <img src={dropdown_icon} width="8px" alt=""/></h1>
        </div>
        <div className="nav-text hidden sm:block ml-4">
          <p className='text-[12px]'>Return</p>
          <h1 className='text-[14px]'>& Orders </h1>
        </div>
        <div className="nav-cart flex items-center mx-2">
          <Link to="/cart" className='flex justify-center items-center'>
            <div className='flex flex-col items-center'>
              <span className='pl-2 text-[#f08804] font-bold text-[18px]'>{cartItems.length}</span>
              <img src={cart_icon} width="35px" alt="" className='mt-[-19px]'/>
            </div>
            <h4 className='pl-1'>Cart</h4>
          </Link>
        </div>
      </nav>

      <div className="nav-bottom flex items-center gap-5 py-2 px-5 bg-[#232f3e] text-white text-[15px] overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-1 font-medium">
          <img src={menu_icon} width="25px" alt=""/>
          <p>All</p>
        </div>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Sell</p>
      </div>
    </>
  )
}

export default Navbar
