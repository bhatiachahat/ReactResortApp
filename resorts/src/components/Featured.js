

import React, { Component } from 'react'
import items from "../data"
import Title from "./Title"
import Room from "./Room"



export default class Featured extends Component {
    
   
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

  
 
    render() {
        
        let rooms=this.formatData(items);
      //  console.log("rooms",rooms);
        var featuredrooms=rooms.filter(room=>room.desc.featured==true);
        //  console.log("featured rooms", featuredrooms);
      
        return (
            <section className="allrooms-list">
            
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
      
        
                <ul id="featured-list">
                {
                    featuredrooms.map((singleroom)=><Room key={singleroom.id}  room={singleroom}/>
                    ) 
                }
             </ul> 
           

            </div>
          </section>
        )
    }
}


