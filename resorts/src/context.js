import React, { Component } from 'react'
import items from "../src/data"
const RoomContext=React.createContext();



 class RoomProvider extends Component {
     constructor(props){
         super(props);
         this.state={
             rooms:[]
         }
     }
    componentDidMount(){
                let rooms=this.formatData(items);
                console.log("rooms",rooms);
              let featuredRooms=rooms.filter(room=>room.desc.featured==true);
                console.log("featured rooms",featuredRooms);
                this.setState({rooms},()=>{
                    console.log(this.state);
                })

        
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
        return (
            <RoomContext.Provider value={this.state.rooms}>
                {/* {this.props.children} */}
            </RoomContext.Provider>
              )
    }
}
const RoomConsumer=RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext};
