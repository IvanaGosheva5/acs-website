import React, { useMemo, useState } from "react";

// примерни данни – после можем да ги разширим
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
  <div className="rounded-xl border border-green-900/10 overflow-hidden shadow-sm bg-white">
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

const ColorsExplorer = () => {
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
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">Цветове и покрития</h2>
          <p className="text-green-800/90 mt-2 max-w-3xl">
            Богата палитра (Solid / Metallic / Brushed / Wood) и RAL нюанси.
            Реалните мостри се уточняват при оферта.
          </p>
        </div>

        {/* филтри */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Търси по име или RAL…"
            className="px-4 py-2 rounded-lg border border-green-900/20"
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
        </div>

        {/* грид */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(c => <SwatchCard key={c.name} c={c} />)}
        </div>

        <div className="mt-6 text-sm text-green-800/80">
          Заб.: Цветовете на екрана са ориентировъчни. Препоръчваме заявка за мостри преди спецификация. 
        </div>
      </div>
    </section>
  );
};

export default ColorsExplorer;
