import React, { Component } from 'react';
import axios from 'axios';



class SearchBox extends Component {

   state = {
      data: null
   }

   componentDidMount() {
      axios.get('')
   }

   render() {
      return(
         <div className="main">
            <div className="searchbox">
                  <input type="text" placeholder="Search Netflix Shows" />
            </div>
            <div className="api-dump">

            </div>
         </div>
      )
   }
}

export default SearchBox;