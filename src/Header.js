import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import  ShoppingBasketIcon  from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider"; 


function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user){
        auth.signOut();
    } 
  }
    return (
        <div className='header'>
          <Link to="/">
            <img  
                className="header__logo"
                src="http://www.pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>          
            <div
            className="header_search">
                <input
                className="header_searchInput"
                type="Text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

          <div className='header__nav'>
            <Link to={!user && '/login'}>
              <div onClick={handleAuthentication} className="header__option"/>
            <span
            className='header__optionLineOne'>Hello {!user ? 'Guest': user.email}</span>
            <span
            className='header__optionLineTwo'>{user ? ' Sign Out' : ' Sign in'}</span>
            </Link>  
          </div>
            

          <div className='header__option'>
            <span
            className='header__optionLineOne'>Returns</span>
            <span
            className='header__optionLineTwo'>Orders</span>
            
          </div>


          <div className='header__option'>
       
            <span
            className='header__optionLineOne'>Your</span>
            <span
            className='header__optionLineTwo'>Prime</span>
            
          </div>
        
        <Link to="/checkout">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header_BasketCount'>{basket?.length}</span>
          </div>
        </Link>

      </div>
        
    )
}

export default Header
