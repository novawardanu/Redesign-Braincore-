import React, { useEffect, useState } from "react";
import "animate.css"; // Pastikan animate.css diimpor

const Teknologi = () => {
  const technologies = [
    { id: 1, src: "/images/logo-react.png", alt: "React Logo", url: "https://reactjs.org/" },
    { id: 2, src: "/images/angular.png", alt: "React Logo", url: "https://angular.io/" },
    { id: 3, src: "/images/vue.png", alt: "React Logo", url: "https://vuejs.org/" },
    { id: 4, src: "/images/node.png", alt: "React Logo", url: "https://nodejs.org/" },
    { id: 5, src: "/images/ex.png", alt: "React Logo", url: "https://expressjs.com/" },
    { id: 6, src: "/images/tailwind.png", alt: "React Logo", url: "https://tailwindcss.com/" },
    { id: 7, src: "/images/next.png", alt: "React Logo", url: "https://nextjs.org/" },
    { id: 8, src: "/images/ts.png", alt: "React Logo", url: "https://www.typescriptlang.org/" },
    { id: 9, src: "/images/mongodb.png", alt: "React Logo", url: "https://www.mongodb.com/" },
    { id: 10, src: "/images/docker.png", alt: "React Logo", url: "https://www.docker.com/" },
  ];

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer untuk header
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const descriptionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDescriptionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGridVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const headerElement = document.getElementById("teknologi-header");
    const descriptionElement = document.getElementById("teknologi-description");
    const gridElement = document.getElementById("teknologi-grid");

    if (headerElement) headerObserver.observe(headerElement);
    if (descriptionElement) descriptionObserver.observe(descriptionElement);
    if (gridElement) gridObserver.observe(gridElement);

    return () => {
      if (headerElement) headerObserver.unobserve(headerElement);
      if (descriptionElement) descriptionObserver.unobserve(descriptionElement);
      if (gridElement) gridObserver.unobserve(gridElement);
    };
  }, []);

  return (
    <section className="py-12 bg-[#F3F5F9]" id="teknologi">
      <div className="container mx-auto px-4 text-center">
        {/* Judul Teknologi */}
        <h2
          id="teknologi-header"
          className={`text-4xl font-bold text-[#38517E] mb-4 ${
            isHeaderVisible ? "animate__animated animate__fadeInUp" : ""
          }`}
          style={{ animationDuration: "2s" }}
        >
          TEKNOLOGI
        </h2>

        {/* Deskripsi Lebih Panjang */}
        <p
          id="teknologi-description"
          className={`text-gray-600 mb-8 mx-auto lg:max-w-3xl md:max-w-2xl sm:max-w-lg ${
            isDescriptionVisible ? "animate__animated animate__fadeInUp" : ""
          }`}
          style={{ animationDuration: "2s", animationDelay: "0.5s" }}
        >
          Braincore.id fokus menggunakan teknologi terbaru dalam melakukan rancang bangun sistem cerdas.
          Berikut adalah teknologi yang kami gunakan untuk memastikan performa terbaik dan inovasi dalam setiap solusi yang kami tawarkan.
        </p>

        {/* Grid Teknologi */}
        <div
          id="teknologi-grid"
          className={`grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center ${
            isGridVisible ? "animate__animated animate__zoomIn" : ""
          }`}
          style={{ animationDuration: "2s", animationDelay: "0.7s" }}
        >
          {technologies.map((tech) => (
            <a key={tech.id} href={tech.url} target="_blank" rel="noopener noreferrer">
              <div className="p-4 bg-[#F3F5F9] rounded-lg">
                <img src={tech.src} alt={tech.alt} className="h-16 w-16 mx-auto" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teknologi;