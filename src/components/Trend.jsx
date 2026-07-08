import { useState } from "react";

function Trend() {
  const [trendingProducts, setTrendingProducts] = useState([
    {
      id: crypto.randomUUID(),
      title: "Tactile Pro Keyboard",
      description: "Low-profile mechanical perfection for the modern typist.",
      listPrice: 3500,
      salePrice: 3000,
      imageURL: "keyboard-product.jpg",
      tag: "New",
      wishlist: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Aero Buds Gen 2",
      description: "Spatial audio with dynamic head tracking.",
      listPrice: 3999,
      salePrice: 1999,
      imageURL: "earbud-product.jpg",
      tag: "",
      wishlist: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Horizon 34'' Ultrawide",
      description: "Immersive curve, absolute color accuracy.",
      listPrice: 120000,
      salePrice: 110000,
      imageURL: "monitor-product.jpg",
      tag: "Sale",
      wishlist: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Omni Core Speaker",
      description: "Room-filling sound in a sculptural design.",
      listPrice: 6999,
      salePrice: 5999,
      imageURL: "ai-speaker-product.jpg",
      tag: "Discounted",
      wishlist: false,
    },
  ]);

  function handleWishButton(id) {
    setTrendingProducts(currentProducts => currentProducts.map(product => product.id === id ? {...product, wishlist: !product.wishlist} : product));
  }

  return (
    <>
      <section className="min-h-180 w-full py-30 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">

          <p className="mb-4 text-xs text-[#adc6ff] font-medium tracking-widest uppercase">
            Highly Coveted
          </p>
          
          {/* Heading */}
          <h2 className="mb-16 text-3xl font-semibold tracking-wide">
            Trending Now
          </h2>

          {/* Products */}
          <div className="w-full min-h-100 grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6">

            {/* Product - Cards */}
            {
              trendingProducts.map(trendingProduct => {
                return (
                <div key={trendingProduct.id} className="group/card min-h-full min-w-60 col-span-1 flex flex-col rounded-xl overflow-clip cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  {/* Image Section */}
                  <div className="aspect-square relative bg-[#121212]">
                    <div className="p-4 sm:p-6 absolute inset-0">
                      <img className="size-full object-contain transition-all duration-500 group-hover/card:scale-110" src={trendingProduct.imageURL} alt="" />
                    </div>
                    
                    {
                      trendingProduct.tag !== "" && trendingProduct.tag !== undefined ? (
                        <span className="px-2 py-1 absolute left-4 top-6 text-xs text-[#adc6ff] font-medium bg-[#2c2c2c] rounded">
                          {trendingProduct.tag}
                        </span>
                      ) : null
                    }

                    <button className={`aspect-square px-2 py-1 absolute right-4 top-6 -translate-y-1 flex justify-center items-center ${trendingProduct.wishlist ? "bg-[#adc6ff]" : "bg-[#2c2c2c]"} rounded-full transition-all duration-300 cursor-pointer`} onClick={() => handleWishButton(trendingProduct.id)}>
                      <span className={`material-symbols-outlined text-md! ${trendingProduct.wishlist ? "text-[#2c2c2c] font-semibold!" : "text-[#adc6ff]"} font-medium rounded transition-all duration-300`}>
                        favorite
                      </span>
                    </button>

                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col bg-[#1e1e1e]">
                    <h3 className="mb-1 text-lg font-semibold">
                      {trendingProduct.title}
                    </h3>
                    <p className="mb-2 flex-1 text-md text-[#bdc1d2]">
                      {trendingProduct.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="sm:text-xl font-semibold">
                          {`Rs.${trendingProduct.salePrice !== 0 && trendingProduct.salePrice !== undefined ? trendingProduct.salePrice : trendingProduct.listPrice}`}
                        </span>
                        {
                          trendingProduct.listPrice === undefined || trendingProduct.listPrice === 0 || trendingProduct.listPrice === trendingProduct.salePrice ? null : (
                          <span className="place-self-start text-xs sm:text-sm text-[#c1c6d7] font-semibold line-through">
                            {trendingProduct.listPrice}
                          </span>
                          )
                        }
                      </div>
                      <button className="px-3 aspect-square flex justify-center items-center bg-[#adc6ff] rounded-full cursor-pointer">
                        <span className="material-symbols-outlined text-lg! text-[#1e1e1e]">
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>

          {/* Show Products - Button */}
          <button className="mt-16 py-3 px-8 bg-[#1e1e1e] border border-[#333333] rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#353534]">
            View All Products
          </button>
        </div>
      </section>
    </>
  );
}

export default Trend;