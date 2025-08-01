import React from "react";
import heroImg from "../assets/pergola-hero.jpg"; // добави подходяща снимка в папка src/assets

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Съвременни алуминиеви системи и остъкляване
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Перголи, дограми и фасадни решения за вашия дом и бизнес
        </p>
        <a
          href="#contact"
          className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg shadow hover:bg-yellow-300"
        >
          Свържете се с нас
        </a>
      </div>
    </section>
  );
};

export default Hero;
