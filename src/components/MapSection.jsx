import React from "react";

/**
 * Черен „frame“ с SVG карта на България (графична), фонова мрежа,
 * жълти маркери (анимирани пулсиращи точки) и текст/CTA вдясно.
 *
 * Маркерите са позиционирани върху самата SVG (във viewBox координати),
 * за да не се разместват при responsive скалиране.
 */
const markers = [
  // Примерни градове (координати спрямо viewBox 960x540)
  { x: 260, y: 310, label: "София" },
  { x: 540, y: 310, label: "Пловдив" },
  { x: 670, y: 260, label: "Стара Загора" },
  { x: 740, y: 300, label: "Бургас" },
  { x: 720, y: 240, label: "Сливен" },
  { x: 800, y: 220, label: "Варна" },
  { x: 600, y: 200, label: "Велико Търново" },
  { x: 500, y: 170, label: "Русе" },
  { x: 430, y: 230, label: "Плевен" },
  { x: 350, y: 190, label: "Видин" },
  { x: 410, y: 360, label: "Благоевград" },
];

const MapSection = () => {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 grid lg:grid-cols-5 gap-10 items-center">
        {/* Лява колона: SVG карта + фон мрежа */}
        <div className="lg:col-span-3 relative">
          {/* фонова „мрежа“ */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Вариант A: външен SVG файл */}
          <object
            data="/images/bulgaria-map.svg"
            type="image/svg+xml"
            className="w-full max-w-3xl opacity-90"
            aria-label="Карта на България"
          >
            {/* Fallback: ако файлът липсва, показваме inline SVG */}
            <svg viewBox="0 0 960 540" className="w-full max-w-3xl opacity-90">
              <path d="M75,250 C150,100 350,120 450,200 C600,300 800,250 880,330 C920,370 880,420 790,430 C650,450 520,430 410,400 C260,360 120,360 80,320 C60,300 55,275 75,250 Z" fill="#ffffff" />
            </svg>
          </object>

          {/* Маркери (върху същия viewBox, позиционирани абсолютни спрямо контейнера) */}
          <svg viewBox="0 0 960 540" className="absolute inset-0 w-full max-w-3xl">
            {markers.map((m, i) => (
              <g key={i}>
                {/* външен кръг (пулс) */}
                <circle cx={m.x} cy={m.y} r="10" fill="none" stroke="#FDE047" className="animate-ping" />
                {/* основна точка */}
                <circle cx={m.x} cy={m.y} r="5" fill="#FDE047" />
              </g>
            ))}
          </svg>

          {/* Легенда (по избор) */}
          <div className="absolute -bottom-3 left-0 text-xs text-white/70">
            * Означени градове, в които сме работили
          </div>
        </div>

        {/* Дясна колона: заглавие, текст, броячи и CTA */}
        <div className="lg:col-span-2">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#E6C800] font-semibold">Покритие</p>
          <h2 className="text-3xl font-extrabold mt-2">Монтаж в цяла България</h2>
          <p className="text-white/85 mt-3">
            Собствени екипи и партньорска мрежа. Гаранция, сервиз и ясни срокове за всеки обект — от жилищни тераси до хотели и ресторанти.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-extrabold text-[#FDE047]">20+</div>
              <div className="text-white/80 text-sm">години опит</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#FDE047]">100+</div>
              <div className="text-white/80 text-sm">реализирани обекта</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#FDE047]">4</div>
              <div className="text-white/80 text-sm">междунар. партньора</div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/contact" className="bg-[#FDE047] text-[#154A2F] px-5 py-2.5 rounded-xl font-semibold shadow hover:brightness-95">Запитване</a>
            <a href="/gallery" className="bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold border border-white/20 hover:bg-white/20">Референции</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
