import React, {Component} from 'react';
// import L from 'leaflet';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

import SignPage from './components/Auth';
import MapPage from './components/Map';
import MainNav from './components/Navigation/MainNav';

class App extends Component {

  render(){
   
  return (
    <BrowserRouter>
      <MainNav />
    <Switch>
    <Redirect from="/" to="/signup" exact />
    <Route path="/signup" component={SignPage}/>
    <Route path="/map" component={MapPage}/>
    </Switch>
    </BrowserRouter>
  );
}

}

export default App;

