

const EventCard = ({event}) => {
    return (
        <div className="card w-52 h-76 bg-gray-100 shadow-lg shadow-purple-200">
            
  <figure><img className="h-42 w-42" src={event.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-lg">{event.title}</h2>
    <p className="text-xs">{event.description}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    );
};

export default EventCard;