import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";

export default class Lists extends Component {
   constructor() {
      super();

      this.state = {
         checkboxValues: ["1", "2"],
         checkboxSelected: [],
      };

      this._onChange = this._onChange.bind(this);
   }

   _onChange(e) {
      const { name, value, checked, type } = e.target;
      const { checkboxValues, checkboxSelected } = this.state;

      if (type === "checkbox") {
         if (name === "checkall") {
            if (checked) {
               let setChecked = [];
               for (let i = 0; i < checkboxValues.length; i++) {
                  setChecked.push(checkboxValues[i]);
               }

               this.setState({ checkboxSelected: setChecked });
            } else {
               this.setState({ checkboxSelected: [] });
            }
         } else {
            if (checked) {
               this.setState({ checkboxSelected: checkboxSelected.concat(value) });
            } else {
               let index = checkboxSelected.indexOf(value)
               checkboxSelected.splice(index, 1)
               
               this.setState({ checkboxSelected: checkboxSelected })
            }
         }
      }
   }

   render() {
      const { checkboxSelected } = this.state;

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
                        <div className="panel-body clearfix">
                           <Search />
                           <Filter />
                           <table className="widefat fixed table-list">
                              <thead>
                                 <tr>
                                    <th className="check-column">
                                       <input
                                          name="checkall"
                                          onChange={this._onChange}
                                          type="checkbox"
                                       />
                                    </th>
                                    <th className="gravatar">
                                       <span className="fa fa-camera-retro" />
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
                                       <input
                                          value="1"
                                          type="checkbox"
                                          onChange={this._onChange}
                                          checked={
                                             checkboxSelected.indexOf("1") !==
                                             -1
                                                ? true
                                                : false
                                          }
                                       />
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
                                             <Link title="Edit" to="#">
                                                Edit
                                             </Link>{" "}
                                             |{" "}
                                          </span>
                                          <span>
                                             <Link to="#" title="Print">
                                                Print
                                             </Link>{" "}
                                             |{" "}
                                          </span>
                                          <span>
                                             <Link
                                                to="#"
                                                title="Delete"
                                                className="delete"
                                             >
                                                Delete
                                             </Link>{" "}
                                          </span>
                                       </div>
                                    </td>
                                    <td>dick.barslow@example.com</td>
                                    <td>UI Developer</td>
                                    <td>2020/06/06</td>
                                    <td>Rating</td>
                                 </tr>
                                 <tr>
                                    <th className="check-column">
                                       <input
                                          value="2"
                                          type="checkbox"
                                          onChange={this._onChange}
                                          checked={
                                             checkboxSelected.indexOf("2") !==
                                             -1
                                                ? true
                                                : false
                                          }
                                       />
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
                                             <Link title="Edit" to="#">
                                                Edit
                                             </Link>{" "}
                                             |{" "}
                                          </span>
                                          <span>
                                             <Link to="#" title="Print">
                                                Print
                                             </Link>{" "}
                                             |{" "}
                                          </span>
                                          <span>
                                             <Link
                                                to="#"
                                                title="Delete"
                                                className="delete"
                                             >
                                                Delete
                                             </Link>{" "}
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
