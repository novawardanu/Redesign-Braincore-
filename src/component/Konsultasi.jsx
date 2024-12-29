import React from "react";
import { useInView } from "react-intersection-observer"; // Mengimpor hook

import "animate.css"; // Pastikan animate.css diimpor

const Konsultasi = () => {
  // Menggunakan hook useInView dari react-intersection-observer
  const { ref: headerRef, inView: isHeaderVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: descriptionRef, inView: isDescriptionVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: isImageVisible } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: buttonRef, inView: isButtonVisible } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#38517E] py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Judul Utama */}
        <h1
          ref={headerRef} // Menambahkan ref ke elemen header
          className={`text-4xl font-bold text-white mb-4 ${
            isHeaderVisible ? "animate__animated animate__fadeInUp" : ""
          }`}
          style={{ animationDuration: "2s" }}
        >
          KONSULTASI
        </h1>
        {/* Deskripsi Pendek */}
        <p
          ref={descriptionRef} // Menambahkan ref ke elemen deskripsi
          className={`text-gray-300 mb-14 ${
            isDescriptionVisible ? "animate__animated animate__fadeInUp" : ""
          }`}
          style={{ animationDuration: "2s", animationDelay: "0.5s" }}
        >
          Konsultasikan proyek AI Anda bersama Braincore
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-24 w-full">
          {/* Gambar Placeholder */}
          <div
            ref={imageRef} // Menambahkan ref ke elemen gambar
            className={`w-full md:w-1/3 ${
              isImageVisible ? "animate__animated animate__fadeInRight" : ""
            }`}
            style={{ animationDuration: "2s", animationDelay: "0.7s" }}
          >
            <div className="w-full h-0 pt-[56.25%] relative">
              <img
                src="/images/konsultasi.png"
                alt="Placeholder Gambar"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Konten */}
          <div className="w-full md:w-2/3 text-white text-center md:text-left">
            {/* Judul Besar */}
            <h2
              className={`text-xl md:text-3xl font-bold mb-4 ${
                isImageVisible ? "animate__animated animate__fadeInRight" : ""
              }`}
              style={{ animationDuration: "2s", animationDelay: "0.9s" }}
            >
              Konsultasikan proyek AI Anda <br /> bersama Braincore
            </h2>

            {/* Deskripsi Panjang */}
            <p
              ref={descriptionRef} // Menambahkan ref ke deskripsi panjang
              className={`text-gray-300 leading-relaxed mb-10 ${
                isDescriptionVisible ? "animate__animated animate__fadeInRight" : ""
              }`}
              style={{ animationDuration: "2s", animationDelay: "1.1s" }}
            >
              Braincore.id membawa solusi AI untuk proyek Anda. Dikelola oleh tim ahli
              yang berpengalaman, kami menyediakan layanan konsultasi yang akan membantu
              meningkatkan efisiensi dan kompetitifitas proyek dan Anda. Konsultasikan
              sekarang dan rasakan manfaat dari kecerdasan buatan untuk bisnis Anda.
            </p>

            {/* Tombol Konsultasi Disini */}
            <div
              ref={buttonRef} // Menambahkan ref ke tombol
              className={`flex justify-center md:justify-start w-full mb-6 md:mb-0 ${
                isButtonVisible ? "animate__animated animate__fadeInRight" : ""
              }`}
              style={{ animationDuration: "2s", animationDelay: "1.3s" }}
            >
              <button className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4CBDDF] hover:border-[#4CBDDF] transition duration-300">
                <span className="text-xl">🔍</span> Konsultasi disini
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Konsultasi;