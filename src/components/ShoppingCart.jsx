function ShoppingCart({ isCartOpen, handleCartCloseButton }) {
  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 z-30 bg-black/70 transition-opacity duration-300 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={handleCartCloseButton}></div>

      {/* Main */}
      <aside className={`h-dvh min-w-100 fixed top-0 z-30 flex flex-col bg-[#1c1b1b] border-l border-l-[#333333] ${ isCartOpen ? "right-0" : "-right-full" } transition-all duration-500 origin-right`}>
        {/* Heading and Close Button */}
        <div className="px-6 py-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-semibold">
            <span className="material-symbols-outlined text-3xl! text-[#adc6ff] [font-variation-settings:'FILL'_1]">
              shopping_bag
            </span>
            Your Cart
          </h2>
          <button 
            className="px-3 py-3 flex justify-center items-center font-semibold rounded-full transition-all cursor-pointer hover:bg-[#131313]"
            onClick={handleCartCloseButton}>
            <span 
              className="material-symbols-outlined [font-variation-settings:'FILL'_1]">
              close
            </span>
          </button>
        </div>

        {/* Cart Product */}
        <div className="flex-1 overflow-y-scroll scrollbar-none">
          
          {/* Item - 1 */}
          <div className="w-full px-6 py-4 flex gap-3 bg-[#1e1e1e] border-y border-y-[#333333]">

            {/* Image */}
            <div className="h-20 w-20 aspect-square rounded-xl overflow-hidden">
              <img
                className="size-full aspect-square object-cover object-center"
                src="/public/product-1/product-1-image-1.jpeg" 
                alt="" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col">

              {/* Heading and Close Button */}
              <div className="flex items-start justify-between">
                <h3 className="pt-1 text-md font-semibold">
                  Quantum Earbuds Pro
                </h3>
                <button 
                  className="px-2.5 py-1 flex justify-center items-center font-semibold rounded-full transition-all cursor-pointer hover:bg-[#131313]">
                  <span 
                    className="material-symbols-outlined [font-variation-settings:'FILL'_0] text-lg!">
                    delete
                  </span>
                </button>
              </div>

              {/* Description */}
              <p className="flex1 text-xs text-[#c1c6d7] font-medium">
                Matte Black / ANC
              </p>

              {/* Quantity and Price */}
              <div className="mt-4 flex items-center justify-between">

                {/* Quantity */}
                <div className="flex items-center bg-[#1c1b1b]">
                  <button 
                    className="pl-3 pr-2 py-1 bg-[#1c1b1b] border border-[#414755]/30 rounded-l-lg leading-0! cursor-pointer">
                    <span className="material-symbols-outlined text-md! text-[#c1c6d7]">
                      remove
                    </span>
                  </button>

                  <span className="px-3 py-1 text-sm! font-medium bg-[#1c1b1b] border border-[#414755]/30">
                    1
                  </span>

                  <button 
                    className="pr-3 pl-2 py-1 bg-[#1c1b1b] border border-[#414755]/30 rounded-r-lg leading-0! cursor-pointer">
                    <span className="material-symbols-outlined text-md! text-[#c1c6d7]">
                      add
                    </span>
                  </button>
                </div>

                {/* Price */}
                <span className="text-lg font-semibold">
                  {`Rs.${ "2999".toLocaleString() }`}
                </span>              
              </div>
            </div>
          </div>

        </div>

        {/* Checkout */}
        <div className="flex flex-col bg-[#1c1b1b] border-y border-[#333333]">

          <div className="py-4 border-b border-b-[#333333]">
            {/* Subtotal */}
            <div className="w-full px-6 flex justify-between items-center gap-3">
              <span className="text-[#c1c6d7]">Subtotal</span>
              <span>2,999</span>
            </div>
            {/* Shipping */}
            <div className="w-full px-6 flex justify-between items-center gap-3">
              <span className="text-[#c1c6d7]">Shipping</span>
              <span>Complimentary</span>
            </div>
          </div>

          {/* Total */}
          <div className="w-full px-6 py-4 flex justify-between items-center gap-3 border-b border-b-[#333333]">
            <span className="text-[#c1c6d7]">Total</span>
            <div className="flex flex-col items-end">
              <span className="text-xl font-semibold">Rs.2,999</span>
              <span className="text-xs font-medium">Taxes calculated at checkout</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="w-full px-6 py-4 flex items-center gap-3 border-b border-b-[#333333]">
            <button className="group/button w-full px-4 py-3 flex justify-center items-center gap-2 font-semibold bg-[#007aff] rounded-lg transition-all cursor-pointer hover:bg-[#005bc1]">
              Proceed to Checkout
              <span className="material-symbols-outlined text-lg! relative transition-all duration-300 group-hover/button:translate-x-2">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ShoppingCart;