
import React, { Component } from 'react'
import Banner from '../components/Banner'
import Box from '../components/Box'

import items from "../data"
import Individualroom from '../components/Individualroom';
import Roomsfilter  from '../components/Roomsfilter';
export default class Rooms extends Component {
    
    constructor(props){
        super(props);
        this.initialstate={
             allrooms:this.formatData(items),
             filteredrooms:this.formatData(items),
             loader:false
             
        }
        this.state=this.initialstate;
    }
    formatData=(items)=>{
        let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=>{
               return  image.fields.file.url;
            })
            let desc=item.fields;
            let room={id:id,images:images,desc:desc};
            return room;
        })
        return tempItems;
    }
    filteredrooms=(state)=>{
        console.log(state);
        
         if(state){
            console.log("upper level ",state.type);
           
            if(state.type=="all" && state.capacity==1){
                
                console.log("type is all");
                var filteredrooms=this.state.allrooms;
            }
            else if(state.type!=="all" && state.capacity==1 ){
                var filteredrooms=this.state.allrooms.filter(room=>room.desc.type==state.type)
            }
            else if(state.type!=="all" && state.capacity>1 ){
                console.log("not equal to one");
                var filteredrooms=this.state.allrooms.filter(room=>room.desc.type==state.type)
                 filteredrooms=filteredrooms.filter(room=>room.desc.capacity>state.capacity)
            }
            else if(state.capacity>1){
                var filteredrooms=this.state.allrooms.filter(room=>room.desc.capacity>=state.capacity)
            }

            
                console.log("inside state.price",state.price);
                var filteredrooms=filteredrooms.filter(room=>room.desc.price<=state.price)
            
        //   if(state.breakfast){
        //     var filteredrooms=filteredrooms.filter(room=>room.desc.breakfast===true)
        //   }
        //   else if(!state.breakfast){
        //     var filteredrooms=filteredrooms.filter(room=>room.desc.breakfast===false)
        //   }
        //   else if(state.pets){
        //     var filteredrooms=filteredrooms.filter(room=>room.desc.pets===true)
        //   }
               
            
       
            
            
            console.log("filtered",filteredrooms);
            this.setState({filteredrooms,loader:false},()=>{
                console.log("After setting state",this.state.filteredrooms);
            });
        }
        // else{
        //     console.log("no type");
        //     var filteredrooms=this.state.allrooms.filter(room=>room.desc.type=="all")
            
        //     console.log("filtered",filteredrooms);
        //     this.setState({filteredrooms},()=>{
        //         console.log(this.state);
        //     });
        // }
       
       

    }
    render() {
        // var rooms=this.formatData(items);
        //  console.log("rooms",rooms);
        return (
            <div>
                 <Banner class="roombanner">
             <Box title="Our Rooms" subtitle="Comfort & Chill" linkname="Return Home" link="/" />
             </Banner>
             <Roomsfilter filteredrooms={this.filteredrooms} rooms={this.state.allrooms}></Roomsfilter>
             <h1 id="heading_2">Our Available Options</h1>
            
             <div className="rooms-list">
             {this.state.filteredrooms.length<1 &&  <h3 id="error">Sorry, No Rooms matching your search! </h3>}
                 
                 
                   
                 
           
                     
                         { this.state.filteredrooms.map((item,index)=><Individualroom key={index} room={item}/>
                         )  }
                     


                 

        
             </div>
              
                 
                 
 
            
            </div>
        )
    }
}
// import React from 'react'
// import Banner from '../components/Banner'
// import Box from '../components/Box'

// export default function Rooms() {
//     return (
//         <div>
//              <Banner class="roombanner">
//              <Box title="Our Rooms" subtitle="Return Home" link="/" />
//              </Banner>
            
//         </div>
//     )
// }


