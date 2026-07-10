"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("FAQ");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
  ];

  return (
    <div className="xl:mt-[146px] mt-[100px] w-full max-w-[1292px] mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
        <div className="w-full lg:max-w-[563px] py-4 md:py-8">
          <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-white font-sora font-semibold leading-normal 2xl:leading-[60px]">
            {t("title")}
          </p>
          <div className="mt-3">
            <span className="text-gray-400 text-sm sm:text-base lg:text-lg font-light font-sora leading-normal">
              {t("noAnswer")}
              <br />
            </span>
            <span className="text-white text-sm sm:text-base lg:text-lg font-light font-sora leading-normal">
              {t("askUs")}
            </span>
          </div>
        </div>

        <div className="w-full max-w-full lg:max-w-[705px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-8 cursor-pointer border-b border-solid border-[#807F8C]"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer flex justify-between items-center w-full text-white text-xl font-normal font-sora leading-[32px] text-left"
              >
                <div className="w-full max-w-[570px]">{faq.question}</div>
                <span className="text-white text-lg sm:text-xl lg:text-2xl transition-all duration-300">
                  {activeIndex === index ? (
                    <img
                      src="/assets/images/minus.svg"
                      alt="minus"
                      className="w-5 h-5 inline"
                    />
                  ) : (
                    <img
                      src="/assets/images/plus.svg"
                      alt="plus"
                      className="w-5 h-5 inline"
                    />
                  )}
                </span>
              </button>

              <div
                style={{ transition: "all 0.5s ease" }}
                className={activeIndex === index ? "h-[108px]" : "h-0"}
              >
                {activeIndex === index && (
                  <p
                    className={`mt-3 text-xs sm:text-base lg:text-lg font-light font-sora leading-normal text-[#807F8C] transition-all duration-300`}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
