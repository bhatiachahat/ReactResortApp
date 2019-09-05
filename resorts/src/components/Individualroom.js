import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Individualroom extends Component {
    render(props) {
        return (
            <div className="allrooms-list">
                
                <Link to={`/rooms/${this.props.room.desc.slug}`} className=" room-link">
                    <div className="room-image">
                    <img src={this.props.room.images[0]}/>
                    <div className="room-desc">
                    <p> {this.props.room.desc.name}</p>
                {/* <p>{this.props.room.desc.price}</p> */}
                    </div>
                    </div>
                    </Link>
                    
               
                
               
      
       
                {/* {props.room} */}
               {/* <img src={props.room.images[0]}/> */}
            </div>
        )
    }
}
