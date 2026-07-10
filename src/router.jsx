import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";

export const router = createBrowserRouter([
  { element: <NavLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", children: [
        { index: true, element: <Shop /> }, 
        { path: ":pid", element: <Product /> }
      ]},
      // { path: "about", element: <Product /> },
      // { path: "product", element: <Product /> }
    ]
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}