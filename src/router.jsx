import { createBrowserRouter, Outlet, Link } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import CartCheckout from "./pages/CartCheckout";
import ExpressCheckOut from "./pages/ExpressCheckout";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/shop",
        children: [
          { index: true, element: <Shop /> },
          { path: ":pid", element: <Product /> },
        ],
      },
      {
        path: "/checkout",
        children: [
          { path: "cart", element: <CartCheckout /> },
          { path: "express", element: <ExpressCheckOut /> },
        ]
      },
      // { path: "/checkout", element: <Checkout /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function PageNotFound() {
  return (
    <>
      <section className="h-dvh w-full px-4 flex justify-center items-center bg-[#131313]">
        <div className="w-full sm:w-auto sm:min-w-160 p-4 sm:p-8 flex flex-col border-2 border-[#444444] rounded-xl">
          <h1 className="text-xl sm:text-4xl font-semibold transition-all duration-500 opacity-100 translate-y-0 starting:opacity-0 starting:translate-y-6">
            Error 404
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-[#c1c6d7] font-medium tracking-wide transition-all duration-500 opacity-100 translate-y-0 starting:opacity-0 starting:translate-y-6 delay-200">
            Page not found
          </p>
          <Link
            className="mt-8 px-4 py-2 xs:self-end flex justify-center items-center text-sm font-medium text-[#353534] bg-[#adc6ff] rounded-lg transition-all duration-500 cursor-pointer hover:bg-[#adc6ff]/80 opacity-100 translate-y-0 starting:opacity-0 delay-200"
            to="/"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </>
  );
}
