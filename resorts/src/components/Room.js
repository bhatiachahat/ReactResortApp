import React from 'react'
import {Link} from "react-router-dom"

export default function Room(props) {
    return (
    
        //           <li id="featuredrooms">

        //           <img classname="ui image" src={props.room.images[0]} /> 
        //            <div className="price-top">
        //            <p className="room-info">{props.room.desc.name}</p>
        //   <h6>${props.room.desc.price} per night</h6>
        
        // </div>
        // <Link to={`/rooms/${props.room.desc.slug}`} className="room-link">
        // More Details
        // </Link>
        
        
        // </li>
        <div id="card" >
            <div id="particular-card">
           <Link to={`/rooms/${props.room.desc.slug}`} className="room-link">
           
             <div id="image">
             <img src={props.room.images[0]} className="card-img-top" alt={props.room.desc.name}/>
             </div>
             </Link>
   
        <div id="card-body">
          <h5 className="card-title">{props.room.desc.name}</h5>
          {/* <p className="card-text">${props.room.desc.price} per night.</p> */}
          </div>
             </div>
            
         
      
       
      </div>
           
    )
}
