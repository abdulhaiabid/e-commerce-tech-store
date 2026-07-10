import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

function Navbar() {
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navLinks = [
    { id: 2, title: "Home", path: "/", isActive: false },
    { id: 1, title: "Shop", path: "shop", isActive: true },
    { id: 3, title: "About", path: "about", isActive: false },
    { id: 4, title: "Account", path: "/", isActive: false },
  ];

  function handleNavLinksButton() {
    setMobileMenuOpen(current => !current);
    setSearchInputOpen(current => current ? !current : null)
  }

  function handleNavSearchButton() {
    setSearchInputOpen(current => !current);
    setMobileMenuOpen(current => current ? !current : null);
  }

  function handleCartOpenButton() {
    setIsCartOpen(true);
  }
  
  function handleCartCloseButton() {
    setIsCartOpen(false);
  }

  return (
    <>
      <header className="w-full fixed z-30 bg-[#131313] border-b border-b-[#414755]">
        <nav className="max-w-7xl mx-auto px-8 py-4 relative flex justify-between items-center gap-4 xs:gap-12">

          <div>
            <Link className="text-xl xs:text-2xl text-[#adc6ff] font-bold text-nowrap" to="/">
              TECH STORE
            </Link>
          </div>

          <ul className={`${mobileMenuOpen ? `scale-y-100` : `scale-y-0 md:scale-y-100 pointer-events-none`} w-full md:w-auto md:p-0 absolute top-full left-0 md:static flex-1 flex flex-col md:flex md:flex-row justify-around md:justify-start items-center md:gap-6 bg-[#131313] transition-transform duration-300 origin-top md:pointer-events-auto`}>            
            {
              navLinks.map((link, index) => {
                return (
                <li key={link.id} className="w-full md:w-auto">
                  <NavLink className={({isActive}) => `py-6 md:p-0 w-full md:w-auto block md:inline text-lg text-center ${isActive ? "text-[#adc6ff]" : "text-inherit"} md:text-start transition-all md:hover:text-[#adc6ff] hover:bg-neutral-700 md:hover:bg-transparent`} to={link.path}>{link.title}</NavLink>
                </li>
                )
              })
            }
          </ul>

          <div className="flex items-center gap-6">

            <div className="flex items-stretch">
              <div className={`${searchInputOpen ? `scale-y-100` : `scale-y-0 lg:scale-y-100 pointer-events-none`} w-full lg:w-auto lg:m-0 lg:static absolute top-full right-0 flex justify-stretch text-sm text-black bg-[#0e0e0e] shadow-xl lg:shadow-none rounded-l transition-transform duration-300 origin-top lg:pointer-events-auto`} >
                <input className="size-full p-4 lg:p-0 lg:px-2 placeholder:text-[#393939]" type="text" placeholder="Search"/>
              </div>
              <button className="flex items-center" onClick={handleNavSearchButton}>
                <span className="material-symbols-outlined px-1 text-2xl! lg:text-[#ffffff] lg:bg-[#292929] rounded-r cursor-pointer hover:text-[#adc6ff] lg:hover:text-[#adc6ff]  ">search</span>
              </button>
            </div>

            {/* Cart Button */}
            <div className="relative flex items-center">
              <button 
                className="flex items-center"
                onClick={handleCartOpenButton}>
                <span className="material-symbols-outlined text-2xl! transition-all cursor-pointer hover:text-[#adc6ff]">shopping_bag</span>
                <span className="aspect-square px-1.25 absolute -right-1 -top-1 flex items-center text-[10px] text-black bg-[#adc6ff] rounded-full">2</span>
              </button>
            </div>

            <div className="flex md:hidden justify-center items-center">
              <button className="flex items-center" onClick={handleNavLinksButton}>
                <span className="material-symbols-outlined text-2xl! cursor-pointer transition-all hover:text-[#adc6ff]">
                  menu
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* Shopping Cart */}
      <ShoppingCart
      isCartOpen={isCartOpen}
        handleCartCloseButton={handleCartCloseButton} />

    </>
  );
}

export default Navbar;