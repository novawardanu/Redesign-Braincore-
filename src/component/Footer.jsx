import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600">
      {/* Bagian Langganan */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#38517E] mb-2">
            Dapatkan Notifikasi Pembaruan
          </h2>
          <p className="text-gray-500 mb-6">
            Langganan untuk mendapatkan informasi dan promo menarik dari Braincore!
          </p>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <input
                type="email"
                placeholder="Masukkan Alamat Email"
                aria-label="Alamat Email"
                className="w-full px-4 py-2 pr-24 border border-gray-300 rounded-full focus:outline-none"
            />
            <button
                aria-label="Tombol Langganan"
                className="absolute right-0 top-0 h-full px-6 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200"
            >
                Langganan
            </button>
            </div>
            </div>
        </div>
      </div>

      {/* Bagian Informasi Footer */}
      <div className="py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1: Informasi Perusahaan */}
          <div>
            <h3 className="font-bold text-[#38517E] text-lg mb-4">Braincore.id</h3>
            <p>PT. ALGONACCI SOBAT NUSANTARA</p>
            <p>Jl. Letjen S. Parman No.28</p>
            <p>Grogol Petamburan</p>
            <p>Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470</p>
            <p className="mt-4">
              <span className="font-semibold">Phone:</span> +62 812 9985 1170
            </p>
            <p>
              <span className="font-semibold">Email:</span> braincore.id@gmail.com
            </p>
          </div>

          {/* Kolom 2: Pintasan */}
          <div>
            <h3 className="font-bold text-[#38517E] text-lg mb-4">Pintasan</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#tim"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  Tim
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Kami */}
          <div>
            <h3 className="font-bold text-[#38517E] text-lg mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#data-science"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  Data Science
                </a>
              </li>
              <li>
                <a
                  href="#machine-learning"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#ai"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  AI
                </a>
              </li>
              <li>
                <a
                  href="#iot"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  IoT
                </a>
              </li>
              <li>
                <a
                  href="#robotika"
                  className="text-[#444444] hover:text-blue-500 hover:no-underline transition duration-200"
                >
                  Robotika
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Media Sosial */}
          <div>
            <h3 className="font-bold text-[#38517E] text-lg mb-4">Media Sosial Kami</h3>
            <p className="mb-4">Kami dapat ditemukan di beberapa platform berikut</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className="bg-[#38517E] py-4">
        <div className="container mx-auto text-center text-white text-sm">
          &copy; Copyright 2023 Braincore.id. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;