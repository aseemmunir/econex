import React, { useEffect, useState } from 'react';

const StatCounter = () => {
    const [count, setCount] = useState(0); 
    const target = 7000;                   
    const duration = 3000;                  

    useEffect(() => {
        const increment = target / (duration / 15);
        
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
                <div className='text-xl text-white ps-[44px]'>{Math.floor(count)}+</div>
                <h2 className='text-base text-white ps-[44px]'>Orders delivered</h2>
            </div>
        </div>
    );
};

export default StatCounter;
