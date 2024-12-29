import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

// Data Layanan
const services = [
  {
    icon: '📊',
    title: 'Classification',
    description: 'Klasifikasi data menggunakan beberapa teknik pembelajaran mesin.',
  },
  {
    icon: '📈',
    title: 'Forecasting',
    description: 'Analisis data deret waktu menggunakan metode ARIMA.',
  },
  {
    icon: '📉',
    title: 'Clustering',
    description: 'Klasterisasi data numerik dan kategorik dengan beberapa metode Clustering.',
  },
  {
    icon: '⛏️',
    title: 'Data Mining',
    description: 'Proses data collection untuk pemodelan machine learning.',
  },
  {
    icon: '📊',
    title: 'Statistika',
    description: 'Pengolahan data untuk berbagai keperluan analisis dengan pendekatan Statistika.',
  },
  {
    icon: '🔎',
    title: 'Text Mining',
    description: 'Pengumpulan data corpus untuk keperluan penelitian di bidang NLP.',
  },
  {
    icon: '👤',
    title: 'Face Recognition',
    description: 'Sistem deteksi wajah untuk berbagai keperluan.',
  },
  {
    icon: '🚗',
    title: 'Objects Counting',
    description: 'Algoritma penghitung jumlah objek.',
  },
  {
    icon: '📄',
    title: 'Optical Character Recognition',
    description: 'Ekstraksi dokumen berupa KTP, Curriculum Vitae, dll.',
  },
];

// Komponen Card
const ServiceCard = ({ icon, title, description, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Hanya trigger sekali saat elemen masuk view
    threshold: 0.1, // 10% elemen harus terlihat untuk trigger animasi
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start bg-white shadow-md rounded-lg p-6 text-left ${
        inView ? 'animate__animated animate__zoomIn animate__fadeIn' : ''
      }`}
      style={{
        animationDuration: '2s', // Durasi animasi lebih lama agar lebih smooth
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Komponen Utama
const Layanan = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-[#F3F5F9]">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-center text-[#38517E] mb-4 ${
            titleInView ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDuration: '2s' }}
        >
          LAYANAN
        </h2>
        <p
          ref={descriptionRef}
          className={`text-gray-600 text-center mb-12 ${
            descriptionInView ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDuration: '2s', animationDelay: '0.5s' }}
        >
          Braincore.id menawarkan berbagai layanan yang dapat membantu masyarakat umum dalam manfaat Kecerdasan Buatan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;