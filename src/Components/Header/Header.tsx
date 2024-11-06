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
        <article className="col-span-6 header-section">
          <div className='pt-4 ps-4 content'>
            <h2 className='max-w-[430px] text-lg'>Upgrade Your Home with Trendy Decor at 25% Off</h2>
            <p className='max-w-[332px] pt-1 text-sm text-secondary'>100+ Collections for your outfit <br />inspirations in this summer</p>
            <button className='px-3 py-2 mt-1 text-white rounded-full bg-grey'>VIEW COLLECTIONS</button>
          </div>
        </article>
        <NavLink  className='col-span-3 health-section' to='/'>
          <article className='pt-4 ps-4 content'>
            <h2 className='max-w-[286px] text-lg'>Enhance Beauty, Elevate Health</h2> 
            <figure className='product'>
              <img className='mb-1 health-product' src={healthpng} alt="" />
            </figure>
          </article>
        </NavLink>
        <NavLink to='/' className='col-span-3 tech-section'>
          <article className='pt-4 ps-4 content'>
            <h2 className='max-w-[297px] text-lg'>Upgrade Life with Advanced Tech</h2> 
            <figure className='product w-[270px]'>
              <img className='watch-product ms-2' src={watchpng} alt="" />
            </figure>
          </article>
        </NavLink>

          
        <NavLink to='/'className="items-stretch col-span-3 groceries-section">
            <article className='pt-4 ps-4 content'>
              <h2 className='max-w-[305px] text-lg'>Groceries for Every Meal</h2>
              <figure className='product right-4'>
                <img className='mb-2 meal-product' src={mealpng} alt="" />
              </figure>
            </article>
        </NavLink>
          <article className="relative items-stretch col-span-6 sport-section">
          <div className="flex">
            <article className="sport-content ps-4">
              <h2 className="max-w-[389px] text-lg">
                Outfit Your Adventure: Sports & Outdoors
              </h2>
              <p className="max-w-[332px] text-secondary">
                100+ Collections for your outfit inspirations in this summer
              </p>
              <button className="px-3 py-2 mt-1 text-white rounded-full bg-grey">
                VIEW COLLECTIONS
              </button>
            </article>
            <figure className="image">
              <img className="recket-img" src= { Recketsvg } alt="" />
            </figure>
          </div>
        </article>
        <NavLink to='/' className="items-stretch col-span-3">
          <article className="fesion-section">
            <article className='pt-4 content ps-4'>
              <h2 className='pb-2 text-lg'>Where Fashion Meets Personality</h2>
              <figure className='product-img w-[176px] right-4'>
                <img className='feshion-product' src={fesionpng} alt="" />
              </figure>
          </article>
        </article>
        </NavLink>
      </article>
    </article>
  )
};

export default Header;

