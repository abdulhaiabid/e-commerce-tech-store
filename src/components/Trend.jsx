import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import Products from "/src/data/products.json";
import { Link } from "react-router-dom";

function Trend() {
  const [trendingProducts, setTrendingProducts] = useState(Products);

  // Reveal Animation
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, { threshold: 0.4 });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    }
  }, [])

  function handleWishButton(id) {
    setTrendingProducts(currentProducts => currentProducts.map(product => product.id === id ? {...product, wishlist: !product.wishlist} : product));
  }

  return (
    <>
      <section 
        ref={targetRef}
        id="trending-products"
        className="min-h-180 w-full py-30 bg-[#0e0e0e] -scroll-mt-50">
        <div className={`max-w-7xl mx-auto px-8 ${ isVisible ? "flex" : "hidden" } flex flex-col items-center`}>

          <p className="mb-4 text-xs text-[#adc6ff] font-medium tracking-widest uppercase">
            Highly Coveted
          </p>
          
          {/* Heading */}
          <h2
            className="mb-16 text-3xl font-semibold tracking-wide starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500">
            Trending Now
          </h2>

          {/* Products */}
          <div className="w-full min-h-100 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 starting:opacity-0 starting:translate-y-4 opacity-100 translate-y-0 transition-all duration-500 delay-200">

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