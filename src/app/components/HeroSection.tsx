const HeroSection = () => {
  return (
    <div className="pt-7 xl:pt-[140px] w-full max-w-[992px] mx-auto relative">
      <div className="relative z-10">
        <h2 className="text-center justify-start text-white text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-semibold font-sora leading-normal xl:leading-[72px]">
          Spare Energie und Geld mit smarter Solartechnik
        </h2>
        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[522px] mx-auto">
          <img src="/assets/images/curveLine.svg" alt="line" />
        </div>
        <div className=" mt-3 pt-px text-center justify-start text-base md:text-xl xl:text-2xl font-sora leading-normal xl:leading-8">
          <span className="text-[#C6D5DD] font-normal">
            Unsere Solaranlagen sparen mehr als
          </span>
          <span className="text-[#C6D5DD] font-bold">{" "}2.500€</span>
          <span className="text-[#C6D5DD] font-normal">
            {" "}
            pro Monat und reduzieren den CO₂-Ausstoß um über
          </span>
          <span className="text-[#C6D5DD] font-bold">{" "}85%</span>
          <span className="text-[#C6D5DD] font-normal">.</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-8 items-center justify-center">
          <button
            type="button"
            className="px-4 h-10 py-2 pt-2.5 bg-gradient-to-r from-emerald-500 to-emerald-800 rounded shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05)] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-emerald-400 inline-flex justify-center items-center gap-2.5 cursor-pointer transition-all duration-300 hover:brightness-120"
          >
            <p className="justify-start text-white text-lg font-semibold font-sora leading-normal">
              Jetzt beraten lassen
            </p>
          </button>
          <button
            type="button"
            className="px-4 h-10 py-2 pt-2.5 bg-gradient-to-r from-neutral-500/60 to-neutral-400/60 rounded shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05)] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 inline-flex justify-center items-center gap-2.5 cursor-pointer transition-all duration-300 hover:brightness-120"
          >
            <p className="justify-start text-white text-lg font-semibold font-sora leading-normal">
              Wie funktioniert&apos;s
            </p>
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#064E3B] to-[#059669] h-[250px] absolute bottom-0 w-full blur-[300px]"></div>
      <div className="bg-gradient-to-br from-[#064E3B] to-[#059669] absolute w-[500px] h-[300px] md:h-[200px] -bottom-[296px] md:-bottom-[58px] right-0 rounded-full blur-[86px] z-auto md:z-[5]"></div>
    </div>
  );
};

export default HeroSection;
