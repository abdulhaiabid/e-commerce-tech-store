import { useState } from "react";

function Sort({ openFilterSidebar }) {
  const [sort, setSort] = useState("");

  // Sort Items
  function sortProducts(e) {
    setSort(e.target.value);
  }

  return (
    <>
      <div className="mt-4 sm:mt-0 flex justify-between gap-2">
        <button
          className="px-5 py-2 sm:hidden flex-1 flex justify-center items-center bg-[#353534] rounded cursor-pointer"
          onClick={openFilterSidebar}>
          <span className="material-symbols-outlined font-medium">
            filter_list
          </span>
          <span className="text-sm font-medium">Filters</span>
        </button>

        {/* <div className="flex items-center gap-2">
          <label
            className="hidden sm:inline text-sm text-[#c1c6d7] font-medium"
            htmlFor="sort-by"
          >
            Sort by:
          </label>
          <select
            id="sort-by"
            value={sort}
            onChange={sortProducts}
            className="px-1 py-2 flex-1 text-sm font-medium bg-[#131313] border border-[#414755] rounded"
          >
            <option value="new-arrivals">New Arrivals</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="customer-rating">Customer Rating</option>
          </select> 
        </div>*/}
      </div>
    </>
  );
}

export default Sort;