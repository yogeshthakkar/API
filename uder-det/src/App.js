import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './App.css';
import UserSearch from './UserSearch';
import UserInsert from './UserInsert';
import NavBar from './NavBar';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path='/insert' to="/" component={UserInsert} />
        <Route path='/search' to="/" component={UserSearch} />
      </div>
    </Router>
  );
}

export default App;
