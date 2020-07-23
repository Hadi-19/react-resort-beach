import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Title from './Title';
import Room from './Room';

export class FeaturedRooms extends Component {
    static contextType=RoomContext;
    render() {
        const {loading,featuredRooms}=this.context;
        console.log(featuredRooms[0]);
        
       
        const rooms= featuredRooms.map(room=>{
             return <Room key={room.id} room={room}/>
        })
         
        

        return (
            <section className="featured-rooms">
                <Title title=" featured rooms"/>
                <div className="featured-rooms-center">
                {loading?<Loading/>:rooms}
                </div>
            
                
            </section >
        )
    }
}

export default FeaturedRooms
