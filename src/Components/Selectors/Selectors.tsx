import React, { useState } from 'react';
import Arrow from '../../Assets/Arrow.svg'
interface DropdownProps {
  options: {
    mainCategory: string;
    subCategories: string[];
  }[];
}

const Selectors: React.FC<DropdownProps> = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleMouseEnter = (index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  return (
    <div className="relative inline-block ">
      <button
        onClick={handleToggle}
        className="px-4 py-2  flex items-center gap-1 "
      >
        EN/PKR <span>
            <img className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`} src={Arrow} alt="" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 p-4">\
                       
        </div>
      )}
    </div>
  );
};

export default Selectors;
