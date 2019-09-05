

import React, { Component } from 'react'

export default class Roomsfilter extends Component {
    constructor(props){
        super(props);
        this.initialstate={
            type:"all",
            capacity:1,
            minprice:0,
            maxprice:600,
            price:600,
             breakfast:false,
        pets:false,
        loader:false
        }
        this.state=this.initialstate;
        
    }
    getType=(rooms)=>{
        console.log("rooms",rooms);
        var alltype=rooms.map(room=>room.desc.type);
      
              return alltype=alltype.filter((item,index)=>alltype.indexOf(item)===index);
               

    }   
    getcapacity=(rooms)=>{
        console.log("rooms ",rooms);
        var allcapacity=rooms.map(room=>room.desc.capacity);
        
      
        return allcapacity=allcapacity.filter((item,index)=>allcapacity.indexOf(item)===index);
    }

    handleChange=(event)=>{
        
        console.log("event.target.value",event.target.value);
       var value=event.type==='checkbox'? event.target.checked:event.target.value;
            this.setState({[event.target.name]:value,loader:true},()=>{
                console.log(this.state);
    this.props.filteredrooms(this.state);
            })
        
       

        // this.setState({
        //     [event.target.name]:event.target.value
        // })
    }
    
     
    render() {
        var types=this.getType(this.props.rooms);
        var capacity=this.getcapacity(this.props.rooms);
        console.log("capacity",capacity);

    types=["all",...types];
    console.log("types",types);
    
    types=types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
   capacity=capacity.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
        return (
            <div className="container">
            <div className="jumbotron">
            <h1 id="heading_3">Search Rooms</h1>
                         <hr id="hr_2"></hr>
                         <form>
                             <div className="form-group">
                                 <label for="type">Room Type</label>
                                 <select name="type" id="type" value={this.state.type} className="form-control" onChange={this.handleChange}  >
                                     {types}
            
                                 </select>
            
                             </div>
                             <div className="form-group">
                                 <label for="type">Guests</label>
                                 <select name="capacity" id="capacity" value={this.state.capacity} className="form-control" onChange={this.handleChange}  >
                                    {capacity}
            
                                 </select>
            
                             </div>
                             <div className="form-group">
                                 <label for="price">  Room price ${this.state.price}</label>
                                
                                 <input type="range" id="range" name="price" min={this.state.minprice} max={this.state.maxprice} id="price" value={this.state.price} onChange={this.handleChange} className="form-control"></input>
            
                             </div>
                             {/* <div>
                             <input type="checkbox" name="breakfast" id="breakfast" checked={this.state.breakfast} onChange={this.handleChange}></input>
                             <label for="breakfast">Breakfast</label>
                             </div> */}
                            {/* <label> */}
          {/* Is going:
          <input
            name="breakfast"
            type="checkbox"
            checked={this.state.breakfast}
            onChange={this.handleChange} />
        </label>
                             <div>     <input type="checkbox" name="pets" id="pets" checked={this.state.pets} onChange={this.handleChange}></input>
                             <label for="pets">Pets</label></div>
                             
                         */}
                             {/* <div className="form-group">
                <label for="exampleInputEmail1">City</label>
                <input type="text" name="city" 
                // value={this.state.city} 
                className="form-control" 
                // onChange={this.handleChange} 
                 placeholder="Enter city" />
                
              </div> */}
                         </form>
            
                       
            </div>
                    </div>
        )
    }
}

