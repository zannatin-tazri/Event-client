import { useEffect, useState } from "react";

const CountdownTimer = () => {
    // Initialize countdown time (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setSeconds(targetDate.getSeconds() + 1);

    const [countDownTime, setCountDownTime] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    // Calculate time difference
        const getTimeDifference = (countDownTime) => {
        const currentTime = new Date().getTime();
        const timeDifference = targetDate - currentTime;

        if (timeDifference < 0) {
            // Countdown reached or surpassed
            setCountDownTime({
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            });
            clearInterval();
        } else {
            const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
            const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000).toString().padStart(2, '0');

            setCountDownTime({
                days,
                hours,
                minutes,
                seconds,
            });
        }
    };

    useEffect(() => {
        // Initialize countdown
        const interval = setInterval(() => getTimeDifference(targetDate), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center p-8 gap-4">
            <p className="m-4 text-2xl">
               <span className="sm:text-sm md:text-4xl font-bold">{countDownTime.days} <span className="text-sm">Days</span></span> :
               <span className="sm:text-sm md:text-4xl font-bold">{countDownTime.hours} <span className="text-sm">Hours</span> </span> :
               <span className="sm:text-sm md:text-4xl font-bold">{countDownTime.minutes} <span className="text-sm">Minutes</span> </span> :
               <span className="sm:text-sm md:text-4xl font-bold">{countDownTime.seconds} <span className="text-sm">Seconds</span> </span>
            </p>
            
        </div>
    );
};

export default CountdownTimer;
