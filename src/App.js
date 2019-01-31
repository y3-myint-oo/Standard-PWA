import React, { Component } from 'react';
import './App.css';

//Data Module
import DataList from './components/data/dataList';
import DataFrame from './components/data/dataFrame';

class App extends Component {

  componentDidMount () {
    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'none';
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      addBtn.style.display = 'block';
      addBtn.addEventListener('click', (e) => {
        addBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
          deferredPrompt = null;
        });
      });
    });
  }
  render() {
    return (
      <div className="App">
          <h2>Redux [Data]</h2>
          <DataList />
          <DataFrame />
          <button class="add-button">Add to home screen</button>
      </div>
    );
  }
}

export default App;
