import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const linkBase =
    "px-3 py-2 rounded-xl transition relative after:absolute after:left-3 after:-bottom-0.5 after:h-[3px] after:w-0 after:bg-yellow-400 after:rounded-full hover:after:w-2/3";
  const linkActive = "text-yellow-300 after:w-2/3";
  const linkIdle = "text-white/90 hover:text-yellow-200";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-900 shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* ===== Лого + име ===== */}
         <NavLink to="/" className="flex items-center gap-3">
  <div className="h-10 w-10 rounded-xl bg-white grid place-items-center ring-1 ring-white/30 overflow-hidden">
    <img
      src="/images/ImagesACS/logo.jpg"
      alt="ACS Logo"
      className="h-8 w-8 object-contain"
    />
  </div>
  <span className="hidden sm:block font-extrabold tracking-wide text-white">
    ACS ЕООД
  </span>
</NavLink>


          {/* ===== Десктоп навигация ===== */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink end to="/" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Начало</NavLink>
            <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>За нас</NavLink>
            <NavLink to="/products" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Продукти</NavLink>
            <NavLink to="/services" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Услуги</NavLink>
            <NavLink to="/gallery" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Галерия</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Контакти</NavLink>
          <NavLink to="/partners" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkIdle}`}>Партньори</NavLink>

          </nav>

          {/* ===== Езици + CTA (десктоп) ===== */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-white/10 border border-white/20 rounded-xl px-2 py-1">
              <LanguageSwitcher />
            </div>
            <NavLink
              to="/contact"
              className="bg-yellow-400 text-green-900 px-4 py-2 rounded-xl font-semibold shadow hover:bg-yellow-300"
            >
              Запитване
            </NavLink>
          </div>

          {/* ===== Мобилно меню бутон ===== */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 border border-white/20 text-white"
            aria-label="Отвори меню"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ===== Мобилно падащо меню ===== */}
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="grid gap-1 bg-green-900 rounded-2xl p-3 border border-white/10">
              <NavLink end to="/" className="px-3 py-2 rounded-lg text-white hover:bg-white/10">Начало</NavLink>
              <NavLink to="/about" className="px-3 py-2 rounded-lg text-white hover:bg-white/10">За нас</NavLink>
              <NavLink to="/products" className="px-3 py-2 rounded-lg text-white hover:bg-white/10">Продукти</NavLink>
              <NavLink to="/services" className="px-3 py-2 rounded-lg text-white hover:bg-white/10">Услуги</NavLink>
              <NavLink to="/gallery" className="px-3 py-2 rounded-lg text-white hover:bg-white/10">Галерия</NavLink>
              <NavLink to="/contact" className="px-3 py-2 rounded-lg text-white hover:bg-white/10">Контакти</NavLink>

              <div className="mt-2 bg-white/10 border border-white/20 rounded-xl px-2 py-1">
                <LanguageSwitcher />
              </div>

              <NavLink
                to="/contact"
                className="mt-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-xl font-semibold shadow hover:bg-yellow-300 text-center"
              >
                Запитване
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
