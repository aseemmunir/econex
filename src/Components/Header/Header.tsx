import React from 'react'
import './Header.css'
import healthpng from "../../Assets/healthProduct.svg"
import watchpng from "../../Assets/watch.svg"
import sportpng from "../../Assets/sport.svg"
import mealpng from "../../Assets/Meal.svg"
import fesionpng from "../../Assets/fesion.svg"


const Header = () => {
  return (
    <article className='container mx-auto font-poppins'>
      <article className='flex gap-4 grid-flow-col-6 auto-cols-max'>
        <article className="rounded-t-2xl rounded-b-2xl header-section">
          <article className='pt-4 ps-4 content '>
            <h2 className='w-[430px] text-lg'>Upgrade Your Home with Trendy Decor at 25% Off</h2>
            <p className='pt-1 text-sm text-secondary'>100+ Collections for your outfit <br />inspirations in this summer</p>
            <button className='px-4 py-2 mt-1 text-white rounded-full bg-grey'>VIEW COLLECTIONS</button>
          </article>
        </article>
        <article className="grid-cols-3 rounded-b-2xl second-section">
          <article className='pt-4 ps-4 content pe-36'>
            <h2 className='w-[286px] text-lg'>Enhance Beauty, Elevate Health</h2>
            <figure className='w-[270px] mt-4 ms-5'>
              <img src={healthpng} alt="" />
            </figure>
          </article>
        </article>
        <article className="grid-cols-3 rounded-b-2xl third-section">
          <article className='pt-4 ps-4 content pe-36'>
            <h2 className='w-[297px] text-lg pb-3'>Upgrade Life with Advanced Tech</h2>
              <figure className='w-[270px] mt-4 ms-5'>
                <img src={watchpng} alt="" />
              </figure>
          </article>
        </article>
      </article>
      <article className='flex gap-4 grid-flow-col-6 auto-cols-max'>
        <article className="grid-cols-3 rounded-b-2xl second-section">
          <article className='pt-4 ps-4 content pe-36'>
            <h2 className='w-[305px] text-lg'>Quality Groceries for Every Meal</h2>
            <figure className='w-[500px] mt-4 ms-5'>
              <img src={mealpng} alt="" />
            </figure>
          </article>
        </article>
        <article className="rounded-t-2xl rounded-b-2xl grocires-section">
          <article className='pt-4 ps-4 content '>
            <h2 className='w-[389px] text-lg'>Outfit Your Adventure: Sports & Outdoors</h2>
            <p className='pt-1 text-sm text-secondary'>100+ Collections for your outfit <br />inspirations in this summer</p>
            <button className='px-3 py-2 mt-1 text-white rounded-full bg-grey'>VIEW COLLECTIONS</button>
          </article>
        </article>
        <article className="grid-cols-3 rounded-b-2xl third-section">
          <article className='pt-4 ps-4 content pe-36'>
            <h2 className='w-[297px] text-lg pb-3'>Where Fashion Meets Personality</h2>
              <figure className='w-[350px] mt-4 ms-7'>
                <img src={fesionpng} alt="" />
              </figure>
           
          </article>
        </article>
      </article>
    </article>
     
  )
}

export default Header;

