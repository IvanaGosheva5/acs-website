import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Бранд */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/ImagesACS/logo.jpg" alt="ACS Logo" className="h-10 w-auto rounded" />
            <span className="font-extrabold tracking-wide">ACS ЕООД</span>
          </div>
          <p className="text-white/80">
            Перголи, дограми Reynaers/KBE, фасади, облицовки HPL и Бонд, остъкляване. Изпълняваме обекти в цяла България.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100057144203397" target="_blank" rel="noreferrer"
               className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              {/* FB икона */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.4 6h2.6v3h-2c-.8 0-1.5.7-1.5 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/acspltd" target="_blank" rel="noreferrer"
               className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              {/* IG икона */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Бързи връзки */}
        <div>
          <h4 className="font-bold text-yellow-400 mb-4">Навигация</h4>
          <ul className="space-y-2 text-white/90">
            <li><NavLink to="/" className="hover:underline">Начало</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">За нас</NavLink></li>
            <li><NavLink to="/products" className="hover:underline">Продукти</NavLink></li>
            <li><NavLink to="/services" className="hover:underline">Услуги</NavLink></li>
            <li><NavLink to="/gallery" className="hover:underline">Галерия</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Контакти</NavLink></li>
          </ul>
        </div>

        {/* Продуктови линии */}
        <div>
          <h4 className="font-bold text-yellow-400 mb-4">Решения</h4>
          <ul className="space-y-2 text-white/90">
            <li>Перголи (LED, биоклиматични)</li>
            <li>Дограми Reynaers / KBE</li>
            <li>Фасадни системи</li>
            <li>Облицовки HPL / Бонд</li>
            <li>Остъкляване, плъзгащи системи</li>
            <li>Огради и парапети</li>
          </ul>
        </div>

        {/* Контакти */}
        <div>
          <h4 className="font-bold text-yellow-400 mb-4">Контакти</h4>
          <ul className="space-y-2 text-white/90">
            <li>Тел: <a href="tel:+35973881228" className="hover:underline">073 88 12 28</a></li>
            <li>GSM: <a href="tel:+359898650041" className="hover:underline">0898 650 041</a>, <a href="tel:+359899950041" className="hover:underline">0899 950 041</a></li>
            <li>Имейл: <a href="mailto:a_c_s@abv.bg" className="hover:underline">a_c_s@abv.bg</a></li>
            <li>Instagram: <a href="https://www.instagram.com/acspltd" target="_blank" rel="noreferrer" className="hover:underline">@acspltd</a></li>
            <li>Работно време: Пн–Пт 09:00–18:00</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between text-white/70">
          <p>© {new Date().getFullYear()} ACS ЕООД. Всички права запазени.</p>
          <p>Партньори: Reynaers • KBE • STR Grup</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
