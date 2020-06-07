import React, { Component } from "react";

export default class Search extends Component {
   render() {
      return (
         <p className="search-box">
            <input type="search" placeholder="Type here..." />
            <input type="submit" className="button" value="Search" />
         </p>
      );
   }
}
