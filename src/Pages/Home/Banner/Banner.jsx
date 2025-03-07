import { Link } from "react-router-dom";
import Time from "../countdown/Time";

const Banner = () => {
    const backgroundImageUrl = 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    return (
        <div
            className={`bg-cover bg-center  w-full   ${backgroundImageUrl} lg:relative relative`}
            style={{ backgroundImage: backgroundImageUrl }}
        >
            <div className="flex justify-center items-center lg:h-full text-center">
                <div className="bg-gray-800/20 text-white p-8 mt-48">
                    <h1 className="text-3xl lg:text-5xl font-bold">Career Event 2025</h1>
                    <p className="mt-2 text-xl font-semibold">January 22, 2025</p>
                    <p className="mt-2">4000 SEATS • 10 SPEAKERS • DHAKE, BANGLADESH</p>
                    <Link to='/form'><button className="mt-4 bg-white text-black px-6 py-2 border-red-600 rounded-full font-bold hover:bg-red-600 p-8">
                        Book Now
                    </button></Link>
                   
                </div>
                
            </div>
            <Time></Time>
        </div>
    );
};

export default Banner;