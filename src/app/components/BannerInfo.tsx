"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlapDigit = ({ value }: { value: string }) => {
  return (
    <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full h-full flex items-center justify-center md:pt-[2px]"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const BannerInfo = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);
  const containerRef4 = useRef<HTMLDivElement>(null);
  const containerRef5 = useRef<HTMLDivElement>(null);
  const containerRef6 = useRef<HTMLDivElement>(null);
  const containerRef7 = useRef<HTMLDivElement>(null);
  const containerRef8 = useRef<HTMLDivElement>(null);
  const containerRef9 = useRef<HTMLDivElement>(null);
  const containerRef10 = useRef<HTMLDivElement>(null);
  const containerRef11 = useRef<HTMLDivElement>(null);
  const containerRef12 = useRef<HTMLDivElement>(null);
  const containerRef13 = useRef<HTMLDivElement>(null);

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => setIsMobile(isMobile);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Target values (as numbers)
  const targetValues = {
    num1: 1552300,
    num2: 22037,
    num3: 163374,
    num4: 1552300,
    num5: 22037,
    num6: 163374,
  };

  useEffect(() => {
    const delay = 0; // 1.5-second delay
    const interval = 2000; // Update every 100ms (adjust speed here)

    const timer = setTimeout(() => {
      const intervalId = setInterval(() => {
        setNumber1((prev) => increment(prev, targetValues.num1));
        setNumber2((prev) => increment(prev, targetValues.num2));
        setNumber3((prev) => increment(prev, targetValues.num3));
        setNumber4((prev) => increment(prev, targetValues.num4));
        setNumber5((prev) => increment(prev, targetValues.num5));
        setNumber6((prev) => increment(prev, targetValues.num6));
      }, interval);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const increment = (current: number, target: number) => {
    return current < target ? current + 1 : target;
  };

  const formatNumber = (num: number, target: number) => {
    const formatted = num.toLocaleString("de-DE");
    const targetLength = target.toString().length;
    const currentLength = formatted.replace(/[.,]/g, "").length;
    const zerosNeeded = Math.max(0, targetLength - currentLength);
    return "0".repeat(zerosNeeded) + formatted;
  };

  const formatted1 = formatNumber(number1, targetValues.num1);
  const formatted2 = formatNumber(number2, targetValues.num2);
  const formatted3 = formatNumber(number3, targetValues.num3);
  const formatted4 = formatNumber(number4, targetValues.num4);
  const formatted5 = formatNumber(number5, targetValues.num5);
  const formatted6 = formatNumber(number6, targetValues.num6);
  const handleResize = (container: HTMLDivElement | null) => {
    if (!container) return;

    const isMobileView = window.innerWidth < 1024;
    const boxes = Array.from(
      container.querySelectorAll<HTMLElement>(".flap-char-container")
    );

    // Unhide all boxes
    boxes.forEach((box) => box.classList.remove("!hidden"));
    

    const containerWidth = container.clientWidth;
    let totalWidth = boxes.reduce((sum, box) => sum + box.offsetWidth + 6, 0); // Add spacing

    if (isMobileView) {
      // Mobile: hide from right only
      let i = boxes.length - 1;
      while (totalWidth > containerWidth && i >= 0) {
        const box = boxes[i];
        totalWidth -= box.offsetWidth + 6;
        box.classList.add("!hidden");
        i--;
      }
    } else {
      // Desktop: hide from both sides
      let start = 0;
      let end = boxes.length - 1;
      while (totalWidth > containerWidth && end - start >= 0) {
        const startBox = boxes[start];
        const endBox = boxes[end];
        totalWidth -= startBox.offsetWidth + 6;
        startBox.classList.add("!hidden");
        if (start < end) {
          totalWidth -= endBox.offsetWidth + 6;
          endBox.classList.add("!hidden");
        }
        start++;
        end--;
      }
    }
  };

  useEffect(() => {
    const onResize = () => {
      handleResize(containerRef1.current);
      handleResize(containerRef2.current);
      handleResize(containerRef3.current);
      handleResize(containerRef4.current);
      handleResize(containerRef5.current);
      handleResize(containerRef6.current);
      handleResize(containerRef7.current);
      handleResize(containerRef8.current);
      handleResize(containerRef9.current);
      handleResize(containerRef10.current);
      handleResize(containerRef11.current);
      handleResize(containerRef12.current);
      handleResize(containerRef13.current);
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, [formatted1, formatted2, formatted3, formatted4]);

  return (
    <div className="xl:mt-[170px] mt-[100px] overflow-hidden">
      <h4 className="text-white lg:text-5xl text-3xl text-center font-semibold font-sora">
        Vorteile, die unsere Kunden genießen
      </h4>
      <p className="lg:text-2xl text-xl font-normal font-sora mt-2 text-[#807F8C] text-center">
        Über 200 erfolgreich installierte Solaranlagen sprechen für sich:
      </p>

      <div className="relative w-fit mx-auto mt-[42px]">
        <div className="hidden flex-col font-sora w-full gap-2 lg:flex">
          <div
            ref={containerRef1}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {[...Array(36)].map((_, i) => (
              <FlapDigit key={i} value=" " />
            ))}
          </div>

          <div
            ref={containerRef2}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden  relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold hidden  items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden  relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex 2xl:hidden  items-center justify-center font-sora"></div>

            {["G", "E", "S", "P", "A", "R", "T", " ", " ", " "].map(
              (char, i) => (
                <FlapDigit key={`static1-${i}`} value={char} />
              )
            )}
            <div className="flap-char-container overflow-hidden  relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex 2xl:hidden  items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden  relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex 2xl:hidden  items-center justify-center font-sora"></div>
            <div className="flap-char-container hidden 2xl:flex overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold items-center justify-center font-sora"></div>
            <div className="flap-char-container hidden 2xl:flex overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold items-center justify-center font-sora"></div>
            <div className="flap-char-container hidden 2xl:flex overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold items-center justify-center font-sora"></div>
            <div className="flap-char-container hidden 2xl:flex overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold items-center justify-center font-sora"></div>
            <div className="flap-char-container hidden 2xl:flex overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold items-center justify-center font-sora"></div>
            {formatted1.split("").map((char, i) => (
              <FlapDigit key={`number1-${i}`} value={char} />
            ))}
            <FlapDigit value="€" />
            {Array(5)
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`post-euro-${i}`} value=" " />
              ))}
              
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
          </div>

          <div
            ref={containerRef3}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>

            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            {["K", "I", "L", "O", "W", "A", "T", "T", " ", " "].map(
              (char, i) => (
                <FlapDigit key={`static2-${i}`} value={char} />
              )
            )}
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            {formatted2.split("").map((char, i) => (
              <FlapDigit key={`number2-${i}`} value={char} />
            ))}
            <FlapDigit value="St." />
            {Array(4)
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`post-st-${i}`} value=" " />
              ))}
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>

            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
          </div>

          <div
            ref={containerRef4}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>

            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            {["R", "E", "D", "U", "Z", "I", "E", "R", "T", " ", " "].map(
              (char, i) => (
                <FlapDigit key={`static3-${i}`} value={char} />
              )
            )}
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden hidden 2xl:flex relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>

            {/* <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div> */}
            {formatted3.split("").map((char, i) => (
              <FlapDigit key={`number3-${i}`} value={char} />
            ))}
            <FlapDigit value="h" />
            {Array(4)
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`post-h-${i}`} value=" " />
              ))}
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden 2xl:hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
            <div className="flap-char-container overflow-hidden relative w-[34px] xl:w-[47.5px] h-[48px] xl:h-[60px] text-xl xl:text-[30px] bg-[#0D1510] border border-[#1E3A2F] rounded-[10px] text-white font-semibold flex items-center justify-center font-sora"></div>
          </div>

          <div
            ref={containerRef5}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {[...Array(36)].map((_, i) => (
              <FlapDigit key={i} value=" " />
            ))}
          </div>
        </div>
        <div className="flex lg:hidden flex-col font-sora w-full gap-2">
          {/* Line 1 - Empty (32 boxes) */}
          <div
            ref={containerRef6}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {Array(32)
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`line1-${i}`} value=" " />
              ))}
          </div>

          {/* Line 2 - "ERSPART" */}
          <div
            ref={containerRef7}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {/* Initial boxes (1 on mobile, 4 on desktop) */}
            <div
              className={`flap-char-container ${
                isMobile ? "flex" : "hidden sm:flex"
              }`}
            ></div>
            {!isMobile && (
              <>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
              </>
            )}

            {/* "GESPART" text (7 boxes) */}
            {["G", "E", "S", "P", "A", "R", "T"].map((char, i) => (
              <FlapDigit key={`erspart-${i}`} value={char} />
            ))}

            {/* Fill remaining boxes (32 total) */}
            {Array(32 - (!isMobile ? 11 : 8))
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`fill2-${i}`} value=" " />
              ))}
          </div>

          {/* Line 3 - Number with € */}
          <div
            ref={containerRef8}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {/* Initial boxes (1 on mobile, 6 on desktop) */}
            <div
              className={`flap-char-container ${
                isMobile ? "flex" : "hidden sm:flex"
              }`}
            ></div>
            {!isMobile && (
              <>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                {/* <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div> */}
              </>
            )}

            {/* Dynamic number + € symbol */}
            {formatted4.split("").map((char, i) => (
              <FlapDigit key={`num4-${i}`} value={char} />
            ))}
            <FlapDigit value="€" />

            {/* Fill remaining boxes (32 total) */}
            {Array(
              32 - (formatted4.length + 1 + (!isMobile ? 6 : 1))
            )
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`fill3-${i}`} value=" " />
              ))}
          </div>

          {/* Line 4 - "WORKFLOWS" */}
          <div
            ref={containerRef9}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {/* Initial boxes (1 on mobile, 5 on desktop) */}
            <div
              className={`flap-char-container ${
                isMobile ? "flex" : "hidden sm:flex"
              }`}
            ></div>
            {!isMobile && (
              <>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                {/* <div className="flap-char-container hidden sm:flex"></div> */}
              </>
            )}

            {/* "KILOWATT" text (8 boxes) */}
            {["K", "I", "L", "O", "W", "A", "T", "T"].map((char, i) => (
              <FlapDigit key={`workflows-${i}`} value={char} />
            ))}

            {/* Fill remaining boxes (32 total) */}
            {Array(32 - (8 + (!isMobile ? 5 : 1)))
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`fill4-${i}`} value=" " />
              ))}
          </div>

          {/* Line 5 - Number with "St." */}
          <div
            ref={containerRef10}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {/* Initial boxes (1 on mobile, 5 on desktop) */}
            <div
              className={`flap-char-container ${
                isMobile ? "flex" : "hidden sm:flex"
              }`}
            ></div>
            {!isMobile && (
              <>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                {/* <div className="flap-char-container hidden sm:flex"></div> */}
              </>
            )}

            {/* Dynamic number + "St." */}
            {formatted5.split("").map((char, i) => (
              <FlapDigit key={`num5-${i}`} value={char} />
            ))}
            <FlapDigit value="St." />

            {/* Fill remaining boxes (32 total) */}
            {Array(
              32 - (formatted5.length + 1 + (!isMobile ? 5 : 1))
            )
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`fill5-${i}`} value=" " />
              ))}
          </div>

          {/* Line 6 - "AUFGFELÖST" */}
          <div
            ref={containerRef11}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {/* Initial boxes (1 on mobile, 5 on desktop) */}
            <div
              className={`flap-char-container ${
                isMobile ? "flex" : "hidden sm:flex"
              }`}
            ></div>
            {!isMobile && (
              <>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                {/* <div className="flap-char-container hidden sm:flex"></div> */}
              </>
            )}

            {/* "REDUZIERT" text (9 boxes) */}
            {["R", "E", "D", "U", "Z", "I", "E", "R", "T"].map(
              (char, i) => (
                <FlapDigit key={`aufgfelost-${i}`} value={char} />
              )
            )}

            {/* Fill remaining boxes (32 total) */}
            {Array(32 - (9 + (!isMobile ? 5 : 1)))
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`fill6-${i}`} value=" " />
              ))}
          </div>

          {/* Line 7 - Number with "h" */}
          <div
            ref={containerRef12}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {/* Initial boxes (1 on mobile, 5 on desktop) */}
            <div
              className={`flap-char-container ${
                isMobile ? "flex" : "hidden sm:flex"
              }`}
            ></div>
            {!isMobile && (
              <>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                <div className="flap-char-container hidden sm:flex"></div>
                {/* <div className="flap-char-container hidden sm:flex"></div> */}
              </>
            )}

            {/* Dynamic number + "h" */}
            {formatted6.split("").map((char, i) => (
              <FlapDigit key={`num6-${i}`} value={char} />
            ))}
            <FlapDigit value="h" />

            {/* Fill remaining boxes (32 total) */}
            {Array(
              32 - (formatted6.length + 1 + (!isMobile ? 5 : 1))
            )
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`fill7-${i}`} value=" " />
              ))}
          </div>

          {/* Line 8 - Empty (32 boxes) */}
          <div
            ref={containerRef13}
            className="flex gap-1.5 justify-center flex-wrap"
          >
            {Array(32)
              .fill(" ")
              .map((_, i) => (
                <FlapDigit key={`line8-${i}`} value=" " />
              ))}
          </div>
        </div>
        <div className="absolute hidden lg:block -top-6 manageLeftFade -left-[37px] w-11 sm:w-30 lg:w-[134px] 2xl:w-[233px] h-full min-h-[400px] bg-[#0A1210] blur-[14px] md:blur-[18px] xl:blur-[30px] 2xl:blur-[20px]  z-10" />
        <div className="absolute hidden lg:block -top-6 manageRightFade -right-[37px] w-11 sm:w-30 lg:w-[134px] 2xl:w-[233px] h-full min-h-[400px] rotate-180 bg-[#0A1210] blur-[14px]  md:blur-[18px] xl:blur-[30px] 2xl:blur-[20px] z-10" />
      </div>
    </div>
  );
};

export default BannerInfo;
