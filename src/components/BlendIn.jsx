import React, { useState, useRef } from "react";

/** Before/After плъзгач — по-добра дръжка + drag на мобилно/десктоп */
const ImageCompare = ({ beforeSrc, afterSrc, altBefore, altAfter }) => {
  const [pos, setPos] = useState(50); // %
  const ref = useRef(null);

  const updatePosFromClientX = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(Math.round((x / rect.width) * 100));
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    updatePosFromClientX(e.clientX);
    const onMove = (ev) => updatePosFromClientX(ev.clientX);
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e) => {
    const t = e.touches[0];
    updatePosFromClientX(t.clientX);
  };

  const onTouchMove = (e) => {
    const t = e.touches[0];
    updatePosFromClientX(t.clientX);
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-[320px] md:h-[430px] rounded-3xl overflow-hidden select-none"
      aria-label="Сравнение преди и след"
    >
      {/* After */}
      <img
        src={afterSrc}
        alt={altAfter}
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />
      {/* Before (clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={beforeSrc}
          alt={altBefore}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>

      {/* Дръжка */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="h-full w-[2px] bg-white/80 shadow" />
        <button
          aria-label="Плъзни"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          className="absolute top-1/2 -translate-y-1/2 -left-5 h-10 w-10 rounded-full bg-white text-green-900 shadow-lg border border-green-900/10 grid place-items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
               viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 16l-4-4 4-4" />
          </svg>
        </button>
      </div>

      {/* Лейбъли */}
      <span className="absolute left-3 top-3 bg-black/55 text-white text-[11px] px-2 py-1 rounded-md">
        Преди
      </span>
      <span className="absolute right-3 top-3 bg-black/55 text-white text-[11px] px-2 py-1 rounded-md">
        След
      </span>
    </div>
  );
};

const swatches = [
  {
    key: "antracit",
    label: "Антрацит",
    overlay: "bg-[#2F3438]/35",
    note: "RAL антрацит, мат",
  },
  {
    key: "wood",
    label: "Дървесен фладер",
    overlay: "bg-amber-900/25",
    note: "HPL/Bond дървесни декори",
  },
  {
    key: "white",
    label: "Бяло",
    overlay: "bg-white/15",
    note: "Класически / модернистични фасади",
  },
  {
    key: "green",
    label: "Зелено",
    overlay: "bg-green-900/20",
    note: "Синхрон с нашата палитра",
  },
];

const MaterialCard = ({ active, onClick, label, note }) => (
  <button
    onClick={onClick}
    className={[
      "text-left rounded-2xl p-4 border transition w-full",
      active
        ? "bg-green-900 text-white border-green-900 shadow"
        : "bg-white text-green-900 border-green-900/20 hover:border-green-900/40",
    ].join(" ")}
  >
    <div className="font-semibold">{label}</div>
    <div className={active ? "text-white/85 text-sm" : "text-green-800/85 text-sm"}>
      {note}
    </div>
  </button>
);

const BlendIn = () => {
  const [active, setActive] = useState(swatches[0]);

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заглавие */}
        <div className="mb-10" data-aos="fade-up">
          <div className="text-[12px] uppercase tracking-widest text-yellow-600 font-semibold">
            Вписване към архитектурата
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mt-1">
            Blend-in интеграция: перголи и облицовки, които изглеждат като част от сградата
          </h2>
          <p className="text-green-800/90 mt-3 max-w-3xl">
            Подбираме материали, цветове и текстури така, че новият елемент да се
            слее с фасадата и детайлите на обекта – без компромис в функционалността.
          </p>
        </div>

        {/* Двуколонен layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Before/After с тониране според swatch */}
          <div className="relative" data-aos="fade-right">
            {/* визуално тониране (само за демонстрация) */}
            <div className={`absolute inset-0 rounded-3xl pointer-events-none ${active.overlay}`} />
            <ImageCompare
              beforeSrc="/images/ImagesACS/Oblicovka%20s%20HPL/oblicovka-hpl-obekt1.jpg"
              afterSrc="/images/ImagesACS/Oblicovka%20Coverlam%2BBond%20antracit/oblicovka-coverlam-bond-antracit-1.jpg"
              altBefore="Фасада преди облицовка"
              altAfter="Фасада след облицовка (Coverlam + Bond, антрацит)"
            />
            <p className="mt-3 text-sm text-green-800/75">
              Демонстрация с HPL / Coverlam + Bond (примерни изображения).
            </p>
          </div>

          {/* Контролна колона */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="grid sm:grid-cols-2 gap-4">
              {swatches.map((s) => (
                <MaterialCard
                  key={s.key}
                  label={s.label}
                  note={s.note}
                  active={s.key === active.key}
                  onClick={() => setActive(s)}
                />
              ))}
            </div>

            <ul className="list-disc list-inside text-green-900 space-y-1">
              <li>RAL цветове, дървесни фладери, мат/сатен/гланц</li>
              <li>Комбинация с ZIP завеси, остъкляване и LED осветление</li>
              <li>Съобразяване с дограми, парапети и покривни линии</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="/products"
                className="bg-yellow-400 text-green-900 px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-yellow-300"
              >
                Виж продуктите
              </a>
              <a
                href="/contact"
                className="bg-white text-green-900 px-5 py-2.5 rounded-xl font-semibold border border-green-900/20 hover:bg-green-50"
              >
                Заяви мостри / оферта
              </a>
            </div>
          </div>
        </div>

        {/* Втора демонстрация – перголи */}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
            Перголи с LED — естествено продължение на терасата
          </h3>
          <div className="relative">
            <ImageCompare
              beforeSrc="/images/ImagesACS/Cqlostno%20izgrajdane%20na%20terasa/cqlostno-izgrajdane-terasa-1.jpg"
              afterSrc="/images/ImagesACS/Aluminieva-pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-2.jpg"
              altBefore="Тераса преди пергола"
              altAfter="Тераса след алуминиева пергола с LED"
            />
          </div>
        </div>

        {/* Trust bar (ако имаш лога в public/images/partners/) */}
        <div className="mt-12 border-t border-green-900/10 pt-8" data-aos="fade-up">
          <div className="text-green-800/80 text-sm mb-4">Партньори:</div>
          <div className="flex flex-wrap items-center gap-6 opacity-80">
            <img src="/images/partners/reynaers.png" alt="Reynaers" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
            <img src="/images/partners/kbe.png" alt="KBE" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
            <img src="/images/partners/strgrup.png" alt="STR Grup" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
            <img src="/images/partners/laminam.png" alt="Laminam" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
          </div>
        </div>

        {/* CTA лента */}
        <div className="mt-12 bg-green-900 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" data-aos="fade-up">
          <div>
            <div className="text-[12px] uppercase tracking-widest text-yellow-300/90">
              Готови за проект?
            </div>
            <h4 className="text-2xl font-extrabold">Нека впишем решението във вашия обект</h4>
            <p className="text-white/80">
              Консултация, замерване и оферта — работим в цяла България.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="bg-yellow-400 text-green-900 px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-yellow-300">
              Изпрати запитване
            </a>
            <a href="/gallery" className="bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold border border-white/20 hover:bg-white/20">
              Виж реализирани обекти
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlendIn;
