import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero'
import About from './component/About'
import Chatbot from './component/Chatbot';
import Layanan from './component/Layanan';
import Portofolio from './component/Portofolio';
import Konsultasi from './component/Konsultasi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Teknologi from './component/Teknologi';
import TeamSection from './component/TeamSection';
import Pencapaian from './component/Pencapaian';
import Kontak from './component/Kontak';
import Blog from './component/Blog';
import FAQ from './component/FAQ';
import Footer from './component/Footer';
import 'animate.css';



function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Hero/>
      </section>


      <section>
        <About />
      </section>
         
      <section id="services" className="min-h-screen">
        <Layanan />
      </section>
      
      <section >
        <Portofolio />
      </section>

      <section className=" bg-gray-100 pb-8 flex items-center justify-center">
        <Teknologi />
      </section>
      
      <section id="consultation" className="py-16 bg-[#38517E] flex items-center justify-center ">
        <Konsultasi />
      </section>

      <section id="team" className="h-screen bg-[blue-200] flex items-center justify-center">
        <TeamSection/>
      </section>

      <section>
        <Pencapaian/>
      </section>
      
      <section >
        <Kontak/>
      </section>

      <section>
        <Blog />
      </section>

      <section>
        <Chatbot/>
      </section>

      <section>
        <FAQ/>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;