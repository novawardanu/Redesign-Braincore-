import React, { useState, useEffect } from 'react';
import 'animate.css'; // Pastikan animate.css diimpor

const Pencapaian = () => {
  const achievementsItems = [
    { title: 'AI Creation - Braincore', description: 'Competition', image: '/images/menang1.png', link: 'https://www.google.com' },
    { title: 'Compfest 14 AIC', description: 'Competition', image: '/images/menang2.png', link: 'https://www.google.com' },
    { title: 'Jatim Developer Day', description: 'Annual Event', image: '/images/menang3.png', link: 'https://www.google.com' },
    { title: 'Object Detection', description: 'Real-Time Dashboard', image: '/images/menang3.png', link: 'https://www.google.com' },
    { title: 'Computer Vision', description: 'Real-Time Dashboard', image: '/images/menang2.png', link: 'https://www.google.com' },
    { title: 'Blockchain', description: 'Real-Time Dashboard', image: '/images/menang1.png', link: 'https://www.google.com' },
    { title: 'Door Lock System', description: 'by Face Recognition', image: '/images/menang1.png', link: 'https://www.google.com' },
    { title: 'AI Object Counting', description: 'Embedded System', image: '/images/menang3.png', link: 'https://www.google.com' },
    { title: 'IoT Monitoring', description: 'Real-Time Dashboard', image: '/images/menang2.png', link: 'https://www.google.com' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);  // Animasi untuk deskripsi
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  const handleOpenModal = () => {
    setIsOpening(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
      setIsOpening(false);
    }, 500); // Durasi animasi tutup
  };

  const initialItems = achievementsItems.slice(0, 3);

  // IntersectionObserver untuk animasi
  useEffect(() => {
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
          setIsDescriptionVisible(true); // Animasi untuk deskripsi
        }
      },
      { threshold: 0.1 }
    );
    
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const buttonObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsButtonVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const headerElement = document.getElementById('achievements-header');
    const descriptionElement = document.getElementById('achievements-description');  // Deskripsi
    const cardsElement = document.getElementById('achievements-cards');
    const buttonElement = document.getElementById('lihat-lebih-banyak');

    if (headerElement) headerObserver.observe(headerElement);
    if (descriptionElement) descriptionObserver.observe(descriptionElement); // Observasi deskripsi
    if (cardsElement) cardsObserver.observe(cardsElement);
    if (buttonElement) buttonObserver.observe(buttonElement);

    return () => {
      if (headerElement) headerObserver.unobserve(headerElement);
      if (descriptionElement) descriptionObserver.unobserve(descriptionElement); // Unobserve deskripsi
      if (cardsElement) cardsObserver.unobserve(cardsElement);
      if (buttonElement) buttonObserver.unobserve(buttonElement);
    };
  }, []);

  return (
    <section id="achievements" className="bg-[#F3F5F9] py-24 px-4">
      <h2
        id="achievements-header"
        className={`text-4xl font-bold text-center mb-4 text-[#38517E] ${
          isHeaderVisible ? 'animate__animated animate__fadeInUp' : ''
        }`}
        style={{ animationDuration: '2s' }}
      >
        ACHIEVEMENTS
      </h2>
      <p
        id="achievements-description" // Tambahkan id untuk deskripsi
        className={`text-gray-600 text-center mb-12 ${
          isDescriptionVisible ? 'animate__animated animate__fadeInUp' : ''
        }`}
        style={{ animationDuration: '2s', animationDelay: '0.5s' }}
      >
        Beberapa prestasi yang sudah ditorehkan oleh Braincore dalam berbagai ajang kompetisi teknologi
      </p>

      {/* Achievements Cards - Hanya 3 Teratas */}
      <div
        id="achievements-cards"
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto ${
          isCardsVisible ? 'animate__animated animate__fadeIn' : ''
        }`}
        style={{ animationDuration: '2s', animationDelay: '0.7s' }}
      >
        {initialItems.map((item, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer" 
            onClick={() => window.open(item.link, '_blank')} // Navigasi ke link ketika card diklik
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lihat Lebih Banyak */}
      <div className="text-center mt-8">
      <button
        id="lihat-lebih-banyak"
        onClick={handleOpenModal}
        className={`text-blue-500 font-semibold border-2 border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 transform hover:scale-105 ${
          isButtonVisible ? 'animate__animated animate__fadeInUp' : ''} ${isButtonVisible ? 'animate__animated animate__bounceIn' : ''}`}
        style={{ animationDuration: '2s', animationDelay: '0.5s' }}
      >
        Lihat Lebih Banyak
      </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <button
            onClick={handleCloseModal}
            className="fixed top-6 right-6 text-4xl text-white font-bold z-50 hover:scale-110 transition-transform"
          >
            &times;
          </button>
          <div
            className={`bg-white rounded-lg p-6 relative w-full max-w-4xl max-h-[80vh] overflow-y-auto transform transition-all duration-500 ${
              isOpening ? 'scale-105 translate-y-0 opacity-100' : 'scale-95 translate-y-5 opacity-0'
            } ${isClosing ? 'scale-90 opacity-0' : ''}`}
          >
            <h3 className="text-2xl font-bold text-center mb-4">Seluruh Pencapaian</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievementsItems.map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => window.open(item.link, '_blank')}>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-white text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pencapaian;