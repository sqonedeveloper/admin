import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap'

export default class Dashboard extends Component {
   render() {
      return (
         <>
            <ul className="breadcrumb">
               <li>Home</li>
               <li className="active">Dashboard</li>
            </ul>
            <div className="page-title">
               <h2>Dashboard</h2>
            </div>
            <div className="page-content-wrap">
               <Row>
                  <Col md={12}>
                     <div className="panel panel-default">
                        <div className="panel-body">
                           Add class <code>.page-navigation-top</code> to{" "}
                           <code>.page-container</code> to use top navigation
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </>
      );
   }
}
