import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  function handleWishButton(id) {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, wishlist: !product.wishlist }
          : product,
      ),
    );
  }

  return (
    <>
      <Link
        className="group/card flex flex-col rounded-xl overflow-clip cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        to={`/shop/${product.id}`}>

        {/* Image Section */}
        <div className="aspect-square relative bg-[#1e1e1e]">

          {/* Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img className="size-full object-contain object-center transition-all duration-500 group-hover/card:scale-110" src={product.imageURL[0]} alt="" />
          </div>

          {/* Image Tag */}
          {
            product.tag.length !== 0 && product.tag !== undefined ? (
              <span className="px-2 py-1 absolute left-4 top-4 text-xs text-[#adc6ff] font-medium bg-[#2c2c2c] rounded opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                {product.tag[0]}
              </span>
            ) : null
          }

          {/* Wishlist Button */}
          <button
            className={`aspect-square px-2 py-1 absolute right-4 top-4 -translate-y-1 z-10 flex justify-center items-center ${product.wishlist ? "bg-[#adc6ff]" : "bg-[#2c2c2c]"} rounded-full opacity-0  transition-all duration-300 cursor-pointer group-hover/card:opacity-100`}
            onClick={e => {
              e.preventDefault();
              handleWishButton(product.id)
            }}>
            <span className={`material-symbols-outlined text-md! ${product.wishlist ? "text-[#2c2c2c] font-semibold!" : "text-[#adc6ff]"} font-medium rounded transition-all duration-300`}>
              favorite
            </span>
          </button>

        </div>

        {/* Content Section */}
        <div className="px-4 py-2 sm:px-4 sm:py-4 flex-1 flex flex-col bg-[#353534]">
          <h3 className="mb-1 text-lg font-semibold">
            {product.title}
          </h3>
          <p className="mb-2 flex-1 text-md text-[#bdc1d2]">
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="sm:text-xl font-semibold">
                {`Rs.${product.salePrice !== 0 && product.salePrice !== undefined ? product.salePrice.toLocaleString() : product.listPrice.toLocaleString()}`}
              </span>
              {
                product.listPrice === undefined || product.listPrice === 0 || product.listPrice === product.salePrice ? null : (
                  <span className="place-self-start text-xs sm:text-sm text-[#c1c6d7] font-semibold line-through">
                    {product.listPrice.toLocaleString()}
                  </span>
                )
              }
            </div>

            {/* Add to Cart Button */}
            <button
              className="px-3 aspect-square flex justify-center items-center bg-[#adc6ff] rounded-full transition-all duration-300 cursor-pointer hover:bg-[#adc6ff]/90"
              onClick={e => {
                e.preventDefault();
                addToCart(product);
              }}>
              <span className="material-symbols-outlined text-lg! text-[#1e1e1e]">
                add
              </span>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;