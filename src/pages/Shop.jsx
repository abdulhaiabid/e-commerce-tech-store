import { useEffect, useState } from "react";
import products from "/src/data/products.json";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [trendingProducts, setTrendingProducts] = useState(products);
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Tactile Pro Keyboard",
  //     description: "Low-profile mechanical perfection for the modern typist.",
  //     listPrice: 3500,
  //     salePrice: 3000,
  //     imageURL: "keyboard-product.jpg",
  //     tag: "New",
  //     wishlist: false,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Aero Buds Gen 2",
  //     description: "Spatial audio with dynamic head tracking.",
  //     listPrice: 3999,
  //     salePrice: 1999,
  //     imageURL: "earbuds-product.jpg",
  //     tag: "",
  //     wishlist: false,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Horizon 34'' Ultrawide",
  //     description: "Immersive curve, absolute color accuracy.",
  //     listPrice: 120000,
  //     salePrice: 110000,
  //     imageURL: "monitor-product.jpg",
  //     tag: "Sale",
  //     wishlist: false,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     title: "Omni Core Speaker",
  //     description: "Room-filling sound in a sculptural design.",
  //     listPrice: 6999,
  //     salePrice: 5999,
  //     imageURL: "ai-speaker-product.jpg",
  //     tag: "Discounted",
  //     wishlist: false,
  //   },
  // ]);

  useEffect(() => {
    
  }, []);

  // This function toggles wishlist button.
  function handleWishButton(id) {
    setTrendingProducts(current => current.map(product => product.id === id ? { ...product, wishlist: !product.wishlist } : product));
  }

  return (
    <>
      <section className="min-h-180 w-full text-white bg-[#131313]">
        {/* Main */}

        <div className="h-full max-w-7xl mx-auto px-8 grid grid-cols-[auto_1fr]">

          {/* Filter Sidebar */}
          <aside className="w-64 h-full px-6 py-24 col-span-1 flex flex-col text-[#e5e2e1] bg-[#1e1e1e] border-r border-r-[#333333]">

            {/* Heading */}
            <h2 className="text-2xl text-[#e5e2e1] font-semibold">
              Filter
            </h2>

            {/* Category */}
            <div className="mt-8">
              <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
                Category
              </h3>

              {/* Checkboxes */}
              <div className="mt-4 flex flex-col gap-1">
                
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors" 
                    type="checkbox" 
                    id="audio" />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]" 
                    htmlFor="audio">
                    Audio
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors" 
                    type="checkbox" 
                    id="wearables" />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]" 
                    htmlFor="wearables">
                    Wearables
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors" 
                    type="checkbox" 
                    id="peripherals" />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]" 
                    htmlFor="peripherals">
                    Peripherals
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors" 
                    type="checkbox" 
                    id="smart-home" />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]" 
                    htmlFor="smart-home">
                    Smart Home
                  </label>
                </div>

              </div>
            </div>

            {/* Price Range */}
            <div className="mt-8">
              <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
                Price Range
              </h3>

              <div className="mt-4 flex">
                <input
                  className="w-full px-2 py-2 bg-[#131313] border border-[#414755] rounded"
                  type="number"
                  placeholder="Min" />
                <span className="px-1 flex justify-center items-center text-2xl">
                  -
                </span>
                <input
                  className="w-full px-2 py-1 bg-[#131313] border border-[#414755] rounded"
                  type="number"
                  placeholder="Max" />
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8">
              <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
                Availability
              </h3>

              {/* Checkboxes */}
              <div className="mt-4 flex flex-col gap-1">
                
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors" 
                    type="checkbox" 
                    id="in-stock" />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]" 
                    htmlFor="in-stock">
                    In Stock
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors" 
                    type="checkbox" 
                    id="pre-order" />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]" 
                    htmlFor="pre-order">
                    Pre-order
                  </label>
                </div>

              </div>
            </div>

            {/* Clear Filter Button */}
            <button className="w-full mt-8 py-2 text-sm font-medium bg-[#353534] rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#393939]">
              Clear Filters
            </button>
          </aside>

          <div className="size-full px-12 pt-24 col-span-1">
            
            {/* Main Heading and Sort */}
            <div className="flex justify-between items-center">
              <h2 className="text-3xl text-[#e5e2e1] font-semibold">
                Explore Tech
              </h2>

              <div className="flex items-center gap-2">
                <label
                  className="text-sm text-[#c1c6d7] font-medium" 
                  htmlFor="sort-by">Sort by:</label>
                <select 
                  className="px-1 py-2 text-sm font-medium bg-[#131313] border border-[#414755] rounded"
                  id="sort-by">
                  <option value="new-arrivals">New Arrivals</option>
                  <option value="price-low-to-high">Price: Low to High</option>
                  <option value="price-high-to-low">Price: High to Low</option>
                  <option value="customer-rating">Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {/* <div className="w-full mt-8 min-h-100 grid grid-rows-1 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6"> */}
            <div className="w-full mt-8 min-h-100 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">

              {/* Product - Cards */}
              {
                trendingProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    handleWishButton={handleWishButton} />

                ))
              }
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;

// Background color - #131313
// Accent color - #adc6ff
// On surface color - #c1c6d7
// Surface color low - #1e1e1e
// Surface color high - #353534
// Outline - #414755
// Border - #333333
// gutter - 24px
