import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Featured from './components/Featured';




function App() {
  return (
  
      <Router>
       <div>
         <div id="header">
         <Navbar/>
         </div>
        
         

<Switch>
<Route exact path="/"  component={Home} />
<Route exact path="/rooms/" component={Rooms} />
<Route  exact path='/rooms/:roomname' component={SingleRoom}/>
<Route component={Error}/>
</Switch>






    </div>
    </Router>
   
     
  
    
   
  );
}

export default App;
