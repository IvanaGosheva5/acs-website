import React, { useMemo, useState } from "react";

// ТУК са примерни данни – попълваме/разширяваме после при нужда
const ALL_COLORS = [
  { name: "Signal Yellow", ral: "RAL 1003", type: "Solid", hex: "#F7B500" },
  { name: "Anthracite Grey", ral: "RAL 7016", type: "Solid", hex: "#373F43" },
  { name: "Pearl White", ral: "RAL 1013", type: "Solid", hex: "#F0E9DC" },
  { name: "Bronze Pearl", ral: "—", type: "Metallic", hex: "#8C6E4E" },
  { name: "Brushed Silver", ral: "—", type: "Brushed", hex: "#C7C7C7" },
  { name: "Woodgrain Walnut", ral: "—", type: "Wood", hex: "#7B4A2E" },
];

const TYPES = ["Всички", "Solid", "Metallic", "Brushed", "Wood"];

const SwatchCard = ({ c }) => (
  <div className="rounded-2xl border border-green-900/10 overflow-hidden shadow-sm bg-white">
    <div className="h-24" style={{ backgroundColor: c.hex }} />
    <div className="p-3">
      <div className="font-semibold text-green-900">{c.name}</div>
      <div className="text-sm text-green-800/80">{c.ral}</div>
      <div className="mt-1 inline-block text-xs px-2 py-0.5 rounded-full bg-yellow-50 border border-yellow-100 text-green-900">
        {c.type}
      </div>
    </div>
  </div>
);

const Colors = () => {
  const [q, setQ] = useState("");
  const [type, setType] = useState("Всички");

  const filtered = useMemo(() => {
    const byType = type === "Всички" ? ALL_COLORS : ALL_COLORS.filter(c => c.type === type);
    if (!q.trim()) return byType;
    const s = q.toLowerCase();
    return byType.filter(c =>
      c.name.toLowerCase().includes(s) || c.ral.toLowerCase().includes(s)
    );
  }, [q, type]);

  return (
    <div>
      {/* HERO / банер (чисто, корпоративно) */}
      <section
        className="h-[220px] md:h-[280px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/images/ImagesACS/Oblicovka%20s%20HPL/oblicovka-hpl-obekt1.jpg')" }}
      >
        <div className="w-full bg-black/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Цветове и покрития</h1>
            <p className="text-white/85">Solid • Metallic • Brushed • Wood • RAL</p>
          </div>
        </div>
      </section>

      {/* Филтър бар (в духа на EDPNC – ясна лента с контролите) */}
      <section className="bg-white shadow-sm border-b border-green-900/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center gap-3">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Търси по име или RAL…"
            className="px-4 py-2 rounded-lg border border-green-900/20 w-full md:w-80"
          />
          <div className="flex flex-wrap gap-2">
            {TYPES.map(t => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={[
                  "px-3 py-1.5 rounded-full text-sm border transition",
                  t === type
                    ? "bg-green-900 text-white border-green-900"
                    : "bg-white text-green-900 border-green-900/30 hover:border-green-900/60",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="md:ml-auto text-sm text-green-800/80">
            {filtered.length} резултата
          </div>
        </div>
      </section>

      {/* Съдържание: инфо + грид със суочове */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* увод/насоки */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-green-900">Палитра</h2>
            <p className="text-green-800/90 max-w-3xl mt-2">
              Предлагаме широка гама от цветове и покрития (RAL, дървесни фладери, металик, бруш).
              Цветовете на екрана са ориентировъчни—за точна преценка заявете реални мостри.
            </p>
          </div>

          {/* грид със суочове */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(c => <SwatchCard key={c.name} c={c} />)}
          </div>

          {/* бележка + CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="text-sm text-green-800/80">
              * Достъпни са и други нюанси/покрития. По заявка изпращаме мостри и технически спецификации.
            </div>
            <div className="flex gap-3">
              <a href="/contact" className="bg-yellow-400 text-green-900 px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-yellow-300">
                Заяви мостри / оферта
              </a>
              <a href="/gallery" className="bg-white text-green-900 px-5 py-2.5 rounded-xl font-semibold border border-green-900/20 hover:bg-green-50">
                Виж реализирани обекти
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Лента за доверие / партньори */}
      <section className="bg-white border-t border-green-900/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center gap-6">
          <div className="text-green-800/80 text-sm">Партньори:</div>
          <img src="/images/partners/reynaers.png" alt="Reynaers" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
          <img src="/images/partners/kbe.png" alt="KBE" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
          <img src="/images/partners/strgrup.png" alt="STR Grup" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
          <img src="/images/partners/laminam.png" alt="Laminam" className="h-8 object-contain" onError={(e)=>e.currentTarget.style.display='none'} />
          <div className="ml-auto text-sm text-green-900/80">20+ години опит • Монтаж в цяла България</div>
        </div>
      </section>
    </div>
  );
};

export default Colors;
