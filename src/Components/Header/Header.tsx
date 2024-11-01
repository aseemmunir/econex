import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import healthpng from "../../Assets/healthProduct.svg"
import watchpng from "../../Assets/watch.svg"
import sportpng from "../../Assets/sport.svg"
import mealpng from "../../Assets/Meal.svg"
import fesionpng from "../../Assets/fesion.svg"


const Header = () => {
  return (
    <article className='container mx-auto font-poppins'>
      <article className='grid grid-cols-12 gap-4'>
        <article className="col-span-6 header-section">
          <div className='p-4 content'>
            <h2 className='text-lg'>Upgrade Your Home with Trendy Decor at 25% Off</h2>
            <p className='max-w-[332px] pt-1 text-sm text-secondary'>100+ Collections for your outfit <br />inspirations in this summer</p>
            <NavLink to='/'><button className='px-3 py-2 mt-1 text-white rounded-full bg-grey'>VIEW COLLECTIONS</button></NavLink>
          </div>
        </article>
        <NavLink to='/' className='col-span-3 health-section'>
          <article className='p-4 content'>
            <h2 className='text-lg'>Enhance Beauty, Elevate Health</h2> 
            <figure className='product'>
              <img src={healthpng} alt="" />
            </figure>
          </article>
        </NavLink>
        <NavLink to='/' className='col-span-3 tech-section'>
          <article className='p-4 content'>
            <h2 className='text-lg max-w-[286px]'>Enhance Beauty, Elevate Health</h2> 
            <figure className='product w-[270px]'>
              <img src={healthpng} alt="" />
            </figure>
          </article>
        </NavLink>

          
        <NavLink to='/'className="items-stretch col-span-3 groceries-section">
            <article className='max-w-[305px] p-4 content'>
              <h2 className='text-lg '>Quality Groceries for Every Meal</h2>
              <figure className='product right-4'>
                <img className='w-[223px]' src={mealpng} alt="" />
              </figure>
            </article>
        </NavLink>
          <article className="items-stretch col-span-6 sport-section">
            <article className='p-4 content'>
              <h2 className='max-w-[389px] text-lg'>Outfit Your Adventure: Sports & Outdoors</h2>
              <p className='pt-1 text-sm text-secondary'>100+ Collections for your outfit <br />inspirations in this summer</p>
              <NavLink to='/'>
                <button className='px-3 py-2 mt-1 text-white rounded-full bg-grey'>VIEW COLLECTIONS</button>
              </NavLink>
            </article>
          </article>
        <NavLink to='/' className="items-stretch col-span-3">
          <article className=" fesion-section">
            <article className='p-4 content'>
              <h2 className='max-w-[297px] text-lg pb-3'>Where Fashion Meets Personality</h2>
              <figure className='product w-[176px] right-4'>
                <img src={fesionpng} alt="" />
              </figure>
          </article>
        </article>
        </NavLink>
      </article>
    </article>
  )
};

export default Header;

