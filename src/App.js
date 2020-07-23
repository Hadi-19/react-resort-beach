import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRooms from './pages/SingleRooms';
import Error from './pages/Error';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms" exact component={Rooms}/>
          <Route path="/rooms/:slug" exact component={SingleRooms}/>
          
          <Route component={Error}/>
      </Switch>

      
    </div>
  );
}

export default App;
