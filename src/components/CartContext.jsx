import { useState, useEffect, createContext, useContext } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    const savedProducts = localStorage.getItem("cart-products");

    return savedProducts !== null ? JSON.parse(savedProducts) : [];
  });

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
  }, [cartProducts])

  function addToCart(product) {
    const isExisting = cartProducts.find(cartProduct => cartProduct.id === product.id);

    if (isExisting) {
      setCartProducts(current => current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartProducts(current => [...current, { ...product, quantity: product.quantity ?? 1 }]);
    }
  }

  function removeFromCart(product) {
    const isExisting = cartProducts.find(cartProduct => cartProduct.id === product.id);

    if (isExisting) {
      setCartProducts(current => current.filter(item => item.id !== product.id));
    }
  }

  function decreaseQuantity(product) {
    const currentProduct = cartProducts.find(cartProduct => cartProduct.id === product.id);
    if (currentProduct.quantity > 1)
      setCartProducts(current => current.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
  }

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export default CartProvider;