import StatCounter from '../StatCounter/StatCounter';
import '../Stats/Stats.css';


const Stats = () => {
    return (
        <div className="container mx-auto section-bg w-[100%] h-[402px] mt-[117px]">
            <div className="content ps-[44px] pt-[92px] pr-[60px] flex flex-col">
                <h2 className='text-xl text-white'>Our Stats, A Snapshot of Success!</h2>
                <p className='text-xs text-white pt-1'>Dive into the numbers that tell our story. Discover how our dedication to excellence has translated into remarkable growth and customer satisfaction.</p>
                <div className='flex justify-between mt-[20px]'>
                    <StatCounter target={7000} duration={3000} label="Orders delivered" />
                    <div className='gradient-line'></div>
                    <StatCounter target={5000} duration={3000} label="Happy customers" />
                    <div className='gradient-line'></div>
                    <StatCounter target={10000} duration={3000} label="Product List" />
                    <div className='gradient-line'></div>
                    <StatCounter target={1500} duration={3000} label="5 Star Reviews" />
                </div>
            </div> 
        </div>
       
    );
};

export default Stats;
