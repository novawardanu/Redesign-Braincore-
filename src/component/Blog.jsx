import React, { useEffect, useState } from 'react';
import 'animate.css'; // Pastikan animate.css diimpor

function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'Prediksi harga beras menggunakan Machine Learning',
      description:
        'Kita dapat memprediksi harga beras dalam 5 tahun ke depan menggunakan teknologi AI...',
      link: '/blog/1',
    },
    {
      id: 2,
      title: 'Prediksi harga beras menggunakan Machine Learning',
      description:
        'Kita dapat memprediksi harga beras dalam 5 tahun ke depan menggunakan teknologi AI...',
      link: '/blog/2',
    },
    {
      id: 3,
      title: 'Prediksi harga beras menggunakan Machine Learning',
      description:
        'Kita dapat memprediksi harga beras dalam 5 tahun ke depan menggunakan teknologi AI...',
      link: '/blog/3',
    },
    {
      id: 4,
      title: 'Prediksi harga beras menggunakan Machine Learning',
      description:
        'Kita dapat memprediksi harga beras dalam 5 tahun ke depan menggunakan teknologi AI...',
      link: '/blog/4',
    },
    {
      id: 5,
      title: 'Prediksi harga beras menggunakan Machine Learning',
      description:
        'Kita dapat memprediksi harga beras dalam 5 tahun ke depan menggunakan teknologi AI...',
      link: '/blog/5',
    },
    {
      id: 6,
      title: 'Prediksi harga beras menggunakan Machine Learning',
      description:
        'Kita dapat memprediksi harga beras dalam 5 tahun ke depan menggunakan teknologi AI...',
      link: '/blog/6',
    },
  ];

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isBlogVisible, setIsBlogVisible] = useState(false);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const blogObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBlogVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const headerElement = document.getElementById('blog-header');
    const blogElement = document.getElementById('blog-section');
    
    if (headerElement) headerObserver.observe(headerElement);
    if (blogElement) blogObserver.observe(blogElement);

    return () => {
      if (headerElement) headerObserver.unobserve(headerElement);
      if (blogElement) blogObserver.unobserve(blogElement);
    };
  }, []);

  return (
    <section
      id="blog"
      className="py-24 bg-gray-50 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <h2
        id="blog-header"
        className={`text-4xl font-bold text-center text-[#38517E] mb-2 ${
          isHeaderVisible ? 'animate__animated animate__fadeInUp' : ''
        }`}
        style={{ animationDuration: '2s' }}
      >
        BLOG
      </h2>
      <p
        className={`text-center text-gray-600 mb-12 ${
          isHeaderVisible ? 'animate__animated animate__fadeInUp' : ''
        }`}
        style={{ animationDuration: '2s' }}
      >
        Tulisan dari Blog Braincore
      </p>

      {/* Blog List */}
      <div
        id="blog-section"
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ${
          isBlogVisible ? 'animate__animated animate__zoomIn' : ''
        }`}
        style={{ animationDuration: '2s' }}
      >
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            className="block bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
          >
            <div className="h-40 bg-gray-200 mb-4 rounded-lg"></div>
            <h3 className="text-lg font-bold text-[#38517E] mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <span className="text-blue-500 font-medium hover:underline">
              Read More
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Blog;