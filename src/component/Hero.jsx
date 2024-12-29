// src/component/Hero.js
import React from "react";
import 'animate.css';  // pastikan Animate.css sudah diimport

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4 md:px-8"
      style={{ backgroundImage: "url('/images/baru.png')" }}
    >
      {/* Konten utama */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center leading-tight animate__animated animate__zoomIn animate__fadeIn">
        Jasa Konsultasi dan Pengerjaan Proyek AI
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-center max-w-xl lg:max-w-2xl animate__animated animate__zoomIn animate__fadeIn animate__delay-0.5s">
        Data Science, Machine Learning, dan Artificial Intelligence untuk pelajar dan pekerja profesional.
      </p>
      
      {/* Tombol yang akan mengarah ke section "about" */}
      <a
        href="#about"
        className="mt-6 bg-[#4CBDDF] hover:bg-[#309BBB] font-bold text-white py-2 px-6 sm:px-8 lg:px-10 rounded-[40px] transition-colors duration-300 ease-in-out animate__animated animate__zoomIn animate__fadeIn animate__delay-0.5s"
      >
        Mulai Cari Tahu
      </a>
    </section>
  );
};

export default Hero;
