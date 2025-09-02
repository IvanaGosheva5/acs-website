import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
} from "react-simple-maps";

const EUROPE_CENTER = [15, 54];
const LOCAL_TOPOJSON = "/maps/countries-110m.json"; // локален файл

export default function EuropeMapHighlight() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 grid lg:grid-cols-5 gap-10 items-center">
        {/* Ляво: текст */}
        <div className="lg:col-span-2">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#E6C800] font-semibold">Покритие</p>
          <h2 className="text-3xl font-extrabold mt-2">Работим в Европа — фокус България</h2>
          <p className="text-white/85 mt-3">
            Реализираме проекти за частни и корпоративни клиенти. България е основният ни пазар и е изведена в оранжево.
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

        {/* Дясно: карта */}
        <div className="lg:col-span-3 relative">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 470 }}>
            <ZoomableGroup center={EUROPE_CENTER} zoom={1}>
              <Graticule stroke="#ffffff10" />
              <Geographies geography={LOCAL_TOPOJSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name = geo.properties?.name || geo.properties?.NAME || geo.id || "";
                    const isBG = /bulgaria/i.test(name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isBG ? "#F59E0B" : "#1f2937",
                            stroke: isBG ? "#fde68a" : "#475569",
                            strokeWidth: isBG ? 1.2 : 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: isBG ? "#f59e0bcc" : "#334155",
                            stroke: isBG ? "#fde047" : "#64748b",
                            strokeWidth: isBG ? 1.4 : 0.6,
                          },
                          pressed: {
                            fill: isBG ? "#f59e0b" : "#334155",
                            stroke: isBG ? "#fde047" : "#94a3b8",
                            strokeWidth: isBG ? 1.4 : 0.6,
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
