
//first method

// import React from 'react'
// import RoomsList from './RoomsList'
// import RoomsFilter from './RoomsFilter'
// import {  RoomConsumer } from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value=>{
//              if(value.rooms.length>0){  
//              console.log(value);
               
//              }
//              const{rooms,sortedRooms,loading}=value;
//              if(loading){
//                  return <Loading/>
//              }
                
//                 return (   <div>
//                             <RoomsFilter/>
//                             <RoomsList/>
//                          </div>
//                 );
//             }}

      
//         </RoomConsumer>
//     )
// }




//second method
import React from 'react'
import { withRoomConsumer } from '../context'
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

function RoomsContainer({context}) {
    const{loading,sortedRooms,rooms}=context;
    if(loading){
        return <Loading/>
    }
    
    return (   <div>
                <RoomsFilter  rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
                </div>
    );
}


export default withRoomConsumer( RoomsContainer);

