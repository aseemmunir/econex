import React from 'react';
import { Link } from 'react-router-dom';
import Call from '../../Assets/Call.svg';
import email from '../../Assets/Email.svg';
import sitelogo from '../../Assets/site-logo.svg';
import Search from '../../Assets/search.svg';
import Wishlist from '../../Assets/wishlist.svg';
import Cart from '../../Assets/Cart.svg';
import Signin from '../../Assets/signin.svg';
import '../../index.css';
import CategoryDropdown from '../CategoryDropDown/CategoryDropDown';
import Selectors from '../Selectors/Selectors';

const options = [
  {
    mainCategory: 'Audio Video Gaming & Wearables',
    subCategories: ['Phones', 'Laptops', 'Cameras'],
  },
  {
    mainCategory: 'Automotive & Motorbike',
    subCategories: ['Men', 'Women', 'Kids'],
  },
  {
    mainCategory: 'Mother & Baby',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Bags and Travel',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Digital Goods',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Electronic Accessories',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Electronic Devices',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Groceries & Pets',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Health & Beauty',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Home Appliances',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Kid’s Fashion',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
  {
    mainCategory: 'Tv & Home Appliances',
    subCategories: ['Furniture', 'Appliances', 'Decor'],
  },
];

const Navbar = () => {
  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div onClick={handleCall} className="flex items-center font-poppins py-2 px-4 rounded cursor-pointer">
            <img src={Call} alt="" />
            <p className="text-secondary">051-8908800</p>
          </div>
          <a className="flex items-center text-secondary" href="mailto:info@econex.pk">
            <span>
              <img src={email} alt="" />
            </span>
            info@econex.pk
          </a>
        </div>
        <nav className="flex items-center gap-3">
          <Link to="/" className="text-xs text-secondary">Track Order</Link>
          <Link to="/" className="text-xs text-secondary">Get the App</Link>
          <Link to="/" className="text-xs text-secondary">Be a Seller</Link>
          <Selectors options={options}/>
        </nav>
      </div>
      <div className="flex justify-between items-center border-y border-light py-4">
        <div className="flex items-center gap-3">
          <img className="" src={sitelogo} alt="" />
          <nav className="flex items-center gap-10">
            <CategoryDropdown options={options} />
            <Link className="text-sm text-secondary hover:text-grey active:text-grey" to="/">Home</Link>
            <Link className="text-sm text-secondary hover:text-grey active:text-grey" to="/">Products</Link>
            <Link className="text-sm text-secondary hover:text-grey active:text-grey" to="/">Blog</Link>
            <Link className="text-sm text-secondary hover:text-grey active:text-grey" to="/">Product Bundles</Link>
            <Link className="text-sm text-secondary hover:text-grey active:text-grey" to="/">Dnex</Link>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex border border-1 rounded-full p-2 w-76">
            <input className="outline-none" type="search" placeholder="Search Here" />
            <img src={Search} alt="" />
          </div>
          <nav className="flex gap-3">
            <Link to="/" className="text-xs text-secondary">
              <img src={Wishlist} alt="" />
            </Link>
            <Link to="/" className="text-xs text-secondary">
              <img src={Cart} alt="" />
            </Link>
            <Link to="/" className="text-xs text-secondary">
              <img src={Signin} alt="" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

