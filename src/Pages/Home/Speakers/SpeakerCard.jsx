

const SpeakerCard = ({speaker}) => {
    return (
        
      <div className="avatar mx-auto mt-8">
      <div className="w-44 rounded-full transition-opacity shadow-lg shadow-purple-300">
        <img className="" src={speaker.image} />
        <div className="absolute inset-0 pt-16 bg-black bg-opacity-50 font-bold text-center opacity-0 transition-opacity delay-200 duration-700 rounded-full 
        hover:opacity-100 hover:bg-red-800/50">
              <span className="text-white text-xs">{speaker.name}</span> <br />
              <span className="text-white text-xs">{speaker.company}</span> <br />
              <span className="text-white text-xs">{speaker.designation}</span>
            </div>
      </div>
    </div>
  
    );
};

export default SpeakerCard;