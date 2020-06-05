import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";

const Dashboard = React.lazy(() => import("./admin/Dashboard"));

export default class Admin extends Component {
   render() {
      return (
         <BrowserRouter basename="/admin">
            <div className="page-content">
               <Topbar />
               <Switch>
                  <Suspense
                     fallback={
                        <div className="page-loading-frame v2">
                           <div className="page-loading-loader">
                              <div className="dot1"></div>
                              <div className="dot2"></div>
                           </div>
                        </div>
                     }
                  >
                     <Route path="/dashboard" exact component={Dashboard} />
                  </Suspense>
               </Switch>
            </div>
            <div
               className="message-box animated fadeIn"
               data-sound="alert"
               id="mb-signout"
            >
               <div className="mb-container">
                  <div className="mb-middle">
                     <div className="mb-title">
                        <span className="fa fa-sign-out"></span> Log{" "}
                        <strong>Out</strong> ?
                     </div>
                     <div className="mb-content">
                        <p>Are you sure you want to log out?</p>
                        <p>
                           Press No if youwant to continue work. Press Yes to
                           logout current user.
                        </p>
                     </div>
                     <div className="mb-footer">
                        <div className="pull-right">
                           <a
                              href="pages-login.html"
                              className="btn btn-success btn-lg"
                           >
                              Yes
                           </a>
                           <button className="btn btn-default btn-lg mb-control-close">
                              No
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </BrowserRouter>
      );
   }
}
