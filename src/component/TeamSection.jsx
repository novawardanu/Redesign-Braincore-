import React from "react";
import { useInView } from 'react-intersection-observer';
import Team from './Team';

const TeamSection = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true, // Animasi hanya dipicu sekali
    threshold: 0.2, // Ketika 20% elemen terlihat
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true, // Animasi hanya dipicu sekali
    threshold: 0.2, // Ketika 20% elemen terlihat
  });

  return (
    <section className="team-section">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
        {/* Kolom Kiri: Judul dan Deskripsi */}
        <div className="flex flex-col items-center md:items-start transform md:translate-y-0 -translate-y-8">
          <h1
            ref={headerRef}
            className={`text-[#38517E] text-4xl font-bold mb-4 ${
              headerInView ? "animate__animated animate__fadeInRight" : ""
            }`}
          >
            TEAM
          </h1>
          <p
            ref={paragraphRef}
            className={`text-gray-600 ${
              paragraphInView ? "animate__animated animate__fadeInUp animate__delay-1s" : ""
            }`}
          >
            Dalam perkembangan Braincore.id, ada tim hebat yang berisikan orang-orang luar
            biasa yang ahli di bidangnya masing-masing dan saling bekerja sama dalam
            pengembangan Braincore.id
          </p>
        </div>
        
        {/* Kolom Kanan: Komponen Team */}
        <div className="flex justify-center mt-0 md:-mt-[180px] md:items-start transform md:translate-y-0 -translate-y-20 transform scale-90 md:scale-100">
          <Team />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;