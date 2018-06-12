import React, { Component } from 'react';

//Import Styles
import './main.css';

//Import Components
import SearchBox from './components/SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
      </div>
    );
  }
}

export default App;
