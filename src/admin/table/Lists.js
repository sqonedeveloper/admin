import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";

export default class Lists extends Component {
   render() {
      return (
         <>
            <ul className="breadcrumb">
               <li>Home</li>
               <li>Admin</li>
               <li className="active">Table</li>
            </ul>
            <div className="page-title">
               <h2>Table</h2>
            </div>
            <div className="page-content-wrap">
               <Row>
                  <Col md={12}>
                     <div className="panel panel-default">
                        <div className="panel-body">
                           <table className="widefat fixed table-list">
                              <thead>
                                 <tr>
                                    <th className="check-column">
                                       <input type="checkbox" />
                                    </th>
                                    <th className="gravatar">
                                       <span className="fa fa-camera-retro"></span>
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Job</th>
                                    <th>Posted</th>
                                    <th>Rating</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th className="check-column">
                                       <input type="checkbox" />
                                    </th>
                                    <td className="gravatar">
                                       <LazyLoadImage
                                          effect="blur"
                                          src="https://secure.gravatar.com/avatar/53bb90b1488815d64cbd3ef574e75f76?s=36&amp;d=mm&amp;r=g"
                                          className="avatar avatar-36 photo"
                                          height="36"
                                          width="36"
                                       />
                                    </td>
                                    <td>
                                       Dick Barslow
                                       <div className="row-actions">
                                          <span className="edit">
                                             <a title="Edit" href="">
                                                Edit
                                             </a>{" "}
                                             |{" "}
                                          </span>
                                          <span>
                                             <a href="" title="Print">
                                                Print
                                             </a>{" "}
                                             |{" "}
                                          </span>
                                          <span>
                                             <a
                                                href=""
                                                title="Delete"
                                                className="delete"
                                             >
                                                Delete
                                             </a>{" "}
                                          </span>
                                       </div>
                                    </td>
                                    <td>dick.barslow@example.com</td>
                                    <td>UI Developer</td>
                                    <td>2020/06/06</td>
                                    <td>Rating</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </>
      );
   }
}
