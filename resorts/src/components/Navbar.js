import React from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
     <div>
             
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent ">
                    <Link className="navbar-brand" to="/">     <img src={logo}></img></Link>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
   
    {/* <FaAlignRight className="navbar-toggler-icon"/> */}
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/rooms/">Rooms</Link>
      
      </li>
   
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
                </div>
                
            
             
             
        
    )
}
