// src/component/About.js
import React from "react";
import 'animate.css';  // Pastikan animate.css sudah diimpor

const About = () => {
  return (
    <section id="about" className="bg-white py-24 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#38517E] animate__animated animate__fadeInUp">
        TENTANG BRAINCORE.ID
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Latar Belakang */}
        <div className="animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Latar Belakang</h3>
          <p className="text-gray-700 mb-4">
            Braincore.id dibentuk karena kami sadar bahwa implementasi teknologi kecerdasan buatan di Indonesia masih sangat minim meskipun hampir semua orang menggunakan gadget seperti handphone.
          </p>
          <p className="text-gray-700">
            Braincore.id hadir untuk menawarkan solusi berupa jasa konsultasi dan pengerjaan proyek berbasis kecerdasan buatan dalam berbagai bidang khususnya pada bidang edukasi.
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Visi dan Misi</h3>
          <p className="text-gray-700 mb-4">
            Visi kami adalah mempersiapkan masyarakat memasuki era revolusi industri digital dan mengenalkan teknologi kecerdasan buatan kepada masyarakat luas. Misi kami adalah:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Membuat produk kecerdasan buatan dengan rasa tanggung jawab yang mampu bersaing di dunia teknologi.</li>
            <li>Mengedukasi masyarakat tentang penggunaan teknologi kecerdasan buatan dalam kehidupan sehari-hari.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;