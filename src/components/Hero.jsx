function Hero() {
  return (
    <>
      <main className="h-dvh w-full bg-[#131313] ">
        <section className="h-full max-w-7xl mx-auto px-8 grid grid-cols-12 gap-6 items-center">
          
          <div className="col-span-5 flex flex-col">
            <p className="mb-4 text-xs text-[#adc6ff] tracking-widest font-medium">
              FLAGSHIP RELEASE
            </p>
            <h2 className="mb-6 text-6xl font-bold">
              Silence, <br /> Perfected.
            </h2>
            <p className="mb-8 text-lg text-[#c1c6d7]">
              Experience the next generation of acoustic engineering with our new Quantum Series headphones. Uncompromising sound, absolute isolation.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-8 py-4 text-sm bg-[#007aff] rounded-lg cursor-pointer hover:bg-[#005bc1]">
                Shop Quantum Series
              </button>
              <button className="px-8 py-4 text-sm bg-[#201f1f] rounded-lg cursor-pointer hover:bg-[#353534]">
                Check Product
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;