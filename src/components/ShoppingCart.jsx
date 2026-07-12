import { useState, useContext, createContext, useEffect } from "react";
import Products from "/src/data/products.json";
import CartProduct from "./CartProduct";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function ShoppingCart({ isCartOpen, handleCartCloseButton }) {
  const [products, setProducts] = useState(Products);
  const [shippingFee, setShippingFee] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { cartProducts, addToCart, removeFromCart, decreaseQuantity } = useCart();

  // Calculate Sub Total
  useEffect(() => {
    setSubTotal(cartProducts.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0));
  }, [cartProducts]);

  // Calculate Total
  useEffect(() => {
    setTotal(subTotal + shippingFee);
  }, [subTotal, shippingFee]);


  const totalItems = () => {
    cartProducts.reduce(
    (sum, item) => sum + item.quantity,
    0
    );
  }

  const Total = subTotal + shippingFee;

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 z-30 bg-black/70 transition-opacity duration-300 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={handleCartCloseButton}></div>

      {/* Main */}
      <aside className={`h-dvh sm:w-100 fixed top-0 z-30 flex flex-col bg-[#1c1b1b] border-l border-l-[#333333] ${ isCartOpen ? "right-0" : "-right-full" } transition-all duration-500 origin-right`}>
        {/* Heading and Close Button */}
        <div className="px-6 py-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-semibold">
            <span className="material-symbols-outlined text-3xl! text-[#adc6ff] [font-variation-settings:'FILL'_1]">
              shopping_bag
            </span>
            Your Cart
          </h2>
          <button 
            className="px-3 py-3 flex justify-center items-center font-semibold rounded-full transition-all cursor-pointer hover:bg-[#131313]"
            onClick={handleCartCloseButton}>
            <span 
              className="material-symbols-outlined [font-variation-settings:'FILL'_1]">
              close
            </span>
          </button>
        </div>

        {/* Cart Product */}
        <div className="flex-1 overflow-y-scroll scrollbar-none">
        {
          cartProducts.map(cartProduct => (
            <CartProduct 
              key={cartProduct.id}
              product={cartProduct}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              decreaseQuantity={decreaseQuantity} />
          ))
        }
        </div>

        {/* Checkout */}
        <div className="flex flex-col bg-[#1c1b1b] border-y border-[#333333]">

          <div className="py-4 border-b border-b-[#333333]">
            {/* Subtotal */}
            <div className="w-full px-6 flex justify-between items-center gap-3">
              <span className="text-[#c1c6d7]">Subtotal</span>
              <span>{ subTotal.toLocaleString() }</span>
            </div>
            {/* Shipping */}
            <div className="w-full px-6 flex justify-between items-center gap-3">
              <span className="text-[#c1c6d7]">Shipping</span>
              <span>{ shippingFee }</span>
            </div>
          </div>

          {/* Total */}
          <div className="w-full px-6 py-4 flex justify-between items-center gap-3 border-b border-b-[#333333]">
            <span className="text-[#c1c6d7]">Total</span>
            <div className="flex flex-col items-end">
              <span className="text-xl font-semibold">Rs.{total.toLocaleString()}</span>
              <span className="text-xs font-medium">Taxes calculated at checkout</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="w-full px-6 py-4 flex items-center gap-3 border-b border-b-[#333333]">
            <Link 
              className="group/button w-full px-4 py-3 flex justify-center items-center gap-2 font-semibold bg-[#007aff] rounded-lg transition-all cursor-pointer hover:bg-[#005bc1]"
              to="/checkout">
              Proceed to Checkout
              <span className="material-symbols-outlined text-lg! relative transition-all duration-300 group-hover/button:translate-x-2">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ShoppingCart;