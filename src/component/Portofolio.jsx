import React, { useState, useEffect } from 'react';
import 'animate.css'; // Pastikan animate.css diimpor
import { useInView } from 'react-intersection-observer';

const Portofolio = () => {
  const portfolioItems = [
    { title: 'Land Mark Detection', description: 'by Face Recognition', image: '/images/Porto1.png', link: 'https://www.google.com' },
    { title: 'AI Object Counting', description: 'Embedded System', image: '/images/Porto2.png', link: 'https://www.google.com' },
    { title: 'IoT Monitoring', description: 'Real-Time Dashboard', image: '/images/Porto3.png', link: 'https://www.google.com' },
    { title: 'Object Detection', description: 'Real-Time Dashboard', image: 'https://via.placeholder.com/400x250', link: 'https://example.com/porto4' },
    { title: 'Computer Vision', description: 'Real-Time Dashboard', image: 'https://via.placeholder.com/400x250', link: 'https://example.com/porto5' },
    { title: 'Blockchain', description: 'Real-Time Dashboard', image: 'https://via.placeholder.com/400x250', link: 'https://example.com/porto6' },
    { title: 'Door Lock System', description: 'by Face Recognition', image: 'https://via.placeholder.com/400x250', link: 'https://example.com/porto7' },
    { title: 'AI Object Counting', description: 'Embedded System', image: 'https://via.placeholder.com/400x250', link: 'https://example.com/porto8' },
    { title: 'IoT Monitoring', description: 'Real-Time Dashboard', image: 'https://via.placeholder.com/400x250', link: 'https://example.com/porto9' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const { ref: headerRef, inView: isHeaderInView } = useInView({ triggerOnce: true });
  const { ref: cardsRef, inView: isCardsInView } = useInView({ triggerOnce: true });
  const { ref: buttonRef, inView: isButtonInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    setIsHeaderVisible(isHeaderInView);
    setIsCardsVisible(isCardsInView);
    setIsButtonVisible(isButtonInView);
  }, [isHeaderInView, isCardsInView, isButtonInView]);

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

  const initialItems = portfolioItems.slice(0, 3);

  return (
    <section id="portfolio" className="bg-white py-24 px-4">
      <h2
        ref={headerRef}
        className={`text-4xl font-bold text-center mb-8 text-[#38517E] ${
          isHeaderVisible ? 'animate__animated animate__fadeInUp' : ''
        }`}
        style={{ animationDuration: '2s' }}
      >
        PORTOFOLIO
      </h2>

      {/* Portfolio Cards - Hanya 3 Teratas */}
      <div
        ref={cardsRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto ${
          isCardsVisible ? 'animate__animated animate__fadeIn' : ''
        }`}
        style={{ animationDuration: '2s', animationDelay: '0.7s' }}
      >
        {initialItems.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg" onClick={() => window.open(item.link, '_blank')}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onClick={() => window.open(item.link, '_blank')}
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
          ref={buttonRef}
          onClick={handleOpenModal}
          className={`text-blue-500 font-semibold border-2 border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 transform hover:scale-105 ${
            isButtonVisible ? 'animate__animated animate__fadeInUp' : ''
          }`}
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
            <h3 className="text-2xl font-bold text-center mb-4">Seluruh Portofolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onClick={() => window.open(item.link, '_blank')}
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

export default Portofolio;