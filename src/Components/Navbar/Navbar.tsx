import React from 'react';
import '../Navbar/Navbar.css';
import { NavLink, useSubmit } from 'react-router-dom';
import Call from '../../Assets/Call.svg';
import email from '../../Assets/Email.svg';
import sitelogo from '../../Assets/site-logo.svg';
import Search from '../../Assets/search.svg';
import Wishlist from '../../Assets/wishlist.svg';
import Cart from '../../Assets/Cart.svg';
import Signin from '../../Assets/signin.svg';
import CategoryDropdown from '../CategoryDropDown/CategoryDropDown';
import Selectors from '../Selectors/Selectors';
import '../../index.css';

const options = [
  { mainCategory: 'Audio Video Gaming & Wearables', subCategories: ['Phones', 'Laptops', 'Cameras'] },
  { mainCategory: 'Automotive & Motorbike', subCategories: ['Men', 'Women', 'Kids'] },
  { mainCategory: 'Mother & Baby', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Bags and Travel', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Digital Goods', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Electronic Accessories', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Electronic Devices', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Groceries & Pets', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Health & Beauty', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Home Appliances', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Kid’s Fashion', subCategories: ['Furniture', 'Appliances', 'Decor'] },
  { mainCategory: 'Tv & Home Appliances', subCategories: ['Furniture', 'Appliances', 'Decor'] },
];

const Navbar = () => {
  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className=" ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-[20px]">
          <div onClick={handleCall} className="flex items-center gap-1 font-poppins py-2 rounded cursor-pointer">
            <img src={Call} alt="Call" />
            <p className="text-secondary">051-8908800</p>
          </div>
          <a className="flex items-center gap-1 text-secondary" href="mailto:info@econex.pk">
            <img src={email} alt="Email" />
            info@econex.pk
          </a>
        </div>
        <nav className="flex flex-wrap items-center gap-3">
          <NavLink to="/" className="text-xs text-secondary font-normal transition-all">Track Order</NavLink>
          <NavLink to="/" className="text-xs text-secondary font-normal transition-all">Get the App</NavLink>
          <NavLink to="/" className="text-xs text-secondary font-normal transition-all">Be a Seller</NavLink>
          <Selectors options={options} />
        </nav>
      </div>
      <div className="border-y border-light py-4">
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
              <img src={sitelogo} alt="Site Logo" />
              <div className="flex flex-wrap items-center gap-[19px]">
                <CategoryDropdown options={options} />
                <nav className='flex gap-[40px]'>
                  <NavLink
                    to="/"
                    className={({ isActive }) => 
                      `navlinks text-sm transition-all font-normal ${isActive ? 'navlink-active text-grey font-medium' : 'text-secondary'} hover:text-grey`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/products"
                    className={({ isActive }) => 
                      `navlinks text-sm transition-all font-normal ${isActive ? 'navlink-active text-grey font-medium' : 'text-secondary'} hover:text-grey`
                    }
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) => 
                      `navlinks text-sm transition-all font-normal ${isActive ? 'navlink-active text-grey font-medium' : 'text-secondary'} hover:text-grey`
                    }
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/bundles"
                    className={({ isActive }) => 
                      `navlinks text-sm transition-all font-normal ${isActive ? 'navlink-active text-grey font-medium' : 'text-secondary'} hover:text-grey`
                    }
                  >
                    Product Bundles
                  </NavLink>
                  <NavLink
                    to="/dnex"
                    className={({ isActive }) => 
                      `navlinks text-sm transition-all font-normal ${isActive ? 'navlink-active text-grey font-medium' : 'text-secondary'} hover:text-grey`
                    }
                  >
                    Dnex
                  </NavLink>
                </nav>
                
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex border rounded-full p-2 w-76">
                <input className="outline-none" type="search" placeholder="Search Here" />
                <img className='cursor-pointer' src={Search} alt="Search" />
              </div>
              <nav className="flex gap-3">
                <NavLink to="/" className="text-xs text-secondary">
                  <img src={Wishlist} alt="Wishlist" />
                </NavLink>
                <NavLink to="/" className="text-xs text-secondary">
                  <img src={Cart} alt="Cart" />
                </NavLink>
                <NavLink to="/" className="text-xs text-secondary">
                  <img src={Signin} alt="Sign In" />
                </NavLink>
              </nav>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;