import React, { useState, useEffect, useRef } from "react";
import "animate.css"; // Pastikan animate.css diimpor

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  const headerRef = useRef(null);
  const accordionRef = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa itu Braincore.id?",
      answer:
        "Braincore.id adalah platform yang menyediakan layanan konsultasi dan pengerjaan proyek berbasis teknologi kecerdasan buatan untuk pelajar dan pekerja profesional.",
    },
    {
      question: "Apa saja layanan yang disediakan?",
      answer:
        "Kami menyediakan layanan konsultasi di bidang Data Science, Machine Learning, dan Artificial Intelligence, serta pengerjaan proyek berbasis AI.",
    },
    {
      question: "Siapa yang dapat menggunakan layanan Braincore.id?",
      answer:
        "Layanan kami ditujukan untuk pelajar, profesional, dan perusahaan yang ingin memanfaatkan teknologi AI untuk meningkatkan kemampuan mereka.",
    },
    {
      question: "Bagaimana cara menghubungi Braincore.id?",
      answer:
        "Anda dapat menghubungi kami melalui halaman Kontak di website atau langsung melalui email yang tersedia.",
    },
  ];

  useEffect(() => {
    // Capture current refs in variables
    const currentHeaderRef = headerRef.current;
    const currentAccordionRef = accordionRef.current;

    if (!currentHeaderRef || !currentAccordionRef) return;

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const accordionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAccordionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentHeaderRef) headerObserver.observe(currentHeaderRef);
    currentAccordionRef.forEach((item) => {
      if (item) accordionObserver.observe(item);
    });

    return () => {
      if (currentHeaderRef) headerObserver.unobserve(currentHeaderRef);
      currentAccordionRef.forEach((item) => {
        if (item) accordionObserver.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-8">
      {/* Header */}
      <h2
        ref={headerRef}
        className={`text-4xl font-extrabold text-center text-[#38517E] mb-8 ${
          isHeaderVisible ? "animate__animated animate__fadeInUp" : ""
        }`}
        style={{ animationDuration: "2s" }}
      >
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {/* FAQ List */}
        {faqs.map((faq, index) => (
          <div
            ref={(el) => (accordionRef.current[index] = el)}
            key={index}
            className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 border border-gray-200 ${
              isAccordionVisible ? "animate__animated animate__fadeInUp" : ""
            }`}
            style={{ animationDuration: "2s" }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left py-4 px-6 font-semibold text-[#38517E] hover:bg-blue-100 focus:outline-none ${
                activeIndex === index ? "bg-blue-100" : "bg-white"
              }`}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <span
                className={`float-right transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen py-4" : "max-h-0"
              }`}
            >
              <div className="px-6 text-gray-700">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;