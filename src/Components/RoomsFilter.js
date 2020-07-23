import React from 'react';
import {useContext} from 'react';
import { RoomContext } from '../context';
import Title from './Title';
//get all unique values

const getUnique=(items,value)=>{
    return[...new Set(items.map(item=> item[value]))];

}


export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const{handleChange,price,capacity,type,minPrice,maxPrice,minSize,maxSize,pets,breakfast}=context;

    //get unique types
    let types=getUnique(rooms,'type');
    //add "all"
    types=['all',...types];
    //map to jsx
    types=types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    //get unique people and map to jsx
    let people=getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form  className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" className="form-control" value={type} onChange={handleChange}>
                        {types}
                    </select>
                </div>

                {/*select type end */}

                {/* guest  */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" className="form-control" value={capacity} onChange={handleChange}>
                        {people}
                    </select>
                </div>

                {/* guest end */}
                 {/* room price  */}
                 <div className="form-group">
                    <label htmlFor="breakfast">room price ${price}</label>
                    <input type="range" min={minPrice} max={maxPrice} name="price" id="price" className="form-control" value={price} onChange={handleChange}/>
                        
                </div>

                {/* room price ends*/}

                 {/* room size  */}
                 <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                    <input type="number"  name="minSize" id="size" className="size-input" value={minSize} onChange={handleChange}/>
                    <input type="number"  name="maxSize" id="size" className="size-input" value={maxSize} onChange={handleChange}/>
                    </div>
                    
                        
                </div>

                {/* room size ends*/}

                {/* extras  */}
                <div className="form-group">
                    <div className="single-extra">

                    <input type="checkbox" name="breakfast" id="breakfast"  checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">Breakfast</label>   
                    </div>

                    <div className="single-extra">

<input type="checkbox" name="pets" id="pets"  checked={pets} onChange={handleChange}/>
<label htmlFor="pets">pets    </label>   
</div>
                </div>

                {/* extras end */}
            </form>
            
        </section>
    )
}
