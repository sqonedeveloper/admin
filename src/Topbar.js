import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Topbar extends Component {
   render() {
      return (
         <ul className="x-navigation x-navigation-horizontal">
            <li className="xn-logo">
               <Link to="/dashboard">ADMIN</Link>
               <Link to="/dashboard" className="x-navigation-control">
                  ADMIN
               </Link>
            </li>
            <li className="xn-openable">
               <Link to="#">
                  <span className="fa fa-files-o" />
                  <span className="xn-text">Pages</span>
               </Link>
               <ul className="animated zoomIn">
                  <li>
                     <Link to="/invoice">Invoice</Link>
                  </li>
                  <li>
                     <Link to="/profile">Profile</Link>
                  </li>
                  <li className="xn-openable">
                     <Link to="#">Timeline</Link>
                     <ul>
                        <li>
                           <Link to="/default">Default</Link>
                        </li>
                        <li>
                           <Link to="/fullwidth">Full Width</Link>
                        </li>
                     </ul>
                  </li>
               </ul>
            </li>
            <li className="xn-icon-button pull-right last">
               <Link to="#">
                  <span className="fa fa-power-off" />
               </Link>
               <ul className="xn-drop-left animated zoomIn">
                  <li>
                     <Link to="/lockscreen">
                        <span className="fa fa-lock" /> Lock Screen
                     </Link>
                  </li>
                  <li>
                     <Link to="#" className="mb-control" data-box="#mb-signout">
                        <span className="fa fa-sign-out" /> Sign Out
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
      );
   }
}
