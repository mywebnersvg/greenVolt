"use client";
import { useState, useRef, useEffect } from "react";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // desktop dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobile menu
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(true);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <nav className="relative z-90 px-5 xl:px-10 py-[13.5px] bg-[#0A1210] border-b border-[#152018] backdrop-blur-lg inline-flex justify-between items-center w-full">
          <div className="flex items-center gap-2.5 xl:gap-8">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/assets/images/mainLogo.svg"
                  alt="logo"
                  className="w-10 h-10  md:w-14 md:h-14"
                />
              </div>
              <div className="text-center justify-start">
                <span className="text-white text-base sm:text-lg md:text-xl font-extrabold font-montserrat uppercase leading-normal md:leading-tight tracking-wide">
                  Green
                </span>
                <span className="text-white ttext-base sm:text-lg md:text-xl font-medium font-montserrat uppercase leading-normal md:leading-tight tracking-wide">
                  Volt
                </span>
              </div>
            </div>
            <LocaleSwitcher />
          </div>
          {/* Desktop Menu */}
          <div className="items-center gap-5 xl:gap-[42px] lg:flex hidden">
            <a
              href="#"
              className="text-white text-base font-semibold font-sora capitalize"
            >
              Home
            </a>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative inline-block"
            >
              <div className="w-full max-w-[203px] px-2.5 py-2 cursor-pointer h-[34px] bg-[#152018] rounded-[9px] inline-flex justify-between items-center gap-2">
                <span className="text-white text-base font-semibold font-sora capitalize">
                  Leistungen
                </span>
                <img
                  src="/assets/images/dropdownIcon.svg"
                  alt="dropdownIcon"
                  className={`w-3 h-1.5 transition-transform duration-200 ${
                    isHovered ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                style={{ transition: "all 0.5s ease" }}
                className={`w-full max-w-[594px] min-w-[594px] absolute -left-3.5 mx-auto bg-[#0A1210] shadow-[0px_20px_20px_0px_rgba(0,0,0,0.70)] rounded-bl-[10px] rounded-br-[10px] hidden lg:flex pt-6 top-6 pointer-events-none opacity-0 -mt-1.5 ${
                  isHovered
                    ? " max-h-auto top-10 opacity-100 !pointer-events-auto "
                    : " "
                }`}
              >
                <div className="border-l border-r border-b border-[#152018] p-3 rounded-bl-[10px] rounded-br-[10px] flex items-center gap-[11px]">
                  <div className="h-[62px] min-w-[217px] cursor-pointer p-[18px] bg-[#152018] rounded-[14px] outline  outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
                    <div className="inline-flex justify-start items-center gap-3.5">
                      <div>
                        <img
                          src="/assets/images/automatisierung.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="justify-start text-white text-base font-semibold font-sora">
                        Solartechnik
                      </div>
                    </div>
                  </div>
                  <div className="h-[62px] min-w-[217px] cursor-pointer p-[18px] bg-[#152018] rounded-[14px] outline  outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
                    <div className="inline-flex justify-start items-center gap-3.5">
                      <div>
                        <img
                          src="/assets/images/Webentwicklung.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="justify-start text-white text-base font-semibold font-sora">
                        Energiespeicher
                      </div>
                    </div>
                  </div>
                  <div className="h-[62px] min-w-[109px] cursor-pointer p-[18px] bg-[#152018] rounded-[14px] outline outline-offset-[-1px] transition-all duration-300 hover:brightness-120">
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
              </div>
            </div>
            <a
              href="#"
              className="text-white text-base font-semibold font-sora capitalize"
            >
              Referenzen
            </a>
            <a
              href="#"
              className="text-white text-base font-semibold font-sora capitalize"
            >
              Über uns
            </a>
            <a
              href="#"
              className="text-white text-base font-semibold font-sora capitalize"
            >
              Blog
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5 sm:gap-5 items-center relative z-90">
            <button
              type="button"
              className="lg:block hidden px-2 md:px-4 h-8 sm:h-10 bg-gradient-to-r from-emerald-400 to-emerald-800 rounded text-white font-sora text-sm sm:text-base font-semibold shadow transition-all duration-300 hover:brightness-110"
            >
              Kontakt
            </button>

            <div
              className="lg:hidden w-7 h-7 sm:w-10 sm:h-10 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <img
                src="/assets/images/menu.svg"
                alt="menu"
                className="w-full h-full"
              />
            </div>
          </div>
        </nav>

        <div
          style={{ transition: "all 0.5s ease" }}
          className={`absolute top-full left-0 w-full bg-[#0b0809a8] backdrop-blur-sm z-50 transition-all duration-300 transform ${
            mobileMenuOpen
              ? "translate-y-0"
              : "-translate-y-[400px] pointer-events-none"
          } lg:hidden`}
        >
          <div className="flex flex-col gap-1 py-2">
            <a
              href="#"
              className="text-white text-base font-semibold font-sora px-4 py-2 capitalize transition-all hover:bg-zinc-950/10"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-base font-semibold px-4 py-2 font-sora capitalize transition-all hover:bg-zinc-950/10"
            >
              Dienstleistungen
            </a>
            <a
              href="#"
              className="text-white text-base font-semibold px-4 py-2 font-sora capitalize transition-all hover:bg-zinc-950/10"
            >
              Referenzen
            </a>
            <a
              href="#"
              className="text-white text-base font-semibold px-4 py-2 font-sora capitalize transition-all hover:bg-zinc-950/10"
            >
              Über uns
            </a>
            <a
              href="#"
              className="text-white text-base font-semibold px-4 py-2 font-sora capitalize transition-all hover:bg-zinc-950/10"
            >
              Blog
            </a>
            <div className="px-4">
              <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-800 rounded text-white font-sora text-base font-semibold shadow hover:brightness-110">
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
