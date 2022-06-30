import React from 'react'
import items from '../data'
import {useState,useEffect} from 'react'
import Room from './Room'

const RoomsContainer = () => {
    var[filteredRooms, setFilteredRooms] = useState(items);
    const [price, setPrice] = useState(200);
    const [breakfast, setBreakfast] = useState(false);
    const [capacity, setCapacity] = useState(2);
    const [petsAllowed, setPetsAllowed] = useState(false);
    
    useEffect(()=>{
        var items1=items.filter((item)=>{
            if(item.fields.price<=price)
            return item;
        })
        var items2=items1.filter((item)=>{
            if(item.fields.breakfast==breakfast)
            return item;
        })
        
        var items3=items2.filter((item)=>{
            if(item.fields.pets==petsAllowed)
            return item;
        })
        var items4=items3.filter((item)=>{
            if(item.fields.capacity<=capacity)
            return item;
        })
        filteredRooms=items4;
        if(items4.length!=items.length)
        setFilteredRooms(items4)
    },[price,petsAllowed,breakfast,capacity])
    console.log(filteredRooms);
    return (
        <div className='filter-container'>
            <section className="filter-form">
                <select aria-label="Default select example" className="size-input" onChange={(e)=>setPrice(e.target.value)}>
                    <option>Select Price</option>
                    <option value="200">Less than $200</option>
                    <option value="300">Less than $300</option>
                    <option value="400">Less than $400</option>
                    <option value="500">Less than $500</option>
                    <option value="600">Less than $600</option>
                </select>
                <select aria-label="Default select example" className="size-input" onChange={(e)=>setCapacity(e.target.value)}>
                    <option>Max Capacity</option>
                    <option value="2">Less than 2</option>
                    <option value="3">Less than 3</option>
                    <option value="4">Less than 4</option>
                    <option value="5">Less than 5</option>
                    <option value="6">Less than 6</option>
                    <option value="10">Less than 10</option>
                </select>

                Breakfast<input type="checkbox" checked={breakfast} className="form-group" onChange={(e)=>setBreakfast(!breakfast)} />
                Pets<input type="checkbox" checked={petsAllowed} className="form-group" onChange={(e)=>setPetsAllowed(!petsAllowed)} />
            </section>

            <section className="featured-rooms-center">
                {filteredRooms.map((room)=>{
                    return <Room room={room}></Room>
                })}
            </section>

        </div>

    )
}

export default RoomsContainer