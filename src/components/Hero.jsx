function Hero() {
  return (
    <>
      <section className="relative h-180 w-full bg-[#131313] ">
        {/* Background Image */}
        <div class="absolute inset-0 z-1">
          <img class="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT9DnMABH-TPr4WuKd69jzc6HnXGeuR8cu4cGDiHmt-_mGg0gdHZJPBqmOs2h60UaJRbowM4DWbg75rGpbvS0wqQOYPPt9QmXJUSzQWMY3NsK5dejoS9jIrB-2bc8CaSeUKyr-oE9n2SpElcbups4-vPdYw_dzUDFyg-gTE538cwy-0IbzLlfCkBpuXiCD72SHpWJGlCHrxu83zKGJZSQA0b5gfG98wSuhUSthVnalwEFj1thFQuBZb_V4lKyJMW5Bb-z3j5Ttli0"/>
          <div class="absolute inset-0 bg-linear-to-r from-[#131313] via-[#131313]/80 to-transparent z-1"></div>
        </div>

        {/* Content */}
        <div className="h-full max-w-7xl mx-auto px-8 grid grid-cols-12 gap-6 items-center">          
          <div className="relative z-1 col-span-12 sm:col-span-5 flex flex-col">
            <p className="mb-4 text-xs text-[#adc6ff] tracking-widest font-medium animate-fade-up">
              FLAGSHIP RELEASE
            </p>
            <h2 className="mb-6 text-4xl md:text-6xl font-bold animate-fade-up">
              Silence, <br /> Perfected.
            </h2>
            <p className="mb-8 text-sm md:text-lg text-[#c1c6d7] animate-fade-up delay-200">
              Experience the next generation of acoustic engineering with our new Quantum Series headphones. Uncompromising sound, absolute isolation.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-stretch gap-4 sm:text-nowrap animate-fade-up delay-300">
              <button className="group/button px-8 py-4 flex justify-center items-center gap-2 text-sm font-medium bg-[#007aff] rounded-lg transition-all cursor-pointer hover:bg-[#005bc1]">
                Shop Quantum Series
                <span className="material-symbols-outlined text-lg! relative transition-all duration-300 group-hover/button:translate-x-3">
                  arrow_forward
                </span>
              </button>
              <button className="px-8 py-4 text-sm font-medium bg-[#201f1f] border border-[#414755] rounded-lg transition-all cursor-pointer hover:bg-[#353534]">
                Check Product
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;