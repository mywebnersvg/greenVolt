"use client";

const logos = [
  "solarMax",
  "ecoPower",
  "sunTech",
  "greenWatt",
  "cleanEnergy",
];

const LogoCard = ({ label }: { label: string }) => (
  <div className="flex items-center px-8 2xl:px-12 gap-2 2xl:gap-[18px] shrink-0">
    <div className="2xl:w-10 2xl:h-10 w-6 h-6">
      <img
        src="/assets/images/slideLogo.svg"
        alt="logo"
        className="w-full h-full"
      />
    </div>
    <div className="text-white text-xl 2xl:text-[28px] font-bold font-sora leading-7">
      {label}
    </div>
  </div>
);

const AITools = () => {

  return (
    <div className="relative h-[80.88px] w-full mt-6 max-w-[1360px] px-6 mx-auto overflow-hidden">
      <div className="absolute top-0 left-0 w-[100px] xl:w-[267px] h-full bg-gradient-to-r from-[#0A1210] to-[#0A1210]/0 z-10" />
      <div className="absolute top-0 right-0 w-[100px] xl:w-[267px] h-full rotate-180 bg-gradient-to-r from-[#0A1210] to-[#0A1210]/0 z-10" />

      <div className="absolute top-[10px] left-0 h-[60px] flex w-max animationControl">
        {[...Array(6)].flatMap((_, i) =>
          logos.map((label, idx) => <LogoCard key={`${i}-${idx}`} label={label} />)
        )}
      </div>
    </div>
  );
};

export default AITools;
