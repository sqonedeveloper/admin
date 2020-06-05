import React, { Component } from "react";

export default class Dashboard extends Component {
   render() {
      return (
         <>
            <ul className="breadcrumb">
               <li>
                  <a href="/#">Home</a>
               </li>
               <li>
                  <a href="/#">Layouts</a>
               </li>
               <li className="active">Navigation Top</li>
            </ul>
            <div className="page-title">
               <h2>
                  <span className="fa fa-arrow-circle-o-left"></span> Navigation
                  Top
               </h2>
            </div>
            <div className="page-content-wrap">
               <div className="row">
                  <div className="col-md-12">
                     <div className="panel panel-default">
                        <div className="panel-body">
                           Add class <code>.page-navigation-top</code> to{" "}
                           <code>.page-container</code> to use top navigation
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
