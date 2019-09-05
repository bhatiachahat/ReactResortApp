import React, { Component } from 'react'
import items from "../data"
import Error from "./Error"
import Styledbanner from "../components/Styledbanner"
import Box from "../components/Box"
import Image from "../components/Image"

export default class SingleRoom extends Component {
    constructor(props){

        super(props);
        this.initialstate={
         
            roomname:props.match.params.roomname
          }
          this.state= this.initialstate;
       
    }
    componentWillUnmount(){
       
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


   
    render() {
      
        console.log("name is",this.state.roomname);
  
        let rooms=this.formatData(items);
        console.log(rooms);
  

      var singleroomdesc=rooms.filter(room=>room.desc.slug==this.state.roomname);
      console.log("single", singleroomdesc);
      var mainImg=singleroomdesc[0].images[0]
      var [mainImg,...defaultimg]=singleroomdesc[0].images;
      console.log("default image",defaultimg)

        if(singleroomdesc.length>=1){
            return (
                <div>
               

                  <Styledbanner img={mainImg}>
                  <Box title={singleroomdesc[0].desc.name} subtitle="Find Best for you" linkname="Return Home" link="/" />
                  </Styledbanner>
                  <section className="single-room">
                      <div className="image-section">
                      {/* {singleroomdesc[0].desc.name}
                      {singleroomdesc[0].images[0]} */}
                   
                    {
                defaultimg.map((item,index)=><Image key={index} src={item}/>
                )  
              
            }
                      </div>
                      <div className="single-room-info">
                   <article id="desc">
                       <h2>Details:-</h2>
                       <p>{singleroomdesc[0].desc.description}</p>

                   </article>
                   <article id="info">
                   <h2>Features:-</h2>
                       <h6><i class="fas fa-dollar-sign"></i>  Price : ${singleroomdesc[0].desc.price} per night</h6>
                
               
              <h6> <i class="fas fa-hotel"></i> Size :  {singleroomdesc[0].desc.size} SQFT</h6>
              <h6>
              <i class="fas fa-user-friends"></i> Max capacity :
                 {singleroomdesc[0].desc.capacity > 1 ? ` ${singleroomdesc[0].desc.capacity} people` : ` ${singleroomdesc[0].desc.capacity} person`}
              </h6>
              <h6>{singleroomdesc[0].desc.pets ? <p><i class="fas fa-cat"></i> Pets allowed</p> : "No pets allowed"}</h6>
              <h6>{singleroomdesc[0].desc.breakfast && <p><i class="fas fa-utensils"></i> Free breakfast included</p>}</h6>

                   </article>
               </div>
                  
                  </section>
                </div>
            )
        }
        else{
           return(
               <Error/>
           )
        }
     
       
    }
}
