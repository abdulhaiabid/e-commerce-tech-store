import { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";

function CartCheckout() {
  const [shippingFee, setShippingFee] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);
  const { cartProducts } = useCart();

  // Calculate Sub Total
  useEffect(() => {
    setSubTotal(cartProducts.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0));
  }, [cartProducts]);

  // Calculate Total
  useEffect(() => {
    setTotal(subTotal + shippingFee);
  }, [subTotal, shippingFee]);

  return (
    <>
      <section className="min-h-dvh w-full bg-[#131313]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-30 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
          {/* Right Side */}
          <div className="col-span-1 sm:col-span-7 flex flex-col">
            {/* Forms */}
            <div className="flex flex-col gap-6">

              {/* Shipping Address */}
              <div className="px-3 py-4 xs:p-6 sm:p-8 bg-[#201f1f] border border-[#333333] rounded-lg sm:rounded-2xl">

                {/* Heading */}
                <h2 className="text-xl sm:text-3xl font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-2xl! sm:text-4xl! text-[#adc6ff]">
                    local_shipping
                  </span>
                  Shipping Address
                </h2>

                {/* Form */}
                <div className="flex flex-col">

                  <div className="mt-2 flex sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                      <label
                        className="text-xs sm:text-sm text-[#c1c6d7] font-medium"
                        htmlFor="first-name">First Name</label>
                      <input
                        className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                        id="first-name"
                        type="text"
                        placeholder="e.g. Julian" />
                    </div>
                    <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                      <label
                        className="text-xs sm:text-sm text-[#c1c6d7] font-medium focus:text-[#adc6ff]"
                        htmlFor="last-name">Last Name</label>
                      <input
                        className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                        id="last-name"
                        type="text"
                        placeholder="e.g. Vance" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                      <label
                        className="text-xs sm:text-sm text-[#c1c6d7] font-medium"
                        htmlFor="street-address">Street Address</label>
                      <input
                        className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                        id="street-address"
                        type="text"
                        placeholder="123 Innovation Drive" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                      <label
                        className="text-xs sm:text-sm text-[#c1c6d7] font-medium"
                        htmlFor="city">City</label>
                      <input
                        className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                        id="street-address"
                        type="city"
                        placeholder="San Francisco" />
                    </div>
                    <div className="flex-1 flex items-center gap-2 sm:gap-4">
                      <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                        <label
                          className="text-xs sm:text-sm text-[#c1c6d7] font-medium"
                          htmlFor="state">State</label>
                        <input
                          className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                          id="state"
                          type="city"
                          placeholder="CA" />
                      </div>
                      <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                        <label
                          className="text-xs sm:text-sm text-[#c1c6d7] font-medium"
                          htmlFor="zip">ZIP</label>
                        <input
                          className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                          id="zip"
                          type="city"
                          placeholder="94103" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Delivery Method */}
              <div className="px-3 py-4 xs:p-6 sm:p-8 bg-[#201f1f] border border-[#333333] rounded-lg sm:rounded-2xl">

                {/* Heading */}
                <h2 className="text-xl sm:text-3xl font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-2xl! sm:text-4xl! text-[#adc6ff]">
                    speed
                  </span>
                  Delivery Method
                </h2>

                {/* Main */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6">

                  <input
                    className="peer/express hidden"
                    id="express-shipping"
                    name="delivery-method"
                    type="radio" />
                  <label
                    className="w-full p-3 xs:p-4 flex justify-between items-center ring ring-[#414755] transition-all duration-300 peer-checked/express:text-[#adc6ff] peer-checked/express:bg-[#adc6ff]/5 peer-checked/express:ring-[#adc6ff] rounded-lg cursor-pointer peer-not-checked/express:hover:ring-[#8b90a0]"
                    htmlFor="express-shipping">
                    <div className="flex flex-col">
                      <h3 className="text-sm sm:text-md font-medium">
                        Express Shipping
                      </h3>
                      <p className="text-xs sm:text-sm text-[#c1c6d7]">
                        1-2 Business Days
                      </p>
                    </div>
                    <span className="text-md sm:text-lg font-semibold">
                      $25.00
                    </span>
                  </label>

                  <input
                    className="peer/standard hidden"
                    id="standard-shipping"
                    name="delivery-method"
                    type="radio" />
                  <label
                    className="w-full p-3 xs:p-4 flex justify-between items-center ring ring-[#414755] transition-all duration-300 peer-checked/standard:text-[#adc6ff] peer-checked/standard:bg-[#adc6ff]/5 peer-checked/standard:ring-[#adc6ff] rounded-lg cursor-pointer peer-not-checked/standard:hover:ring-[#8b90a0]"
                    htmlFor="standard-shipping">
                    <div className="flex flex-col">
                      <h3 className="text-sm sm:text-md font-medium">
                        Standard Ground
                      </h3>
                      <p className="text-xs sm:text-sm text-[#c1c6d7]">
                        4-6 Business Days
                      </p>
                    </div>
                    <span className="text-md sm:text-lg font-semibold">
                      Free
                    </span>
                  </label>

                </div>

              </div>

              {/* Payment Details */}
              <div className="px-3 py-4 xs:p-6 sm:p-8 bg-[#201f1f] border border-[#333333] rounded-lg sm:rounded-2xl">

                {/* Heading */}
                <h2 className="text-xl sm:text-3xl font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-2xl! sm:text-4xl! text-[#adc6ff]">
                    payments
                  </span>
                  Payment Details
                </h2>

                {/* Main */}
                <div className="my-6 flex items-stretch gap-3 sm:gap-6">

                  <button className="w-full py-1 sm:py-3 flex justify-center items-center gap-1 xs:gap-2 bg-white rounded-md transition-all duration-300 cursor-pointer hover:bg-[#e5e5e5]">
                    <span className="material-symbols-outlined text-md! sm:text-3xl! text-black">apps</span>
                    <span className="text-xs sm:text-md text-black font-semibold">Apple Pay</span>
                  </button>

                  <button className="w-full py-2 sm:py-3 flex justify-center items-center gap-1 xs:gap-2 bg-[#4285f4] rounded-md transition-all duration-300 cursor-pointer hover:bg-[#3367d6]">
                    <span className="material-symbols-outlined"></span>
                    <span className="text-xs sm:text-md font-semibold">Google Pay</span>
                  </button>

                </div>

                <div className="my-4 sm:my-0 w-full flex items-center">
                  <div className="w-full border-t border-[#414755]"></div>
                  <span className="mx-2 sm:mx-4 text-xs text-nowrap text-[#c1c6d7] tracking-widest uppercase">Or pay with card</span>
                  <div className="w-full border-t border-[#414755]"></div>
                </div>

                {/* Form */}
                <div className="flex flex-col">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <div className="xs:mt-4 flex-1 flex flex-col gap-2">
                      <label
                        className="text-xs sm:text-sm text-[#c1c6d7] font-medium"
                        htmlFor="card-number">Card Number</label>
                      <div className="relative">
                        <input
                          className="w-full px-2 sm:px-3 pr-7 sm:pr-12 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                          id="card-number"
                          type="text"
                          placeholder="0000 0000 0000 0000" />
                        <span class="material-symbols-outlined absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-md! sm:text-xl! text-[#c1c6d7]">
                          credit_card
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 xs:gap-4">
                    <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                      <label
                        className="text-xs sm:text-sm text-[#c1c6d7] font-medium"
                        htmlFor="expiry-date">Expiry Date</label>
                      <input
                        className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                        id="expiry-date"
                        type="text"
                        placeholder="MM / YY" />
                    </div>
                    <div className="mt-3 xs:mt-4 flex-1 flex flex-col gap-2">
                      <label
                        className="text-xs sm:text-sm text-[#c1c6d7] font-medium focus:text-[#adc6ff]"
                        htmlFor="cvv">CVV</label>
                      <input
                        className="w-full px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm bg-[#131313] border border-[#414755] rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#2563eb] placeholder:text-[#6b7280]"
                        id="cvv"
                        type="password"
                        placeholder="•••" />
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Left Side */}
          <div className="col-span-1 sm:col-span-5 flex flex-col">
            {/* Forms */}
            <div className="flex flex-col gap-6">

              {/* Order Summary */}
              <div className="px-3 py-4 xs:p-6 sm:p-8 bg-[#201f1f] border border-[#333333] rounded-lg sm:rounded-2xl">

                {/* Heading */}
                <h2 className="text-xl sm:text-3xl font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-2xl! sm:text-4xl! text-[#adc6ff]">
                    receipt
                  </span>
                  Order Summary
                </h2>

                {/* Summary Products Container */}
                <div className="mt-2 flex flex-col">
                  {/* Summary Product */}
                  {
                    cartProducts?.map(cartProduct => (
                      <div className="w-full py-2 flex items-start gap-2 sm:gap-3">

                        {/* Image */}
                        <div className="size-16 sm:size-20 aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                          <img
                            className="size-full aspect-square object-cover object-center"
                            src={cartProduct.imageURL[0]}
                            alt="" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-sm sm:text-md line-clamp-1 font-semibold">
                            {cartProduct.title}
                          </h3>
                          <p className="mt-1 flex-1 text-xs text-[#c1c6d7] line-clamp-2 font-medium">
                            {cartProduct.shortDescription}
                          </p>
                          <div className="mt-2 flex justify-between items-center">
                            <span className="text-xs sm:text-sm text-[#c1c6d7] font-medium">Qty: {cartProduct.quantity}</span>
                            <span className="text-md sm:text-lg text-[#c1c6d7] font-bold">Rs.{(cartProduct.salePrice * cartProduct.quantity).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>

                {/* Line */}
                <div className="w-full my-2 border-b border-[#414755]"></div>

                {/* Calculation */}
                <div className="py-2 flex flex-col">
                  <div className="py-1 flex justify-between items-center">
                    <span className="text-sm sm:text-md text-[#c1c6d7] font-medium">Subtotal</span>
                    <span className="text-sm sm:text-md font-medium">{subTotal.toLocaleString()}</span>
                  </div>
                  <div className="py-1 flex justify-between items-center">
                    <span className="text-sm sm:text-md text-[#c1c6d7] font-medium">Shipping</span>
                    <span className="text-sm sm:text-md font-medium">{shippingFee.toLocaleString()}</span>
                  </div>
                  <div className="py-1 flex justify-between items-center">
                    <span className="text-sm sm:text-md text-[#c1c6d7] font-medium">Taxes (Estimated)</span>
                    <span className="text-sm sm:text-md font-medium">{taxes.toLocaleString()}</span>
                  </div>

                </div>

                {/* Line */}
                <div className="w-full my-2 border-b border-[#414755]"></div>

                <div className="pt-1 pb-3 flex justify-between items-center">
                  <span className="text text-[#c1c6d7] font-medium">Total</span>
                  <span className="text-xl text-[#adc6ff] font-semibold">{total.toLocaleString()}</span>
                </div>

                <div className="py-2 flex items-center gap-3">
                  <button
                    className="group/button w-full sm:px-4 py-2 sm:py-3 flex justify-center items-center gap-2 font-semibold bg-[#007aff] rounded-lg transition-all cursor-pointer hover:bg-[#005bc1]"
                    to="/checkout">
                    Place Order
                    <span className="material-symbols-outlined text-lg! relative transition-all duration-300 group-hover/button:translate-x-2">
                      arrow_forward
                    </span>
                  </button>
                </div>

                <div className="py-2 flex items-center gap-3">
                  <p className="w-full text-xs text-center text-[#afb3c2] font-medium">
                    By placing your order, you agree to <br /><strong>Tech Store's</strong> Terms of Service and <br /> Privacy Policy.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartCheckout;

// Background color - #131313
// onSurfaceBackground: #201f1f
// Accent color - #adc6ff
// On surface color - #c1c6d7
// Surface color low - #1e1e1e
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