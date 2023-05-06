import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css";
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
function Header() {

 const user = useSelector(selectUser);

  return (
    <div className="header">
        <div className="header__left">
            <div className="header__logo">
               <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""/>
            </div>

            <div className="header__search">
                     <SearchIcon/>
                     <input type="text" placeholder="Search"/>

                  
            </div>
        </div>

        <div className="header__right">
              <Headeroptions Icon={HomeIcon} title="Home"/>
              <Headeroptions Icon={PeopleIcon} title="My Network"/>
              <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
              <Headeroptions Icon={MessageIcon} title="Message"/>
              <Headeroptions Icon={NotificationsActiveIcon} title="Notifications"/>
              <Headeroptions avatar={Avatar} title={user.dispalyName}/>

        </div>
      
    </div>
  )
}

export default Header
