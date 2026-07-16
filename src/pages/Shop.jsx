import { useState, useEffect, useRef } from "react";
import productsList from "/src/data/products.json";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Shop() {
  const [products, setProducts] = useState(productsList);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: {
      min: 0,
      max: Infinity
    },
    availability: "",
    sortFilter: "price-high-to-low"
  });
  const [filterProducts, setFilterProducts] = useState([]);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);

  // Filter Products 
  useEffect(() => {
    let filtered = [...products];

    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.some(category => product.category.includes(category)));
    }

    filtered = filtered.filter(product => product.salePrice >= filters.priceRange.min && product.salePrice <= filters.priceRange.max);

    if (filters.availability === "in-stock") {
      filtered = filtered.filter(product => product.stock > 0);
    } else if (filters.availability === "pre-order") {
      filtered = filtered.filter(product => product.stock === 0);
    }

    // filtered = filtered.filter(product => product.stock > );

    setFilterProducts(filtered);
  }, [filters, products]);

  // This function toggles wishlist button.
  function handleWishButton(id) {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, wishlist: !product.wishlist }
          : product,
      ),
    );
  }

  function handleCategoryChange(e) {
    const { value, checked } = e.target;

    setFilters(currentFilters => {
      return checked
        ? { ...currentFilters, categories: [...currentFilters.categories, value] }
        : { ...currentFilters, categories: currentFilters.categories.filter(category => category !== value) };
    });
  }

  function handlePriceRangeChange(e) {
    console.log(e.target.id);

    if (e.target.id === "min") {
      setFilters(filters => {
        return { ...filters, priceRange: { ...filters.priceRange, min: e.target.value } }
      });
    } else if (e.target.id === "max") {
      setFilters(filters => {
        return { ...filters, priceRange: { ...filters.priceRange, max: e.target.value } }
      });
    }
  }

  function handleAvailabilityChange(e) {
    const { id } = e.target;

    setFilters(filters => ({ ...filters, availability: id }));
  }

  function handleClearFilterButton(e) {
    setFilters({
      categories: [],
      priceRange: {
        min: 0,
        max: Infinity
      },
      availability: null,
      sortFilter: "price-high-to-low"
    });
  }

  function openFilterSidebar() {
    setFilterSidebarOpen(true);
  }

  function closeFilterSidebar() {
    setFilterSidebarOpen(false);
  }


  // function FilterSidebar() {
  //   return (
  //     <>
  //       <aside className="w-64 h-full px-6 py-24 col-span-1 flex flex-col text-[#e5e2e1] bg-[#1e1e1e] border-r border-r-[#333333]">
  //         {/* Heading */}
  //         <h2 className="text-2xl text-[#e5e2e1] font-semibold starting:opacity-0 opacity-100 transition-all duration-500 delay-200">
  //           Filter
  //         </h2>

  //         {/* Category */}
  //         <div className="mt-8 starting:opacity-0 opacity-100 transition-all duration-500 delay-300">
  //           <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
  //             Category
  //           </h3>

  //           {/* Checkboxes */}
  //           <div className="mt-4 flex flex-col gap-1">
  //             <div className="flex items-center gap-2">
  //               <input
  //                 className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
  //                 type="checkbox"
  //                 id="audio"
  //                 value="audio"
  //                 onChange={handleCategoryChange}
  //               />
  //               <label
  //                 className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
  //                 htmlFor="audio"
  //               >
  //                 Audio
  //               </label>
  //             </div>
  //             <div className="flex items-center gap-2">
  //               <input
  //                 className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
  //                 type="checkbox"
  //                 id="wearables"
  //                 value="wearables"
  //                 onChange={handleCategoryChange}
  //               />
  //               <label
  //                 className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
  //                 htmlFor="wearables"
  //               >
  //                 Wearables
  //               </label>
  //             </div>
  //             <div className="flex items-center gap-2">
  //               <input
  //                 className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
  //                 type="checkbox"
  //                 id="peripherals"
  //                 value="peripherals"
  //                 onChange={handleCategoryChange}
  //               />
  //               <label
  //                 className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
  //                 htmlFor="peripherals"
  //               >
  //                 Peripherals
  //               </label>
  //             </div>
  //             <div className="flex items-center gap-2">
  //               <input
  //                 className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
  //                 type="checkbox"
  //                 id="smart-home"
  //                 value="smart-home"
  //                 onChange={handleCategoryChange}
  //               />
  //               <label
  //                 className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
  //                 htmlFor="smart-home"
  //               >
  //                 Smart Home
  //               </label>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Price Range */}
  //         <div className="mt-8 starting:opacity-0 opacity-100 transition-all duration-500 delay-400">
  //           <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
  //             Price Range
  //           </h3>

  //           <div className="mt-4 flex">
  //             <input
  //               className="w-full px-2 py-2 bg-[#131313] border border-[#414755] rounded"
  //               id="min"
  //               type="number"
  //               placeholder="Min"
  //               onChange={handlePriceRangeChange}
  //             />
  //             <span className="px-1 flex justify-center items-center text-2xl">
  //               -
  //             </span>
  //             <input
  //               className="w-full px-2 py-1 bg-[#131313] border border-[#414755] rounded"
  //               id="max"
  //               type="number"
  //               placeholder="Max"
  //               onChange={handlePriceRangeChange}
  //             />
  //           </div>
  //         </div>

  //         {/* Availability */}
  //         <div className="mt-8 starting:opacity-0 opacity-100 transition-all duration-500 delay-500">
  //           <h3 className="text-sm text-[#c1c6d7] tracking-wider font-medium uppercase">
  //             Availability
  //           </h3>

  //           {/* Checkboxes */}
  //           <div className="mt-4 flex flex-col gap-1">
  //             <div className="flex items-center gap-2">
  //               <input
  //                 className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
  //                 name="availability"
  //                 id="in-stock"
  //                 type="radio"
  //                 onChange={handleAvailabilityChange}
  //               />
  //               <label
  //                 className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
  //                 htmlFor="in-stock"
  //               >
  //                 In Stock
  //               </label>
  //             </div>
  //             <div className="flex items-center gap-2">
  //               <input
  //                 className="w-4 h-4 bg-[#131313] border border-[#414755] rounded-sm accent-[#007aff] checked:bg-[#007aff] checked:border-[#007aff] focus:outline-none transition-colors"
  //                 name="availability"
  //                 id="pre-order"
  //                 type="radio"
  //                 onChange={handleAvailabilityChange}
  //               />
  //               <label
  //                 className="w-full text-[#e5e2e1] transition-all cursor-pointer hover:text-[#adc6ff]"
  //                 htmlFor="pre-order"
  //               >
  //                 Pre-order
  //               </label>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Clear Filter Button */}
  //         <button
  //           className="w-full mt-8 py-2 text-sm font-medium bg-[#353534] rounded-lg transition-all duration-500 cursor-pointer hover:bg-[#393939] starting:opacity-0 opacity-100 delay-700"
  //           onClick={handleClearFilterButton}>
  //           Clear Filters
  //         </button>
  //       </aside>
  //     </>
  //   );
  // }

  { }

  // function MainContent() {
  //   return (
  //     <>
  //       <div className="size-full sm:px-12 py-24 col-span-1">
  //         {/* Main Heading and Sort */}
  //         <div className="flex justify-between items-center starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-300">
  //           <h2 className="text-xl sm:text-3xl text-[#e5e2e1] font-semibold">
  //             Explore Tech
  //           </h2>

  //           <div className="flex items-center gap-2">
  //             <label
  //               className="text-sm text-[#c1c6d7] font-medium"
  //               htmlFor="sort-by"
  //             >
  //               Sort by:
  //             </label>
  //             <select
  //               className="px-1 py-2 text-sm font-medium bg-[#131313] border border-[#414755] rounded"
  //               id="sort-by"
  //             >
  //               <option value="new-arrivals">New Arrivals</option>
  //               <option value="price-low-to-high">Price: Low to High</option>
  //               <option value="price-high-to-low">Price: High to Low</option>
  //               <option value="customer-rating">Customer Rating</option>
  //             </select>
  //           </div>
  //         </div>

  //         {/* Products */}
  //         <div className="w-full mt-8 min-h-100 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-500">
  //           {/* Product - Cards */}
  //           {filterProducts.map((product) => (
  //             <ProductCard
  //               key={product.id}
  //               product={product}
  //               handleWishButton={handleWishButton}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  function FilterSidebar() {
    return (
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-19 bg-black/70 transition-opacity duration-300 ${filterSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={closeFilterSidebar}></div>
        <aside className={`w-64 h-full px-6 py-24 fixed top-0 sm:static ${filterSidebarOpen ? "left-0" : "-left-full"} z-20 col-span-1 flex flex-col text-[#e5e2e1] bg-[#1e1e1e] border-r border-r-[#333333] transition-all duration-300 origin-left`}>

          {/* Heading and Close Button */}
          <div className="flex items-center justify-between starting:opacity-0 opacity-100 transition-all duration-500 delay-200">
            <h2 className="text-2xl text-[#e5e2e1] font-semibold">
              Filter
            </h2>
            <button
              className="px-3 py-3 sm:hidden relative translate-x-2 flex justify-center items-center font-semibold rounded-full transition-all cursor-pointer hover:bg-[#131313]"
              onClick={closeFilterSidebar}>
              <span
                className="material-symbols-outlined [font-variation-settings:'FILL'_1]">
                close
              </span>
            </button>
          </div>

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
                  value="audio"
                  onChange={handleCategoryChange}
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
                  value="wearables"
                  onChange={handleCategoryChange}
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
                  value="peripherals"
                  onChange={handleCategoryChange}
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
                  value="smart-home"
                  onChange={handleCategoryChange}
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
                id="min"
                type="number"
                placeholder="Min"
                onChange={handlePriceRangeChange}
              />
              <span className="px-1 flex justify-center items-center text-2xl">
                -
              </span>
              <input
                className="w-full px-2 py-1 bg-[#131313] border border-[#414755] rounded"
                id="max"
                type="number"
                placeholder="Max"
                onChange={handlePriceRangeChange}
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
                  name="availability"
                  id="in-stock"
                  type="radio"
                  onChange={handleAvailabilityChange}
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
                  name="availability"
                  id="pre-order"
                  type="radio"
                  onChange={handleAvailabilityChange}
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
          <button
            className="w-full mt-8 py-2 text-sm font-medium bg-[#353534] rounded-lg transition-all duration-500 cursor-pointer hover:bg-[#393939] starting:opacity-0 opacity-100 delay-700"
            onClick={handleClearFilterButton}>
            Clear Filters
          </button>
        </aside>
      </>
    );
  }

  function MainContent() {
    return (
      <>
        <div className="size-full sm:px-12 py-24 col-span-1">
          {/* Main Heading and Sort */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-300">
            <h2 className="text-2xl sm:text-3xl text-[#e5e2e1] font-semibold">
              Explore Tech
            </h2>

            <div className="mt-4 sm:mt-0 flex justify-between gap-2">
              <button
                className="px-5 sm:hidden flex-1 flex justify-center items-center bg-[#353534] rounded cursor-pointer"
                onClick={openFilterSidebar}>
                <span className="material-symbols-outlined font-medium">
                  filter_list
                </span>
                <span className="text-sm font-medium">Filters</span>
              </button>

              <div className="flex items-center gap-2">
                <label
                  className="hidden sm:inline text-sm text-[#c1c6d7] font-medium"
                  htmlFor="sort-by"
                >
                  Sort by:
                </label>
                <select
                  className="px-1 py-2 flex-1 text-sm font-medium bg-[#131313] border border-[#414755] rounded"
                  id="sort-by"
                >
                  <option value="new-arrivals">New Arrivals</option>
                  <option value="price-low-to-high">Price: Low to High</option>
                  <option value="price-high-to-low">Price: High to Low</option>
                  <option value="customer-rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="w-full mt-8 min-h-100 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-500">
            {/* Product - Cards */}
            {filterProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleWishButton={handleWishButton}
              />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="min-h-180 w-full text-white bg-[#131313]">
        {/* Main */}

        <div className="h-full max-w-7xl mx-auto px-8 grid grid-col-1 sm:grid-cols-[auto_1fr]">
          {/* Filter Sidebar - Left */}
          <FilterSidebar />

          {/* Main - Right */}
          <MainContent />

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