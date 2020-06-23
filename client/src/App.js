import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, LInk, Link } from 'react-router-dom';
import OtherPage from './otherPage';
import Fib from './Fib';
import otherPage from './otherPage';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={otherPage} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}

export default App;
