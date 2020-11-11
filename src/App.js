import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './container/navbar/Navbar';
import Logo from './container/logo/Logo';
import Footer from './container/footer/Footer';
import Home from './components/home/home';
import Apt from './components/apartment/Apartment';
import Cannes from './components/cannes/Cannes';
import Beach from './components/beach/Beach';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <div>
      <Logo />
      <Navbar/>
        <Switch>
                <Route path = "/contact" component = {Contact} />
                <Route path = "/beach" component = {Beach} />
                <Route path = "/cannes" component = {Cannes} />
          <Route path = "/apartment" component = {Apt} />
          <Route path = "/" component = {Home} exact />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;

