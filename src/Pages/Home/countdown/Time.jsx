
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const Time = () => {
  // Renderer callback with condition
  const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      // Render a countdown
      return <div className=" text-center p-8 gap-4">
      <p className="md:ms-24 lg:ms-32 rounded-lg lg:w-3/4 lg:absolute lg:-bottom-12 lg:mx-72 lg:text-2xl absolute -bottom-14 mr-8 text-xs shadow-lg shadow-indigo-200 bg-gradient-to-r from-purple-600 to-red-600 p-8">
         <span className="text-xl md:text-4xl font-bold">{days} <span className="text-sm">Days</span></span> :
         <span className="text-xl md:text-4xl font-bold">{hours} <span className="text-sm">Hours</span> </span> :
         <span className="text-xl md:text-4xl font-bold">{minutes} <span className="text-sm">Minutes</span> </span> :
         <span className="text-xl md:text-4xl font-bold">{seconds} <span className="text-sm">Seconds</span> </span>
      </p>
      
  </div>
    }
  };

  return (
    <div>
      
      <Countdown
        date={Date.now() + 1000000000} // Countdown for 5 seconds from now
        renderer={renderer}
      />
    </div>
  );
};
ReactDOM.render(<Time />, document.getElementById('root'));

export default Time;

