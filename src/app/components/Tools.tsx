const Tools = () => {
  return (
    <div className="w-full hidden lg:flex max-w-[594px] mx-auto bg-zinc-950 rounded-bl-[10px] rounded-br-[10px] shadow-[0px_20px_20px_0px_rgba(0,0,0,0.70)] border-l border-r border-b border-zinc-800 p-3 flex items-center gap-[11px]">
      <div className="h-[62px] min-w-[217px] cursor-pointer p-[18px] bg-zinc-900 rounded-[14px] outline outline-1 outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
        <div className="inline-flex justify-start items-center gap-3.5">
          <div>
            <img src="/assets/images/automatisierung.svg" alt="Icon" />
          </div>
          <div className="justify-start text-white text-base font-semibold font-sora">
            Solartechnik
          </div>
        </div>
      </div>
      <div className="h-[62px] min-w-[217px] cursor-pointer p-[18px] bg-zinc-900 rounded-[14px] outline outline-1 outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
        <div className="inline-flex justify-start items-center gap-3.5">
          <div>
            <img src="/assets/images/Webentwicklung.svg" alt="Icon" />
          </div>
          <div className="justify-start text-white text-base font-semibold font-sora">
            Energiespeicher
          </div>
        </div>
      </div>
      <div className="h-[62px] min-w-[109px] cursor-pointer p-[18px] bg-zinc-900 rounded-[14px] outline outline-1 outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
        <div className="inline-flex justify-start items-center gap-3.5">
          <div>
            <img src="/assets/images/searchSeo.svg" alt="Icon" />
          </div>
          <div className="justify-start text-white text-base font-semibold font-sora">
            Smart Home
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
