import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import CartProvider from "./CartContext";

function NavLayout() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>
    </>
  );
}

export default NavLayout;