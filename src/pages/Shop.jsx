import { useState, useEffect, useRef } from "react";
import products from "/src/data/products.json";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Shop() {
  const [trendingProducts, setTrendingProducts] = useState(products);

  // This function toggles wishlist button.
  function handleWishButton(id) {
    setTrendingProducts((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, wishlist: !product.wishlist }
          : product,
      ),
    );
  }

  return (
    <>
      <section className="min-h-180 w-full text-white bg-[#131313]">
        {/* Main */}

        <div className="h-full max-w-7xl mx-auto px-8 grid grid-cols-[auto_1fr]">
          {/* Filter Sidebar */}
          <aside className="w-64 h-full px-6 py-24 col-span-1 flex flex-col text-[#e5e2e1] bg-[#1e1e1e] border-r border-r-[#333333]">
            {/* Heading */}
            <h2 className="text-2xl text-[#e5e2e1] font-semibold starting:opacity-0 opacity-100 transition-all duration-500 delay-200">
              Filter
            </h2>

            {/* Category */}
            <div className="mt-8 starting:opacity-0 opacity-100 transition-all duration-500 delay-300">
              <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
                Category
              </h3>

              {/* Checkboxes */}
              <div className="mt-4 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
                    type="checkbox"
                    id="audio"
                  />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
                    htmlFor="audio"
                  >
                    Audio
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
                    type="checkbox"
                    id="wearables"
                  />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
                    htmlFor="wearables"
                  >
                    Wearables
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
                    type="checkbox"
                    id="peripherals"
                  />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
                    htmlFor="peripherals"
                  >
                    Peripherals
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
                    type="checkbox"
                    id="smart-home"
                  />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
                    htmlFor="smart-home"
                  >
                    Smart Home
                  </label>
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div className="mt-8 starting:opacity-0 opacity-100 transition-all duration-500 delay-400">
              <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
                Price Range
              </h3>

              <div className="mt-4 flex">
                <input
                  className="w-full px-2 py-2 bg-[#131313] border border-[#414755] rounded"
                  type="number"
                  placeholder="Min"
                />
                <span className="px-1 flex justify-center items-center text-2xl">
                  -
                </span>
                <input
                  className="w-full px-2 py-1 bg-[#131313] border border-[#414755] rounded"
                  type="number"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 starting:opacity-0 opacity-100 transition-all duration-500 delay-500">
              <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
                Availability
              </h3>

              {/* Checkboxes */}
              <div className="mt-4 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
                    type="checkbox"
                    id="in-stock"
                  />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
                    htmlFor="in-stock"
                  >
                    In Stock
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
                    type="checkbox"
                    id="pre-order"
                  />
                  <label
                    className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
                    htmlFor="pre-order"
                  >
                    Pre-order
                  </label>
                </div>
              </div>
            </div>

            {/* Clear Filter Button */}
            <button className="w-full mt-8 py-2 text-sm font-medium bg-[#353534] rounded-lg transition-all duration-500 cursor-pointer hover:bg-[#393939] starting:opacity-0 opacity-100 delay-700">
              Clear Filters
            </button>
          </aside>

          <div className="size-full px-12 py-24 col-span-1">
            {/* Main Heading and Sort */}
            <div className="flex justify-between items-center starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-300">
              <h2 className="text-3xl text-[#e5e2e1] font-semibold">
                Explore Tech
              </h2>

              <div className="flex items-center gap-2">
                <label
                  className="text-sm text-[#c1c6d7] font-medium"
                  htmlFor="sort-by"
                >
                  Sort by:
                </label>
                <select
                  className="px-1 py-2 text-sm font-medium bg-[#131313] border border-[#414755] rounded"
                  id="sort-by"
                >
                  <option value="new-arrivals">New Arrivals</option>
                  <option value="price-low-to-high">Price: Low to High</option>
                  <option value="price-high-to-low">Price: High to Low</option>
                  <option value="customer-rating">Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="w-full mt-8 min-h-100 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-500">
              {/* Product - Cards */}
              {trendingProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleWishButton={handleWishButton}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
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
