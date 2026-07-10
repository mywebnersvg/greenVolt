"use client";
import { useRef } from "react";

const reviews = [
  {
    name: "Maria Schmidt",
    text: `"Die Solaranlage von GreenVolt hat unsere Energiekosten drastisch gesenkt. Perfekte Lösung für unser Einfamilienhaus – professionelle Beratung und schnelle Installation."`,
  },
  {
    name: "Thomas Weber",
    text: `Seit der Installation unserer Photovoltaikanlage sparen wir über 200€ monatlich. Die Kombination mit dem Batteriespeicher war die richtige Entscheidung – ROI bereits nach 18 Monaten erreicht.`,
  },
  {
    name: "Lisa Hartmann",
    text: `Endlich unabhängig vom Strompreis. Das Smart-Home-System von GreenVolt optimiert unsere Energieverbrauch automatisch. Unser CO₂-Ausstoß ist um 90% gesunken.`,
  },
];

const ReviewCard = ({
  name,
  text,
  onHoverStart,
  onHoverEnd,
}: {
  name: string;
  text: string;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => (
  <>
    <div
      className="shrink-0 border border-[#282828] rounded-[14px] w-[503px] h-[240px] bg-[#111A14] mx-3 cursor-pointer overflow-hidden"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="border-b border-[#282828] px-6 py-4 flex gap-3.5 items-center bg-[#152018]">
        <img src="/assets/images/aboutProfite.png" alt="profile" />
        <p className="text-white text-lg font-semibold font-sora mt-[7px]">
          {name}
        </p>
      </div>
      <div className="px-6 py-5 pt-[25px]">
        <p className="text-lg font-sora text-[#807F8C] leading-6">{text}</p>
      </div>
    </div>
    <svg
      width="76"
      height="5"
      viewBox="0 0 76 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.5"
        y1="2.25"
        x2="75.5"
        y2="2.25"
        stroke="#33323E"
        strokeWidth="4"
        strokeDasharray="8 8"
      />
    </svg>
  </>
);

const ReviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const pauseAnimation = () => {
    containerRef.current?.classList.add("paused");
  };

  const resumeAnimation = () => {
    containerRef.current?.classList.remove("paused");
  };

  return (
    <>
    <h2 className="font-sora font-semibold text-white text-center text-2xl sm:text-3xl lg:text-4xl  2xl:text-5xl leading-normal xl:mt-[146px] mt-[100px] mb-5 md:mb-[42px]">
      ...und was unsere Kunden sagen
    </h2>
    <div className=" overflow-hidden relative">
      <div className="relative h-[240px] w-full">
        <div className="absolute top-0 left-0 w-15 sm:w-30 lg:w-[267px] h-full bg-gradient-to-r from-[#0A1210] to-[#0A1210]/0 z-10" />
        <div className="absolute top-0 right-0 w-15 sm:w-30 lg:w-[267px] h-full rotate-180 bg-gradient-to-r from-[#0A1210] to-[#0A1210]/0 z-10" />

        <div
          ref={containerRef}
          className="flex w-max items-center animationControl2"
        >
          {[...Array(9)].flatMap((_, i) =>
            reviews.map((review, idx) => (
              <ReviewCard
                key={`${review.text}${i}-${idx}`}
                name={review.name}
                text={review.text}
                onHoverStart={pauseAnimation}
                onHoverEnd={resumeAnimation}
              />
            ))
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default ReviewSection;
