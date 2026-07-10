import { useState, useReducer, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import products from "/src/data/products.json";
import { Link, useParams, useLocation } from "react-router-dom";

function quantityReducer(state, action) {
  switch (action.type) {
    case "INCREAMENT":
      return state = state + 1;
    case "DECREMENT":
      if (state > 1) {
        return state = state - 1;
      } else {
        return state;
      }
    default:
      throw new Error('Unknown action type');
  }
}

function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [productDisplayPicture, setProductDisplayPicture] = useState();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [displayImageStyles, setDisplayImageStyles] = useState({
    transformOrigin: "center"
  });
  const [quantity, quantityDispatch] = useReducer(quantityReducer, 1);
  const { pid } = useParams();

  useEffect(() => {
    const currentProduct = products.find(product => product.id === pid);
    setProduct(currentProduct);
    setProductDisplayPicture(currentProduct.imageURL[0]);
    setLoading(false);
  }, [pid]);

  // const location = useLocation();
  // const pathnames = location.pathname.split("/").filter(x => x);



  

  // Fetch product data
  // useEffect(() => {
  //   fetch("/src/data/products.json")
  //   .then(res => console.log(res))
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
  //   .finally(setProduct(data));
  // }, []);

  // This function selects which image to display.
  function handleDisplayImage(image) {
    setProductDisplayPicture(image)
  }

  // This function toggles wishlist button.
  // function handleWishButton() {
  //   setProduct(current => ({ ...current, wishlist: !product.wishlist }));
  // }

  // This function handles the magnifying effect on display image.
  function handleMouseMoveOnDisplayImage(e) {
    const coordinates = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    }

    const styles = {
      ...setDisplayImageStyles,
      transformOrigin: `${coordinates.x}px ${coordinates.y}px`
    }

    setDisplayImageStyles(styles);
  }

  function handleColorSelect(colorName) {
    const updatedColors = product.colors.map(color => color.name === colorName ? { ...color, isSelected: true } : { ...color, isSelected: false });

    console.log(updatedColors);
    setProduct(currentProduct => ({ ...currentProduct, colors: updatedColors }));
  }

  if (loading) {
    return <p>Loading product...</p>; // or a spinner
  }


  return (
    <>
      {/* <Navbar /> */}

      {/* Product starts from here. */}
      <section className="min-h-180 w-full text-white bg-[#131313]">

        <div className="h-full max-w-7xl mx-auto px-8 py-30">
          
          {/* Navigation address */}
          <div className="mb-8 hidden sm:flex sm:items-center sm:gap-2">
            {
              // pathnames.map((path, index) => {
              //   const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              //   const isLast = index === pathnames.length - 1;
              //   return (
              //     <span key={name} >
              //       <Link 
              //         className="text-sm text-[#c1c6d7] font-medium transition-color duration-300 cursor-pointer hover:text-[#adc6ff]"
              //         to="/">
              //         {
              //           isLast ? (
              //             <span className="text-sm text-[#c1c6d7]">{name}</span>
              //           ) : (
              //             <Link to={routeTo} className="text-sm text-[#c1c6d7] hover:text-[#adc6ff]">
              //               {name}
              //             </Link>
              //           )
              //         }
              //       </Link>
              //       <span className="material-symbols-outlined text-md! text-[#c1c6d7] font-medium">
              //         chevron_right
              //       </span>
              //     </span>
              //     )
              //   }
              // )
            }
          </div>

          {/* Main */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-6">

            {/* Image */}
            <div className="col-span-1 sm:col-span-6 flex flex-col gap-6">
              {/* Display Image */}
              <div 
                className="group/displayImage aspect-square relative rounded-2xl overflow-hidden">
                <img 
                  style={displayImageStyles}
                  className="size-full object-contain object-center transition-transform duration-300 cursor-crosshair group-hover/displayImage:scale-200"
                  src={productDisplayPicture} 
                  alt="keyboard-product"
                  onMouseMove={handleMouseMoveOnDisplayImage} />
                
                {/* Display Image Tag */}
                <div className="px-4 absolute left-0 top-4 flex items-center gap-2">
                {
                  product.tag !== undefined ? (
                  product.tag.map(tag => (
                    <span
                      key={product.id + "-" + tag} 
                      className="px-3 py-1 text-sm text-[#adc6ff] font-medium bg-[#adc6ff]/10 backdrop-blur-md border-[0.5px] border-[#adc6ff]/20 rounded-lg">
                        {tag}
                    </span>
                  ))) : null
                }
                </div>
              </div>

              {/* Other Images */}
              <div className="max-h-25 w-full flex justify-start items-start gap-4">
                {
                  product.imageURL.map(image => (
                    <button 
                      key={product.id + "-" + image}
                      className="h-full aspect-square rounded-2xl cursor-pointer overflow-hidden"
                      onClick={() => handleDisplayImage(image)} >
                      <img 
                        className="size-full object-contain object-center"
                        src={image} 
                        alt="" />
                    </button>
                  ))
                }
              </div>

            </div>

            {/* Content */}
            <div className="pt-4 col-span-1 sm:col-span-6 flex flex-col">

              {/* Heading */}
              <h2 className="text-2xl sm:text-4xl font-medium">
                { product.title }
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-lg text-[#c1c6d7]">
                { product.detailedDescription }
              </p>

              {/* Rating, wishlist and share */}
              <div className="mt-4 flex justify-between items-center">

                {/* Rating - Incomplete */}
                <div className="flex-1 flex items-center">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-lg! text-yellow-300 [font-variation-settings:'FILL'_1]">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg! text-yellow-300 [font-variation-settings:'FILL'_1]">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg! text-yellow-300 [font-variation-settings:'FILL'_1]">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg! text-yellow-300 [font-variation-settings:'FILL'_1]">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg! text-gray-300 [font-variation-settings:'FILL'_1]">
                        star
                    </span>
                  </div>
                  <span className="ml-2 text-[#c1c6d7]">
                    4/5
                  </span>
                </div>

                <div className="flex items-center">
                  {/* Share Button */}
                  <button className="px-3 py-3 flex justify-center items-center font-semibold rounded-full transition-all cursor-pointer hover:bg-[#1e1e1e]">
                    <span className="material-symbols-outlined">
                      share
                    </span>
                  </button>

                  {/* Wishlist Icon */}
                  <button 
                    className={`px-3 py-3 flex justify-center items-center font-semibold rounded-full transition-all cursor-pointer hover:bg-[#1e1e1e]`}
                    onClick={() => handleWishButton()}>
                    <span 
                      className={`material-symbols-outlined text-[#adc6ff] transition-colors duration-300
                      ${ product.wishlist ? "[font-variation-settings:'FILL'_1]" : "[font-variation-settings:'FILL'_0]" }`}>
                      favorite
                    </span>
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-start gap-2">
                <span className="text-2xl text-[#adc6ff] font-semibold">
                  {`Rs.${ product.salePrice.toLocaleString('en-US') }`}
                </span>
                <span className="text-[#c1c6d7] line-through font-semibold">
                  {`Rs.${ product.listPrice.toLocaleString() }`}
                </span>
              </div>

              {/* Colors */}
              <div className="mt-4 flex flex-col gap-2">
                <span className="flex items-center gap-2 text-lg font-semibold">
                  Color: 
                  {
                    product.colors.map(color => ( color.isSelected ? <span className="text-lg text-[#c1c6d7] font-medium">{ color.name }</span> : null ))
                  }
                </span>
                <div className="flex items-center gap-2">
                {
                  product.colors.map(color => (
                    <button
                      key={color.name}
                      style={{
                        backgroundColor: color.hex
                      }} 
                      className={`size-8 aspect-square ${ color.isSelected ? "ring-3 ring-[#adc6ff]" : "ring-none" } rounded-full cursor-pointer`}
                      onClick={() => handleColorSelect(color.name)}
                      ></button>
                  ))
                }
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-lg font-semibold">
                  Quantity
                </span>
                <div className="flex items-center">
                  <button 
                    className="pl-3 pr-2 py-2 bg-[#1e1e1e] border border-[#414755] rounded-l-full leading-0! cursor-pointer"
                    onClick={() => {quantityDispatch({type: "DECREMENT"})}}>
                    <span className="material-symbols-outlined">
                      remove
                    </span>
                  </button>

                  <span className="px-4 py-2 self-stretch bg-[#1e1e1e] border border-[#414755]">
                    { quantity }
                  </span>

                  <button className="pr-3 pl-2 py-2 bg-[#1e1e1e] border border-[#414755] rounded-r-full leading-0! cursor-pointer"
                    onClick={() => {quantityDispatch({type: "INCREAMENT"})}}>
                    <span className="material-symbols-outlined">
                      add
                    </span>
                  </button>
                </div>
              </div>

              {/* Buy and Add to Cart Buttons */}
              <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-4">
                {/* Buy now button */}
                <button className="px-4 py-3 font-semibold bg-[#007aff] rounded-lg transition-all cursor-pointer hover:bg-[#005bc1]">
                  Buy Now
                </button>
                {/* Add to cart button */}
                <button className="px-4 py-3 flex justify-center items-center gap-2 font-semibold bg-[#353534] rounded-lg transition-all cursor-pointer hover:bg-[#1e1e1e]">
                  Add To Cart
                  <span className="material-symbols-outlined text-lg!">
                  add_shopping_cart
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Product;

// Background color - #131313
// Accent color - #adc6ff
// On surface color - #c1c6d7
// Surface color low - #1e1e1e
// Surface color high - #353534
// Outline - #414755
// Border - #333333
// gutter - 24px
