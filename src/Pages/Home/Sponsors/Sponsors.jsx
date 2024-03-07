import { useEffect, useState } from "react";
import SponsorCard from "./SponsorCard";
import Marquee from "react-fast-marquee";



const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    useEffect(() => {
        fetch('Sponsors.json')
            .then(res => res.json())
            .then(data => setSponsors(data))
    }, [])
    return (
        <div className="">
            <h1 className="font-bold text-center text-3xl mt-20">Our Partners</h1>
        <Marquee>
            <div className="text-center m-12">
                <div className="grid grid-cols-6 lg:mx-auto gap-20 ">
                    {
                        sponsors.map(sponsor => <SponsorCard
                            key={sponsor.id}
                            sponsor={sponsor}></SponsorCard>)
                    }
                </div>

            </div>
        </Marquee>
        </div>
    );
};

export default Sponsors;