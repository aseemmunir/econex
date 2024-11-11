import React, { useEffect } from 'react'
import { useState } from 'react'

const Review = () => {
    const [count,setCount] = useState(0);{
        const target = 1500;
        const duration = 200;

        useEffect(() => {
            const increment = target / (duration / 1);
            
            const animateCounter = () => {
                setCount((prevCount) => {
                    if (prevCount + increment >= target) {
                        return target;  
                    } else {
                        return prevCount + increment;
                    }
                });
            };
    
            const intervalId = setInterval(animateCounter, 17);
    
            return () => clearInterval(intervalId);
        }, [target, duration]);
    
        return (
            <div className="stats-section font-poppins">
                <div className="stats">
                    <div className='text-xl text-white ps-[44px]'>{Math.floor(count)}+</div>
                    <h2 className='text-base text-white ps-[44px]'>5 Star Reviews</h2>
                </div>
            </div>
        );
    };
}    
export default Review
