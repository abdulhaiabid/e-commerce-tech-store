function Feature() {
  return (
    <>
      <section className="min-h-180 w-full py-30 bg-[#131313]">
        <div className="max-w-7xl mx-auto px-8">

            <h1 className="mb-2 text-3xl font-semibold">Ecosystem</h1>

            <div className="mb-12 flex justify-between items-center">
              <p className="text-[#c1c6d7] text-md font-medium">
                Curated categories for the modern workspace.
              </p>
              <button className="group/button px-2 py-2 sm:p-0 flex justify-center items-center gap-0 sm:gap-2 text-sm sm:text-[#adc6ff] bg-[#201f1f] sm:bg-transparent border sm:border-none border-[#414755] rounded-lg sm:rounded-none font-medium transition-all cursor-pointer sm:hover:text-[#4989f6] hover:bg-[#353534] ">
                View All Categories
                <span className="material-symbols-outlined relative text-md! text-[#adc6ff] font-medium! transition-all group-hover/button:text-[#4989f6] group-hover/button:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Bento Grid */}
            <div className=" h-auto md:h-150 w-full grid grid-cols-1 md:grid-rows-2 md:grid-cols-12 gap-6">

              <div className="group/bento-image-1 h-75 md:h-full w-full relative col-span-1 md:row-span-2 md:col-span-8 rounded-xl overflow-clip">
                <div className="absolute inset-0">
                  <img className="w-full h-full object-cover object-center group-hover/bento-image-1:scale-110 transition-all duration-700" src="laptop-display-image.jpg" alt="" />
                  <div class="absolute inset-0 bg-linear-to-t from-[#131313]/90 to-transparent z-1"></div>
                </div>

                <div className="mb-3 ml-5 md:ml-8 absolute bottom-0 z-2">
                  <h1 className="mb-2 md:mb-0 text-xl md:text-3xl font-semibold transition-all duration-700  translate-y-6 group-hover/bento-image-1:translate-y-0">Laptops</h1>
                  <p className="group/button text-[#c1c6d7] text-xs md:text-md font-medium transition-all duration-900 translate-y-6 opacity-0 group-hover/bento-image-1:translate-y-0 group-hover/bento-image-1:opacity-100">Power without compromise. Engineered for creators.</p>
                  <button className="group/button flex items-center gap-2 text-xs text-[#adc6ff] font-medium transition-all duration-1200 cursor-pointer hover:text-[#4989f6] translate-y-6 opacity-0 group-hover/bento-image-1:translate-y-0 group-hover/bento-image-1:opacity-100">
                    Explore Laptops
                    <span className="material-symbols-outlined relative text-sm! text-[#adc6ff] font-medium! transition-all group-hover/button:text-[#4989f6] group-hover/button:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
              

              
              <div className="group/bento-image-2 h-75 md:h-full w-full relative md:col-span-4 rounded-xl overflow-clip">
                <div className="absolute inset-0">
                  <img className="w-full h-full object-cover object-center group-hover/bento-image-2:scale-110 transition-all duration-700" src="mic-display-image.jpg" alt="" />
                  <div class="absolute inset-0 bg-linear-to-t from-[#131313]/90 to-transparent z-1"></div>
                </div>

                <div className="mb-3 ml-5 absolute bottom-0 z-2">
                  <h1 className="text-xl font-semibold transition-all duration-700  translate-y-2 group-hover/bento-image-2:translate-y-0">Microphone</h1>
                  <button className="group/button flex items-center gap-2 text-xs text-[#adc6ff] font-medium transition-all duration-1200 cursor-pointer hover:text-[#4989f6] translate-y-1 opacity-0 group-hover/bento-image-2:translate-y-0 group-hover/bento-image-2:opacity-100">
                    Shop Sound
                    <span className="material-symbols-outlined relative text-sm! text-[#adc6ff] font-medium! transition-all group-hover/button:text-[#4989f6] group-hover/button:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              <div className="group/bento-image-3 h-75 md:h-full w-full relative md:col-span-4 rounded-xl overflow-clip">
                <div className="absolute inset-0">
                  <img className="w-full h-full object-cover object-center group-hover/bento-image-3:scale-110 transition-all duration-700" src="watch-display-image.jpg" alt="" />
                  <div class="absolute inset-0 bg-linear-to-t from-[#131313]/90 to-transparent z-1"></div>
                </div>

                <div className="mb-3 ml-5 absolute bottom-0 z-2">
                  <h1 className="text-xl font-semibold transition-all duration-700  translate-y-2 group-hover/bento-image-3:translate-y-0">Wearables</h1>
                  <button className="group/button flex items-center gap-2 text-xs text-[#adc6ff] font-medium transition-all duration-1200 cursor-pointer hover:text-[#4989f6] translate-y-1 opacity-0 group-hover/bento-image-3:translate-y-0 group-hover/bento-image-3:opacity-100">
                    Shop Smart
                    <span className="material-symbols-outlined relative text-sm! text-[#adc6ff] font-medium! transition-all group-hover/button:text-[#4989f6] group-hover/button:translate-x-1">
                      arrow_forward
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

export default Feature;