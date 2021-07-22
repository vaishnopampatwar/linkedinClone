import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

export default function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = ()=> {
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" width="50px" height="50px"/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network " />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar={true} title="Me"
                onClick={logoutOfApp} />
                
            </div>
        </div>
    );
}


 