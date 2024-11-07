import React from 'react';
import CardIcon from '../../Assets/CardIcon.svg';
import { NavLink } from 'react-router-dom';
import Cart from '../../Assets/cardWishlist.svg';
import CompareProducts from '../../Assets/CompareProducts.svg'
import ProductOverview from '../../Assets/ProductOverview.svg'

interface CardProps {
    cardIcon: string,
    cardReviews: string,
    cardTitle: string,
    cardPrice: string,
    cardOff: string,
}
const ProductCard: React.FC<CardProps> = ({ cardIcon, cardReviews, cardTitle, cardPrice, cardOff }) => {
    return (
        
        <div className="relative group w-[354px] cursor-pointer overflow-hidden mt-4 "> 
            <div className="relative"> 
                <img src={cardIcon} alt="" className="" />

                <div className="">
                    <h2 className="text-sm overflow-hidden text-ellipsis whitespace-nowrap pt-[15px]">{cardTitle}</h2>
                    <p className="text-gray-500 text-sm text-[#FCC93D]">★★★★★
                        <span className="text-secondary text-xs">
                            {cardReviews}
                        </span>
                    </p>
                    
                    <div className="flex justify-between">

                            <p className="text-grey text-sm font-semibold flex items-center gap-[4px]">{cardPrice}
                                <span className="text-secondary text-sm line-through">{cardOff}</span>
                            </p>
                        
                        <NavLink to="/" className="flex items-center">
                            <button className="bg-primary rounded-full hover:bg-primary text-white text-xs py-[10px] px-[20px]">
                                Add to Cart
                            </button>        
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="absolute top-[130px] start-[290px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <nav className="flex flex-col">
                    <NavLink className="w-16 h-16" to="/">
                        <img src={Cart} alt="Wishlist" /> 
                    </NavLink>
                    <NavLink className="w-16 h-16" to="/">
                        <img src={CompareProducts} alt="Wishlist" /> 
                    </NavLink>
                    <NavLink className="w-16 h-16" to="/">
                        <img src={ProductOverview} alt="Wishlist" /> 
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default ProductCard;
