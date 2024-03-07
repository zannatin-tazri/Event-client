import { useEffect, useState } from "react";
import EventCard from "./EventCard";


const PreviousEvent = () => {
    const[events,setEvents]=useState([]);
    useEffect(()=>{
        fetch('PreviousEvent.json')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
    return (
        <div className="grid place-content-center">
            <div className="text-center m-12 ">
            <h1 className="font-bold text-3xl mt-10 mb-10">Our Previous Event</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto gap-6 ms-6 max-w-screen-sm">
                {
                    events.map(event=><EventCard
                    key={event.id}
                    event={event}></EventCard>)
                }
            </div>
            
        </div>

            
        </div>
    );
};

export default PreviousEvent;