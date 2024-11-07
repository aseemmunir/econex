import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import healthpng from "../../Assets/healthProduct.svg"
import watchpng from "../../Assets/watch.svg"
import sportpng from "../../Assets/sport.svg"
import mealpng from "../../Assets/Meal.svg"
import fesionpng from "../../Assets/fesion.svg"
import Recketsvg from "../../Assets/Recket.svg"


const Header = () =>  {
  return (
    <article className='container px-4 mx-auto font-poppins'>
      <article className='grid grid-cols-12 gap-4'>
        <article className="relative col-span-6 header-section w-[100%] h-[381px] bg-no-repeat bg-cover	bg-right rounded-2xl">
          <div className='pt-4 ps-4 content'>
            <h2 className='max-w-[430px]  lg:text-lg md:text-base'>Upgrade Your Home with Trendy Decor at 25% Off</h2>
            <p className='max-w-[332px] pt-1 text-sm text-secondary mt-1'>100+ Collections for your outfit <br />inspirations in this summer</p>
            <button className='px-3 py-2 mt-1 text-white rounded-full bg-grey'>VIEW COLLECTIONS</button>
          </div>
        </article>
        <NavLink  className='col-span-3 health-section w-[100%] h-[381px] relative bg-no-repeat bg-cover	bg-right rounded-2xl' to='/'>
          <article className='pt-4 ps-4 content'>
            <h2 className='max-w-[286px] lg:text-lg md:text-base'>Enhance Beauty, Elevate Health</h2> 
            <figure className=''>
              <img className='health-product max-w-fulll mx-auto  md:w-3/4 absolute product right-[-5px]  bottom-[-5px]' src={healthpng} alt="" />
            </figure>
          </article>
        </NavLink>
        <NavLink to='/' className='col-span-3 tech-section relative w-[100%] h-[381px] bg-no-repeat bg-cover	bg-right rounded-2xl'>
          <article className='pt-4 ps-4 content'>
            <h2 className='max-w-[297px] text-lg'>Upgrade Life with Advanced Tech</h2> 
            <figure className='product '>
              <img className='w-full mx-auto md:w-5/6  absolute right-[-5px] bottom-[-15px] watch-product ms-2' src={watchpng} alt="" />
            </figure>
          </article>
        </NavLink>

          
        <NavLink to='/'className="items-stretch col-span-3 groceries-section relative w-[100%] h-[330px] bg-no-repeat bg-cover	bg-right rounded-2xl">
            <article className='pt-4 ps-4 content'>
              <h2 className='max-w-[305px] text-lg'>Groceries for Every Meal</h2>
              <figure className='product max-w-full mx-auto md:w-3/4 absolute right-[-5px] bottom-[-21px]'>
                <img className='mb-2 meal-product' src={mealpng} alt="" />
              </figure>
            </article>
        </NavLink>
          <article className="relative items-stretch col-span-6 sport-section w-[100%] h-[330px] bg-no-repeat bg-cover bg-right rounded-2xl">
          <div className="flex">
            <article className="sport-content ps-4 pt-4">
              <h2 className="max-w-[389px] text-lg">
                Outfit Your Adventure: Sports & Outdoors
              </h2>
              <p className="max-w-[332px] text-secondary mt-1">
                100+ Collections for your outfit inspirations in this summer
              </p>
              <button className="px-3 py-2 mt-1 text-white rounded-full bg-grey">
                VIEW COLLECTIONS
              </button>
            </article>
            <figure className="image max-w-full mx-auto lg:w-1/2 md:w-3/4 bottom-2 right-3 absolute">
              <img className="recket-img" src= { Recketsvg } alt="" />
            </figure>
          </div>
        </article>
        <NavLink to='/' className="fesion-section items-stretch col-span-3 relative w-[100%] h-[330px] bg-no-repeat bg-cover bg-right rounded-2xl">
            <article className='pt-4 content ps-4 '>
              <h2 className='pb-2 text-lg'>Where Fashion Meets Personality</h2>
              <figure className='product-img w-full mx-auto lg:w-1/2 md:w-3/4 absolute right-[-10px] bottom-[-9px]'>
                <img className='feshion-product' src={fesionpng} alt="" />
              </figure>
          </article>
        </NavLink>
      </article>
    </article>
  )
};

export default Header;

