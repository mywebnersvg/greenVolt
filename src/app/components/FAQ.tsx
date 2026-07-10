"use client";

import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question:
        "Wie schnell kann eine Solaranlage bei mir installiert werden?",
      answer:
        "Die Installation dauert in der Regel 1-3 Tage, abhängig von der Größe der Anlage. Von der ersten Beratung bis zur Inbetriebnahme vergehen meist 4-8 Wochen, inklusive Genehmigungen und Netzanmeldung.",
    },
    {
      question:
        "Welche Förderungen gibt es für Photovoltaik-Anlagen?",
      answer:
        "In Deutschland gibt es verschiedene Förderungen: Einspeisevergütung, KfW-Förderkredite und regionale Zuschüsse. Wir beraten Sie individuell und helfen bei der Beantragung aller verfügbaren Förderungen.",
    },
    {
      question:
        "Brauche ich einen Batteriespeicher für meine Solaranlage?",
      answer:
        "Ein Speicher erhöht Ihre Autarkie deutlich – von ca. 30% auf bis zu 80%. Besonders sinnvoll bei hohem Eigenverbrauch oder wenn Sie auch nachts von Solarstrom profitieren möchten.",
    },
    {
      question:
        "Wie hoch sind die Kosten für eine Solaranlage?",
      answer:
        "Die Kosten variieren je nach Größe und Ausstattung. Eine typische Einfamilienhaus-Anlage (10 kWp) kostet ca. 12.000-18.000€. Durch Förderungen und Stromkostenersparnis amortisiert sich die Anlage in 8-12 Jahren.",
    },
    {
      question:
        "Wie viel Strom kann meine Solaranlage produzieren?",
      answer:
        "In Deutschland produziert 1 kWp Solarleistung ca. 900-1.100 kWh pro Jahr. Eine 10 kWp Anlage deckt damit den Jahresbedarf eines typischen 4-Personen-Haushalts vollständig ab.",
    },
    {
      question:
        "Was passiert bei einem Stromausfall?",
      answer:
        "Standard-Solaranlagen schalten bei Netzausfall ab. Mit einem Notstrom- oder Vollspeicher-System können Sie auch bei Blackout weiter Strom nutzen – wir beraten Sie zu den besten Optionen.",
    },
  ];

  return (
    <div className="xl:mt-[146px] mt-[100px] w-full max-w-[1292px] mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
        <div className="w-full lg:max-w-[563px] py-4 md:py-8">
          <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-white font-sora font-semibold leading-normal 2xl:leading-[60px]">
            Häufig gestellte Fragen
          </p>
          <div className="mt-3">
            <span className="text-gray-400 text-sm sm:text-base lg:text-lg font-light font-sora leading-normal">
              Hast du keine Antwort auf deine Frage gefunden?
              <br />
            </span>
            <span className="text-white text-sm sm:text-base lg:text-lg font-light font-sora leading-normal">
              Frag uns hier!
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
