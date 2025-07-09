import { useState } from 'react';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import { handleNavigation, navMenus } from '../lib/navMenus';
import BaseLayout from '../components/layouts/BaseLayout';
import Button from '../components/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <BaseLayout>
      <nav className="w-full h-24 flex items-center justify-between">
        <div
          className="w-32 h-10 lg:w-48 lg:h-7 flex items-center cursor-pointer"
          onClick={() => handleNavigation('#hero')}
        >
          <img src="/images/logo.svg" alt="Logo" />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:justify-around lg:font-medium lg:gap-x-3 xl:gap-x-10">
          {navMenus.map((item, i) => (
            <div
              key={i}
              onClick={() => handleNavigation(item.href)}
              className="cursor-pointer hover:text-secondary transition duration-300 font-bold capitalize"
            >
              {item.title}
            </div>
          ))}
        </div>
        <button className="hidden lg:block text-secondary w-52 h-14 font-bold rounded-full border-2 border-secondary py-4 px-8 cursor-pointer hover:bg-secondary hover:text-background transition duration-300 ease-in-out">
          (987)-749-5403
        </button>

        {/* Mobile menu button */}
        <Button className="size-fit p-4 lg:hidden z-50 " onClick={handleOpen}>
          {isOpen ? (
            <FaTimes className="size-4" />
          ) : (
            <FaGripLines className="size-4" />
          )}
        </Button>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <>
            <div
              className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
              onClick={handleOpen}
            />

            <div className="fixed top-20 right-10 w-60 bg-background rounded-lg shadow-2xl z-50 py-2">
              <div className="px-4 py-2 border-b border-gray-200 mb-2">
                <p className="text-secondary font-bold text-lg">
                  Navigation Menus
                </p>
              </div>

              <div className="space-y-1">
                {navMenus.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      handleNavigation(item.href);
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 text-main font-bold"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </BaseLayout>
  );
};

export default Navbar;
