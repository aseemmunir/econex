import React, { useEffect, useState } from 'react';

interface StatCounterProps {
    target?: number;
    duration?: number;
    label?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ target = 1000, duration = 2000, label = "Counter" }) => {
    const [count, setCount] = useState<number>(0); 

    const formatCount = (count: number): string => {
        if (count >= 10000) {
            return '10k'; 
        } else if (count === 5000) {
            return '5k+';
        } else {
            return Math.floor(count).toString() + '+';
        }
    };

    useEffect(() => {
        const increment = target / (duration / 16);

        const animateCounter = () => {
            setCount((prevCount) => {
                if (prevCount + increment >= target) {
                    return target;
                } else {
                    return prevCount + increment;
                }
            });
        };

        const intervalId = setInterval(animateCounter, 16);

        return () => clearInterval(intervalId); 
    }, [target, duration]);

    return (
        <div className="stats-section font-poppins">
            <div className="stat">
                <span className="text-xl text-white ps-[44px] mt-[17px]">
                    {formatCount(count)}
                </span>
                <h2 className="text-base text-white ps-[44px]">{label}</h2>
            </div>
        </div>
    );
};

export default StatCounter;
