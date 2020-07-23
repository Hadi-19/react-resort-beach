import React, { Component } from 'react'
import items from'./data';
import Client from './Contentful';




const RoomContext=React.createContext();

 class RoomProvider extends Component {
     state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
     }


//getData
 getData= async()=>{
     try{
        let response = await Client.getEntries({content_type:"beachResortRoomStructure",
        //order:"sys.createdAt"
    order:"-fields.price"});

        let rooms=this.formatData([...response.items,...items]);
        let featuredRooms= rooms.filter(room=> room.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price));
        let maxSize=Math.max(...rooms.map(item=>item.size));

        let minPrice=Math.min(...rooms.map(item=>item.price));
        let minSize=Math.min(...rooms.map(item=>item.size));

       this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        }) 
     }
     catch(error){
        console.log(error);
        
     }
 }

     componentDidMount(){
         this.getData();
        //  let rooms=this.formatData(items);
        //  let featuredRooms= rooms.filter(room=> room.featured===true);
        //  let maxPrice=Math.max(...rooms.map(item=>item.price));
        //  let maxSize=Math.max(...rooms.map(item=>item.size));

        //  let minPrice=Math.min(...rooms.map(item=>item.price));
        //  let minSize=Math.min(...rooms.map(item=>item.size));

        // this.setState({
        //      rooms,
        //      featuredRooms,
        //      sortedRooms:rooms,
        //      loading:false,
        //      price:maxPrice,
        //      maxPrice,
        //      maxSize
        //  }) 
        
     }
     formatData=(items)=>{
         let tempItems=items.map(item=>{
             let id=item.sys.id;
             let images=item.fields.images.map(image=>
                 image.fields.file.url
             )
             let room={...item.fields,images,id}

             return room;
         })
         return tempItems;
     }

     getRoom=(slug)=>{
         const tempRooms=[...this.state.rooms];
         const room=tempRooms.find(room=>room.slug===slug)
         return room;
     }
     handleChange=event=>{
         const name=event.target.name;
         const type=event.target.type;
         const valuee=event.target.value;
         console.log(`name is: ${name}\ntype is: ${type}\nvalue is: ${valuee}`);
         const target=event.target;
         const value=event.target.type==="checkbox"? target.checked:target.value;
         this.setState({
             [name]:value
         },this.filterRooms)
         
    }
    filterRooms=()=>{
        let{rooms,type,size,minSize,maxSize,capacity,breakfast,pets,price}=this.state;
        //all the rooms
        let tempRooms=[...rooms];

        //transform values
        capacity=+capacity; //1st method
        price=parseInt(price); //2nd method

        //filter by type
        if(type!=='all'){
            tempRooms=tempRooms.filter(room=>{
                return room.type ===type
            });
        }
        //filter by capacity
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>{
                return room.capacity >=capacity
            });
        }
        //filter by price
         tempRooms=tempRooms.filter(room=>room.price<= price);
         //filter by size
         tempRooms=tempRooms.filter(room=>room.size<=maxSize&&room.size>=minSize);
        //filter by breakfast
        if(breakfast){
            tempRooms=tempRooms.filter(room=>{
                return room.breakfast === breakfast
            })
        }
         //filter by pets
         if(pets){
            tempRooms=tempRooms.filter(room=>{
                return room.pets === pets
            })
        }


        this.setState({
            sortedRooms:tempRooms,
            capacity,
            price
        })
        
    }
    //filter rooms ends
    render() {
        return (
            <RoomContext.Provider  value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer=RoomContext.Consumer;

//higher order component
export function withRoomConsumer(Component){
    return function consumerWrapper(props){
        return(
            <RoomConsumer>
                {value=> <Component {...props} context={value}/>}
            </RoomConsumer>
        )
    }
}

export  {RoomProvider,RoomConsumer,RoomContext}
