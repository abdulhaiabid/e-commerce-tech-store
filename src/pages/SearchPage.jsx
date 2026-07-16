import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "/src/data/products.json";

function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchProducts();
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, [searchInput]);

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  function searchProducts() {
    let filtered = [...products];

    if (searchInput.trim() === "" || !searchInput) {
      setFilteredProducts(filtered);
      return;
    }

    const lowerCaseSearch = searchInput.toLowerCase();

    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(lowerCaseSearch) ||
      item.brand.toLowerCase().includes(lowerCaseSearch) ||
      item.category.some(cat => cat.toLowerCase().includes(lowerCaseSearch)) ||
      item.searchKeywords.some(keyword => keyword.toLowerCase().includes(lowerCaseSearch)) ||
      item.tag.some(t => t.toLowerCase().includes(lowerCaseSearch))
    );

    // filtered = filtered.filter(item => item.category.some(searchCategory => searchCategory.includes(searchInput)));


    // filtered = filtered.filter(item => item.title.toLowerCase().includes(searchInput));

    console.log(filtered);

    setFilteredProducts(filtered);
  }

  return (
    <>
      <section className="min-h-dvh w-full bg-[#131313]">
        <div className="max-w-7xl h-full mx-auto px-8 py-20 flex flex-col">

          {/* Search Box */}
          <div className="mt-2 flex justify-center items-center">
            <div className="w-full sm:w-2xl flex justify-center items-stretch rounded-lg transition-all duration-300 focus-within:ring-1 focus-within:ring-[#2563eb] overflow-hidden">
              <input
                onChange={handleSearchInputChange}
                value={searchInput}
                id="search-box"
                type="search"
                placeholder="Search a product..."
                className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border-l border-y border-[#414755] rounded-l-lg transition-all duration-300 outline-0 placeholder:text-[#6b7280]" />
              <button className="px-6 flex justify-center items-center bg-[#353534] border-r border-y border-[#414755] rounded-r-lg  outline-0 cursor-pointer">
                <span className="material-symbols-outlined">
                  search
                </span>
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="py-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Filtered Products */}
            {
              filteredProducts.length === 0 ? <p>No product found...</p> :
                filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product} />
                ))
            }
          </div>

        </div>
      </section>
    </>
  );
}

export default SearchPage;

// Background color - #131313
// onSurfaceBackground: #201f1f
// Accent color - #adc6ff
// On surface color - #c1c6d7
// Surface color low -
// Surface color high - #353534
// Outline - #414755
// Border - #333333
// gutter - 24px

// const colors = {
//   backgroundColor: "#131313",
//   accentColor: "#adc6ff",
//   onSurfaceColor: "#c1c6d7",
//   surfaceColorLow: "#1e1e1e",
//   surfaceColorHigh: "#353534",
//   outline: "#414755",
//   border: "#333333",
//   gutter: "24px",
// };