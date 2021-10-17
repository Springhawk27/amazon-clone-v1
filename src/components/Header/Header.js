import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import amazon_logo from '../../images/logo/amazon_logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" src={amazon_logo} alt="" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/* logo */}
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Sajjad</span>
                    <span className="header__optionLineTwo">Sign In </span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns </span>
                    <span className="header__optionLineTwo">& Orders </span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime  </span>

                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Header;