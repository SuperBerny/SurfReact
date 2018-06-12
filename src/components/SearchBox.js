import React, { Component } from 'react';
import axios from 'axios';

import apiKey from '../api';

let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=the+man+in+the+high+castle`;

class SearchBox extends Component {

   state = {
      ajaxErrored: false,
      data: null
   }

   componentDidMount() {
   axios.get(url)
      .then(response => {
         const data = response;
         console.log(data);
         this.setState({
            data: response
         });
      })
      .catch(error => {
         console.log(error);
         this.setState({
            ajaxErrored: true
         });
      })
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