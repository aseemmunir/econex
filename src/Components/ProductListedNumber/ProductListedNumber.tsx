
import React, { useEffect, useState } from 'react';

const ProductListedNumber= () => {
    const [count, setCount] = useState(0); 
    const target = 10000;                   
    const duration = 4000;                  

    useEffect(() => {
        const increment = target / (duration / 20);
        
        const animateCounter = () => {
            setCount((prevCount) => {
                if (prevCount + increment >= target) {
                    return target;  
                } 
                else {
                    return prevCount + increment;
                }
            });
        };

        const intervalId = setInterval(animateCounter, 16);

        return () => clearInterval(intervalId);
    }, 
        [target, duration]);

    const displayCount = count >= 10000 ? "10k+" : Math.floor(count);

    return (
        <div className="stats-section font-poppins">
            <div className="stat">
                <span className='max-w-[200px] text-xl text-white ps-[44px] mt-[17px]'>{displayCount}</span>
                <h2 className='text-base text-white ps-[44px]'>Product List</h2>
            </div>
        </div>
    );
};

export default ProductListedNumber;
