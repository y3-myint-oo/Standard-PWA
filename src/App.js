import React, { Component } from 'react';
import './App.css';

//Data Module
import DataList from './components/data/dataList';
import DataFrame from './components/data/dataFrame';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Redux [Data]</h2>
          <DataList />
          <DataFrame />
      </div>
    );
  }
}

export default App;
