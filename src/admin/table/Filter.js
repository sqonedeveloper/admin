import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Filter extends Component {
   render() {
      return (
         <div className="tablenav">
            <div className="actions alignleft bulkactions">
               <select>
                  <option value="-1">Bulk Actions</option>
                  <option value="delete">Delete</option>
               </select>
               <input type="submit" className="button action" value="Apply" />
            </div>
            <div className="tablenav-pages">
               <span className="displaying-num">7 items</span>
               <span className="pagination-links">
                  <Link className="prev-page button" to="#">
                     <span>Previous</span>
                  </Link>
                  <span className="paging-input">
                     <input
                        className="current-page"
                        type="text"
                        name="paged"
                        size="1"
                     />
                     <span className="tablenav-paging-text">
                        {" "}
                        of <span className="total-pages">5</span>
                     </span>
                  </span>
                  <Link className="next-page button" to="#">
                     <span className="screen-reader-text">Next</span>
                  </Link>
               </span>
            </div>
         </div>
      );
   }
}
