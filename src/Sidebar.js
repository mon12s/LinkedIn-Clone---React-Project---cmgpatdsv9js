import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
function Sidebar() {
 
 
  const user = useSelector(selectUser);
  return (

  
    <div className="sidebar">
        <div className="sidebar__profile">
               <img src="https://static.vecteezy.com/system/resources/thumbnails/002/106/276/small/geometric-black-and-gold-background-free-vector.jpg" alt=" "/>

               <div className="profile__details">
                <Avatar src={user.photoURL}/>
                
                <h4>{user.displayName}</h4>
                </div>

                <div className="profile__stats">
                  <span>Who viewed your profile</span>
                  <span className="stat__number" >20</span>
                </div>

                <div className="profile__stats">
                  <span>Connection<br/><b>Grow your Network</b></span>
                  <span className="stat__number" >150</span>
                </div>
        </div>
      <div className="sidebar_recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>branding</p>
        <p className="hash"><span>#</span>marketing</p>
        <p className="hash"><span>#</span>web development</p>
        <p className="hash"><span>#</span>programming</p>
        <p className="hash"><span>#</span>redux</p>
      </div>
    </div>
  )
}

export default Sidebar
