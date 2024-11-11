import React from 'react'
import './Stats.css'
import StatCounter from '../StatCounter/StatCounter'
import HappyCustomer from '../HappyCustomer/HappyCustomer'
import Product from '../Product/Product'
import Review from '../Review/Review'

const Stats = () => {
  return (
    <div className='container font-poppins mx-auto mt-4 section-bg w-[100%] h-[402px] '>
        <h2 className='text-xl text-white ps-[44px] pt-[92px]'>Our Stats, A Snapshot of Success!</h2>
        <p className='text-xs pt-1 pb-2 text-white ps-[44px]'>Dive into the numbers that tell our story. Discover how our dedication to excellence has translated into remarkable growth and customer satisfaction.</p>
        <div className='flex mt-4'>
            <div className='flex gap-5'>
                <StatCounter />
                <div className="gradient-line"></div>
            </div>
            <div className='flex gap-6 ps-3'>
                <HappyCustomer/>
                <div className="gradient-line"></div>
            </div>
            <div className='flex gap-6'>
                <Product/>
                <div className="gradient-line"></div>

            </div>
                <Review/>
        </div>   
    </div>
  )
}

export default Stats;
