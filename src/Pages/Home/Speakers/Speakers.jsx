import { useEffect, useState } from "react";
import SpeakerCard from "./SpeakerCard";

const Speakers = () => {
    const[speakers,setSpeakers]=useState([]);
    useEffect(()=>{
        fetch('Speakers.json')
        .then(res=>res.json())
        .then(data=>setSpeakers(data))
    },[])
    return (
        <section id="speakers">
            <h1 className="text-center font-bold text-3xl mt-20 mb-10 ">Speakers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto md:mx-auto gap-6 max-w-screen-sm me-8 ms-10">
                {
                    speakers.map(speaker=><SpeakerCard
                    key={speaker.id}
                    speaker={speaker}></SpeakerCard>)
                }
            </div>
            
        </section>
    );
};

export default Speakers;