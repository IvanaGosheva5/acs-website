import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const images = [
    {
      src: "/images/ImagesACS/Aluminieva-pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-1.jpg",
      alt: "Алуминиева пергола с LED осветление",
    },
    {
      src: "/images/ImagesACS/Oblicovka%20s%20HPL/oblicovka-hpl-obekt1.jpg",
      alt: "Облицовка с HPL панели",
    },
    {
      src: "/images/ImagesACS/Dogrami%20Reynaers%20Masterlain8/dograma-reynaers-masterlain8-antracit-1.jpg",
      alt: "Алуминиева дограма Reynaers Masterlain 8 антрацит",
    },
    {
      src: "/images/ImagesACS/Aluminieva%20ograda%20s%20pluzgashti%20se%20portali/ograda-portalna-plazgashta-1.jpg",
      alt: "Алуминиева ограда с плъзгащи портални врати",
    },
    {
      src: "/images/ImagesACS/Pergola%20Bioklimatik%20s%20led%20i%20senzor/pergola-bioklimatik-led-senzor-1.jpg",
      alt: "Биоклиматик пергола с LED осветление и сензор за вятър",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="p-10 bg-green-50">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        Галерия
      </h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-lg w-full h-72 object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
