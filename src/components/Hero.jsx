import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [variable, setVariable] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    function calcResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", calcResize);

    return () => {
      window.removeEventListener("resize", calcResize);
    }
  }, []);

useEffect(() => {
  const slideWidth = slideRef.current?.offsetWidth || window.innerWidth;

  const interval = setInterval(() => {
    setVariable(prev => {
      const next = prev === 15 ? 0 : prev + 1;
      setTranslateXValue(slideWidth * next); // number, not string
      return next;
    });
  }, 7000);

  return () => clearInterval(interval);
}, []);


  // useEffect(() => {
  //   const newInterval = setInterval(() => {
  //     if (variable === 15) {
  //       setVariable(0);
  //     } else {
  //       setVariable(current => current + 1);
  //     }

  //     console.log(variable);

  //   }, 3000);

  //   return () => {
  //     clearInterval(newInterval);
  //   }
  // }, [variable]);

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //     setTranslateXValue(`${((windowWidth - 7) * variable)}px`);
  //     console.log(translateXValue);

  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [windowWidth, translateXValue]);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVariable(prev => {
  //       const next = prev === 15 ? 0 : prev + 1;
  //       setTranslateXValue(`${windowWidth * next}px`);
  //       return next;
  //     });
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [windowWidth]);



  return (
    <>
      <section className="relative h-180 w-full bg-[#131313] ">
        {/* Background Image */}
        <div className={`absolute inset-0 z-1 overflow-hidden`}>
          <div
            style={{
              transform: `translateX(-${translateXValue}px)`,
            }}  
            className="size-full flex transition-transform duration-300">

            <img ref={slideRef} className="size-full object-cover object-center shrink-0" src="headphones-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="keyboard-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="earbuds-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="monitor-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="headphones-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="keyboard-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="earbuds-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="monitor-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="headphones-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="keyboard-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="earbuds-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="monitor-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="headphones-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="keyboard-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="earbuds-product.jpg"/>
            <img className="size-full object-cover object-center shrink-0" src="monitor-product.jpg"/>

          </div>
          <div className="absolute inset-0 bg-linear-to-r from-[#131313] via-[#131313]/80 to-transparent z-1"></div>
        </div>

        {/* Content */}
        <div className="h-full max-w-7xl mx-auto px-8 grid grid-cols-12 gap-6 items-center">          
          <div className="relative z-1 col-span-12 sm:col-span-5 flex flex-col">
            <p className="mb-4 text-xs text-[#adc6ff] tracking-widest font-medium starting:opacity-0 opacity-100 transition-all duration-500 delay-700">
              FLAGSHIP RELEASE
            </p>
            <h2 className="mb-6 text-4xl md:text-6xl font-bold starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-200">
              Silence, <br /> Perfected.
            </h2>
            <p className="mb-8 text-sm md:text-lg text-[#c1c6d7] starting:opacity-0 starting:translate-y-6 opacity-100 translate-y-0 transition-all duration-500 delay-400">
              Experience the next generation of acoustic engineering with our new Quantum Series headphones. Uncompromising sound, absolute isolation.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-stretch gap-4 sm:text-nowrap starting:opacity-0 opacity-100 transition-all duration-500 delay-600">
              <Link 
                className="group/button px-8 py-4 flex justify-center items-center gap-2 text-sm font-medium bg-[#007aff] rounded-lg transition-all cursor-pointer hover:bg-[#005bc1]"
                to="/shop">
                Shop Quantum Series
                <span className="material-symbols-outlined text-lg! relative transition-all duration-300 group-hover/button:translate-x-3">
                  arrow_forward
                </span>
              </Link>
              <a 
                className="px-8 py-5 text-sm font-medium bg-[#201f1f] border border-[#414755] rounded-lg transition-all cursor-pointer hover:bg-[#353534]"
                href="#trending-products">
                Check Product
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;