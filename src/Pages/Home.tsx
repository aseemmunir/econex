import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ProductCard from '../Components/ProductCard/ProductCard'
import CardIcon from '../Assets/CardIcon.svg'
import SweetResistance from '../Assets/SweetResistanceIcon.svg'
import MenTrackSuit from '../Assets/MenTrackSuit.svg'
import Kidssuit from '../Assets/KidsTracksuit.svg'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className='container mx-auto mt-[120px]'>
        <div className='flex justify-between items-center '>
           <h2 className='text-xl text-primary'>Today’s Deals</h2>
           <NavLink to="/" className="flex items-center">
              <button className="bg-primary text-xs rounded-full hover:bg-primary text-white text-xs py-[10px] px-[20px]">
                View All Products
              </button>        
            </NavLink>
        </div>
        <div className='flex gap-[30px]'>
          <ProductCard  cardIcon={CardIcon} cardReviews='(1000+ reviews)' cardTitle="Wall Decoration 3 Frame Subhan Allah, Allhamdulillah, Allahu Akbar Art D2" cardPrice="PKR 960" cardOff="1,500"/>
          <ProductCard  cardIcon={SweetResistance} cardReviews='(1000+ reviews)' cardTitle="12 Hrs Sweet Resistance N5 CHANEL PARIS P..." cardPrice="PKR 1,760" cardOff="2,500"/>
          <ProductCard  cardIcon={MenTrackSuit} cardReviews='(1000+ reviews)' cardTitle="Men Track Suit For Winter Collection" cardPrice="PKR 2,250" cardOff="2,500"/>
          <ProductCard  cardIcon={Kidssuit} cardReviews='(1000+ reviews)' cardTitle="Winter Tracksuit For Kid's By Capasia" cardPrice="PKR 1,600" cardOff="1,500"/>
        </div>
          
      </div>
    </div>
  )
}

export default Home
