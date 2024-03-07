import Banner from "../Banner/Banner";
import EventDetails from "../EventDetails/EventDetails";
import EventDetailsOffline from "../EventDetails/EventDetailsOffline";
import EventStory from "../EventStory/EventStory";
import Faq from "../FAQ/Faq";
import Speakers from "../Speakers/Speakers";
import Sponsors from "../Sponsors/Sponsors";
import PreviousEvent from "../previous/PreviousEvent";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EventStory></EventStory>
            
            <EventDetails></EventDetails>
            <EventDetailsOffline></EventDetailsOffline>
            <Speakers></Speakers>
            <Faq></Faq>
            <PreviousEvent></PreviousEvent>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;