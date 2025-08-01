import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Лого */}
        <div className="flex items-center space-x-3">
          <img src="/images/ImagesACS/logo.jpg" alt="ACS Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg">ACS ЕООД</span>
        </div>

        {/* Меню */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="home" smooth={true} duration={600} className="hover:text-yellow-400 cursor-pointer">
            Начало
          </Link>
          <Link to="about" smooth={true} duration={600} className="hover:text-yellow-400 cursor-pointer">
            За нас
          </Link>
          <Link to="products" smooth={true} duration={600} className="hover:text-yellow-400 cursor-pointer">
            Продукти
          </Link>
          <Link to="services" smooth={true} duration={600} className="hover:text-yellow-400 cursor-pointer">
            Услуги
          </Link>
          <Link to="gallery" smooth={true} duration={600} className="hover:text-yellow-400 cursor-pointer">
            Галерия
          </Link>
          <Link to="contact" smooth={true} duration={600} className="hover:text-yellow-400 cursor-pointer">
            Контакти
          </Link>
        </nav>

        {/* CTA бутон */}
        <Link
          to="contact"
          smooth={true}
          duration={600}
          className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg shadow hover:bg-yellow-300 cursor-pointer"
        >
          Свържете се с нас
        </Link>
      </div>
    </header>
  );
};

export default Header;
