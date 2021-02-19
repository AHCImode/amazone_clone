import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import  ShoppingBasketIcon  from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className='header'>
            <img  
                className="header__logo"
                src="http://www.pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div
            className="header_search">
                <input
                className="header_searchInput"
                type="Text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

          <div className='header__nav'>
            <span
            className='header__optionLineOne'>Hello Guest</span>
            <span
            className='header__optionLineTwo'>Sign In</span>
            
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

          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header_BasketCount'>0</span>
          </div>
          

        </div>
        
    )
}

export default Header
