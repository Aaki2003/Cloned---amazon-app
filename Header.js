import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
import { signOut } from 'firebase/auth';

function Header() {
    const [{ basket ,user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        
        if(user){
            signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className='header_search'>
                <input className='header_searchInput' type='text' /><SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to='/login'>
                    <div className='header_option' onClick={handleAuthentication}>
                        <span className='header_optionLineOne'>Hello guest</span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header