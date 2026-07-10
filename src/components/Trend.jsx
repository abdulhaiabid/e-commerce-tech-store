import { useState } from "react";
import ProductCard from "./ProductCard";
import Products from "/src/data/products.json";
import { Link } from "react-router-dom";

function Trend() {
  const [trendingProducts, setTrendingProducts] = useState(Products);

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
          <div className="w-full min-h-100 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">

            {/* Product - Cards */}
            {
              trendingProducts.map(trendingProduct => {
                return (
                  <ProductCard
                  key={trendingProduct.id}
                  product={trendingProduct}
                  handleWishButton={handleWishButton} />
                )
              })
            }
          </div>

          {/* Show Products - Button */}
          <Link className="mt-16 py-3 px-8 bg-[#1e1e1e] border border-[#333333] rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#353534]" to="shop">
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}

export default Trend;