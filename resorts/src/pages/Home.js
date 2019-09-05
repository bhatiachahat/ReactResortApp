import React from 'react'
import Banner from '../components/Banner'
import Box from '../components/Box'
import Featured from "../components/Featured"

export default function Home() {
  
       
    return (
        <div>
         
           <Banner>
               <div className="overlay">
               <Box title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $299" linkname="See Rooms" link="/rooms">
               
              
              
 
               </Box>
               </div>
           </Banner>
           <div className="services">

</div>
<div className="rooms-list">  <Featured/></div>

{/* <img src="http://www.infinityshark.com/images_c/loader.gif" ></img>   */}
        </div>
    )
}

  
