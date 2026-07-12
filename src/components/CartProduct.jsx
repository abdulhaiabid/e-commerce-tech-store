function CartProduct({ product, addToCart, removeFromCart, decreaseQuantity }) {

  return (
    <>
      {/* Item - 1 */}
      <div className="w-full px-6 py-4 flex gap-3 bg-[#1e1e1e] border-y border-y-[#333333]">

        {/* Image */}
        <div className="h-20 w-20 aspect-square rounded-xl overflow-hidden">
          <img
            className="size-full aspect-square object-cover object-center"
            src={ product.imageURL[0] } 
            alt="" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">

          {/* Heading and Delete Button */}
          <div className="flex items-start justify-between">
            <h3 className="pt-1 text-md font-semibold">
              { product.title }
            </h3>
            <button 
              className="px-2.5 py-1 flex justify-center items-center font-semibold rounded-full transition-all cursor-pointer hover:bg-[#131313]"
              onClick={() => removeFromCart(product)}>
              <span 
                className="material-symbols-outlined [font-variation-settings:'FILL'_0] text-lg!">
                delete
              </span>
            </button>
          </div>

          {/* Description */}
          <p className="flex1 text-xs text-[#c1c6d7] font-medium">
            { product.shortDescription }
          </p>

          {/* Quantity and Price */}
          <div className="mt-4 flex items-center justify-between">

            {/* Quantity */}
            <div className="flex items-center bg-[#1c1b1b]">
              <button 
                className="pl-3 pr-2 py-1 bg-[#1c1b1b] border border-[#414755]/30 rounded-l-lg leading-0! cursor-pointer"
                onClick={() => decreaseQuantity(product)}>
                <span className="material-symbols-outlined text-md! text-[#c1c6d7]">
                  remove
                </span>
              </button>

              <span className="px-3 py-1 text-sm! font-medium bg-[#1c1b1b] border border-[#414755]/30">
                { product.quantity }
              </span>

              <button 
                className="pr-3 pl-2 py-1 bg-[#1c1b1b] border border-[#414755]/30 rounded-r-lg leading-0! cursor-pointer"
                onClick={() => addToCart(product)}>
                <span className="material-symbols-outlined text-md! text-[#c1c6d7]">
                  add
                </span>
              </button>
            </div>

            {/* Price */}
            <span className="text-lg font-semibold">
              {`Rs.${ product.salePrice.toLocaleString() }`}
            </span>              
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;