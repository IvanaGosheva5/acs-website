import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: "Начало" },
    { to: "/services", label: "Услуги" },
    { to: "/gallery", label: "Галерия" },
    { to: "/partners", label: "Партньори" },
    { to: "/colors", label: "Цветове" },
    { to: "/contact", label: "Контакти" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-[#154A2F] shadow" : "bg-[#154A2F]"}`}>
      <div className="mx-auto max-w-[1280px] px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-extrabold text-lg tracking-tight">
          ACS
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-white/90 hover:text-white font-medium ${pathname === item.to ? "underline underline-offset-8" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
