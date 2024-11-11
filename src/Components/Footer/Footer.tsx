import React from 'react';
import { NavLink } from 'react-router-dom';
import Facebook from '../../Assets/Facebook.svg'
import Youtube from '../../Assets/Youtube.svg'
import Instagram from '../../Assets/Instagram.svg'
import Weblogo from "../../Assets/Weblogo.svg"
import email from "../../Assets/Email.svg"
import phonepng from "../../Assets/Phone.svg"
import Location from "../../Assets/Location.svg"

interface FooterProps {
}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="mt-5 bg-black font-poppins"> 
          <article className='container pt-5 pb-5 mx-auto'>
              <article className=' grid grid-cols-12 p-0 m-0'>
                <div className='col-span-5'>
                    <NavLink className='m-0' to='/' >
                    <img className='m-0' src={Weblogo} alt="" />
                    </NavLink>
                  <p className='text-light text-sx max-w-[440px] pt-2'>Your trusted global marketplace. Shop hassle-free from anywhere in the world.</p>
                  <div className='flex gap-3 pt-3'>
                    <a href="/">
                      <img className='m-0' src={Facebook} alt="" />
                    </a>
                    <a href="/">
                      <img className='m-0' src={Youtube} alt="" />
                    </a>
                    <a href="/">
                      <img className='m-0'  src={Instagram} alt="" />
                    </a>         
                  </div>
                </div>
                <article className='col-span-2'>
                  <p className='text-white'>Quick Links</p>
                  <nav className='flex flex-col pt-3 text-light'>
                    <NavLink className='text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Home</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Products</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Blog</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Product Bundles</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Dnex</NavLink>
                  </nav>

                </article>
                <article className='col-span-2'>
                  <p className='text-white'>Useful Links</p>
                  <nav className='flex flex-col pt-3 text-light'>
                    <NavLink className='text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Latest News</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Terms & Conditions</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Privacy Policy</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Return Policy</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Seller Commission</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Login/Register</NavLink>
                    <NavLink className='pt-3 text-xs text-white transform hover:translate-x-2 transition-all' to='/'>Seller Account</NavLink>
                  </nav>
                </article>
                <article className='col-span-3'>
                  <p className='text-white'>Address</p>
                  <nav className='flex flex-col pt-3 text-light'>
                    <NavLink className='text-white text-sx' to='/'>
                      <div className='flex gap-2 align-center'>
                        <figure className='text-xs'>
                          <img className='m-0' src={email} />
                        </figure>
                        <p className='text-xs'>info@econex.pk</p>
                      </div>
                      </NavLink>
                      <NavLink className='text-white text-sx' to='/'>
                        <div className='flex gap-2'>
                          <figure className='pt-3 text-xs'>
                            <img className='m-0' src={phonepng} />
                          </figure>
                          <p className='pt-3 text-xs'>051-8908800</p>
                        </div>
                      </NavLink>
                      <NavLink className='text-white text-sx' to='/'>
                        <div className='flex gap-2'>
                          <figure className='pt-3 text-xs'>
                            <img className='w-[30px] m-0' src={Location} />
                          </figure>
                          <p className='pt-3 text-xs'>1st Floor Triangular Plaza Street No 14 Bostan khan Road Scheme III Rawalpindi</p>
                        </div>
                      </NavLink>
                    
                  </nav>
                </article>
              </article>
          </article>
          <hr className='max-w-[3000px] h-[1px] text-light'/>
          <p className='pt-3 text-sm text-center text-white'>© Copyright ©2024 Econex. All Rights Reserved Copyright</p>
        </footer>
    );
};

export default Footer;