import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
} from "react-simple-maps";

// Световният TopoJSON (лек и надежден)
const WORLD_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const EUROPE_CENTER = [15, 54]; // lon, lat — център за Европа

export default function EuropeMapHighlight() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 grid lg:grid-cols-5 gap-10 items-center">
        {/* ЛЯВО: текст */}
        <div className="lg:col-span-2">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#E6C800] font-semibold">Покритие</p>
          <h2 className="text-3xl font-extrabold mt-2">Работим в цяла Европа — фокус България</h2>
          <p className="text-white/85 mt-3">
            Реализираме обекти за частни и корпоративни клиенти. България е нашият основен пазар —
            изведена е в оранжево върху европейската карта.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/contact" className="bg-[#FDE047] text-[#154A2F] px-5 py-2.5 rounded-xl font-semibold shadow hover:brightness-95">
              Запитване
            </a>
            <a href="/gallery" className="bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold border border-white/20 hover:bg-white/20">
              Референции
            </a>
          </div>
        </div>

        {/* ДЯСНО: карта на Европа, България в оранжево */}
        <div className="lg:col-span-3 relative">
          {/* фонова „мрежа“ за техничен вид */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />

          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 470 }}>
            <ZoomableGroup center={EUROPE_CENTER} zoom={1}>
              <Graticule stroke="#ffffff10" />
              <Geographies geography={WORLD_URL}>
                {({ geographies }) =>
                  geographies
                    .filter((geo) => {
                      const name = geo.properties?.name || geo.properties?.NAME || "";
                      const region = geo.properties?.region_un || geo.properties?.region || "";
                      // Показваме Европа + няколко съседни за пълнота
                      return ["Europe", ""].includes(region) || ["Russia", "Turkey", "Cyprus"].includes(name);
                    })
                    .map((geo) => {
                      const name = geo.properties?.name || geo.properties?.NAME || "";
                      const isBG = name === "Bulgaria";
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              fill: isBG ? "#F59E0B" : "#1f2937", // България — оранжево
                              stroke: isBG ? "#fde68a" : "#475569", // леко по-светъл контур за BG
                              strokeWidth: isBG ? 1.2 : 0.5,
                              outline: "none",
                            },
                            hover: {
                              fill: isBG ? "#f59e0bcc" : "#334155",
                              stroke: isBG ? "#fde047" : "#64748b",
                              strokeWidth: isBG ? 1.4 : 0.6,
                              outline: "none",
                            },
                            pressed: {
                              fill: isBG ? "#f59e0b" : "#334155",
                              stroke: isBG ? "#fde047" : "#94a3b8",
                              strokeWidth: isBG ? 1.4 : 0.6,
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
