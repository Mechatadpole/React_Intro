import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
// Notice we're importing the specific part of the package BrowserRouter but we're calling it Router. This is a common rename of the import, because developers are lazy and would rather type Router later, instead of BrowserRouter. Note that this is how you can change the name of specific imports.

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;