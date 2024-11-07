import React, { useState } from 'react';
import Arrow from '../../Assets/Arrow.svg'
import './CategoryDropDown.css'

interface DropdownProps {
  options: {
    mainCategory: string;
    subCategories: string[];
  }[];
}

const CategoryDropdown: React.FC<DropdownProps> = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleMouseEnter = (index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  return (
    <div className="relative inline-block ">
      <button
        onClick={handleToggle}
        className="px-4 py-2 border rounded-full flex items-center gap-1 "
      >
        Categories <span>
            <img className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`} src={Arrow} alt="" />
        </span>
      </button>

      {isOpen && (
        <div className="dropdown absolute mt-4  w-[350px] bg-white border border-gray-200 rounded-md shadow-lg p-3 ">
          <h4 className='text-sm text-primary font-poppins block px-4 py-2 font-semibold'>All Categories</h4>
          {options.map((option, index) => (
            
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <a href="#" className="block px-4 py-2 text-sm text-secondary hover:text-grey active:text-grey">
                {option.mainCategory}
              </a>

              {activeIndex === index && (
                <div className="absolute left-full top-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  {option.subCategories.map((subCategory, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subCategory}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
