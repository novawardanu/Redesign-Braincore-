import { useEffect, useState } from "react";
import "../style/Carousel.css";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  const team = [
    {
      image: "/images/eric.jpg",
      name: "Erik Julianto",
      role: "Research Analyst",
      area: "Artificial Intelligence, Blockchain, Internet of Things",
      socials: [
        {
          platform: "facebook",
          link: "https://facebook.com/bravo",
        },
        {
          platform: "twitter",
          link: "https://twitter.com/bravo",
        },
        {
          platform: "instagram",
          link: "https://instagram.com/bravo",
        },
      ],
    },
    {
      image: "/images/apis.jpg",
      name: "Alfizdiana Sholikhah",
      role: "Project Manager",
      area: "Project Management, Business Development, DevOps",
      socials: [
        {
          platform: "facebook",
          link: "https://facebook.com/bravo",
        },
        {
          platform: "twitter",
          link: "https://twitter.com/bravo",
        },
        {
          platform: "instagram",
          link: "https://instagram.com/bravo",
        },
      ],
    },
    {
      image: "/images/dian.jpg",
      name: "Dian Alhausari",
      role: "Data Scientist",
      area: "Artificial Intelligence, Data Analytics, Machine Learning",
      socials: [
        {
          platform: "facebook",
          link: "https://facebook.com/bravo",
        },
        {
          platform: "twitter",
          link: "https://twitter.com/bravo",
        },
        {
          platform: "instagram",
          link: "https://instagram.com/bravo",
        },
      ],
    },
    {
      image: "/images/abdi.jpg",
      name: "Abdi Negara Gucci",
      role: "Data Scientist",
      area: "Artificial Intelligence, Data Analytics, Computer Vision",
      socials: [
        {
          platform: "facebook",
          link: "https://facebook.com/bravo",
        },
        {
          platform: "twitter",
          link: "https://twitter.com/bravo",
        },
        {
          platform: "instagram",
          link: "https://instagram.com/bravo",
        },
      ],
    },
    // Tambahkan anggota lainnya...
  ];
  
  

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
    return () => clearTimeout(timeOut); // Clear timeout to prevent memory leaks
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent(current === team.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? team.length - 1 : current - 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {team.map((country, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
          >
            <div className="card_circle">
              <img className="card_image" src={country.image} alt={country.name} />
            </div>
            <div className="card_overlay">
              <h2 className="card_name ">{country.name}</h2>
              <h4 className="card_role ">{country.role}</h4>
              <div className="card_separator"></div>
              <h4 className="card_label">Area of Interest:</h4>
              <p className="card_interests">{country.area}</p>

              <div className="card_socials">
                {country.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_circle"
                  >
                    {social.platform === "facebook" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social_icon">
                        <path d="M9 8.5v2.5H7v3h2v7h3v-7h2.6l.4-3h-3V9.3c0-.8.2-1.2 1.3-1.2H15V5.2c-.2 0-1-.2-2.5-.2-2.5 0-4 1.5-4 4v1.5z" />
                      </svg>
                    
                    
                    )}
                    {social.platform === "twitter" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social_icon">
                        <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.27 4.27 0 0 0 1.88-2.35 8.52 8.52 0 0 1-2.7 1.03 4.26 4.26 0 0 0-7.27 3.88A12.09 12.09 0 0 1 3.11 4.84a4.26 4.26 0 0 0 1.32 5.68c-.64-.02-1.25-.2-1.78-.5v.05a4.26 4.26 0 0 0 3.42 4.18c-.58.16-1.2.18-1.83.07a4.27 4.27 0 0 0 3.99 2.97A8.54 8.54 0 0 1 2 18.13a12.06 12.06 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.64 8.64 0 0 0 22.46 6z" />
                      </svg>
                    )}
                    {social.platform === "instagram" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social_icon">
                        <path d="M7.75 2h8.5C20.55 2 22 3.45 22 7.75v8.5C22 20.55 20.55 22 16.25 22h-8.5C3.45 22 2 20.55 2 16.25v-8.5C2 3.45 3.45 2 7.75 2zm0 2C5.5 4 4 5.5 4 7.75v8.5C4 18.5 5.5 20 7.75 20h8.5C18.5 20 20 18.5 20 16.25v-8.5C20 5.5 18.5 4 16.25 4h-8.5zm4.25 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>

            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {team.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;