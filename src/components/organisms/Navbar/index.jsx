import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <div>
                    <img className="h-8" src="logo192.png" alt="" />
                </div>
                <div className="sm:hidden"> 
                    <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={toogleMenu}>
                        <svg className="h-6  w-6 fill-current" viewBox="0 0 24 24">
                            {isOpen
                            ?  ( <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>)
                            :   (<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />)
                            }
                           
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={`px-4 pt-2 pb-4 sm:flex sm:p-0 ${isOpen ? 'block' : 'hidden'}`}>
                <button type="button" className="block px-2 text-white font-semibold rounded hover:bg-gray-800">List </button>
                <button type="button" className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-800">Trips </button>
                <button type="button" className="mt-1 block px-2 text-white font-semibold rounded hover:bg-gray-800">MEsageas </button>
            </nav>
        </header>
    );
};

export default Navbar;
