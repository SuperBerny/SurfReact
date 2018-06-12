import React, { Component } from 'react';

class SearchBox extends Component {
   render() {
      return(
         <div className="searchbox">
               <input type="text" placeholder="Search Netflix Shows" />
         </div>
      )
   }
}

export default SearchBox;