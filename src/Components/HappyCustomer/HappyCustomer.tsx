
import React, { useEffect, useState } from 'react';

const HappyCustomer = () => {
    const [count, setCount] = useState(0); 
    const target = 5000;                   
    const duration = 2000;                  

    useEffect(() => {
        const increment = target / (duration / 10);
        
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
                <span className='text-xl text-white ps-[44px] mt-[17px]'>{Math.floor(count)}+</span>
                <h2 className='text-base text-white ps-[44px]'>Happy customers</h2>
            </div>
        </div>
    );
};

export default HappyCustomer;
