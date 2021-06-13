import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  options = ['main', 'about'];

  render() {
    return (
      <div>
        <Header options={this.options} />
        <Footer options={this.options} />
      </div>
    );
  }
}

export default App;
