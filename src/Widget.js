import React from 'react'
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';
function Widget() {
  return (
    <div className="widget">
         <div className="widget__top">
         <div className="widget__header">
                <h4>Linkedin News</h4>
                <InfoIcon/>
         </div>
         <div className="widget__body">
            <ul className="widget__options">
                <li>
                    <h4>slaying job search fees</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>

                <li>
                    <h4> A two pizza rule for eating</h4>
                    <p>3d ago * 2,65 readers</p>
                </li>
            </ul>
            </div>
         </div>
      
    </div>
  )
}

export default Widget
