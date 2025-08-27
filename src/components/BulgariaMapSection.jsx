import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
  Marker,
} from "react-simple-maps";

const BULGARIA_CENTER = [25.4858, 42.7339]; // lon, lat (център на България)

export default function BulgariaMapSection() {
  const [provinces, setProvinces] = useState(null);
  const [error, setError] = useState(null);

  // Зареждаме локалния GeoJSON с областите
  useEffect(() => {
    fetch("/maps/bulgaria-provinces.geojson", { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error("Missing GeoJSON");
        return r.json();
      })
      .then((json) => setProvinces(json))
      .catch(() => setError("Липсва файлът /public/maps/bulgaria-provinces.geojson"));
  }, []);

  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 grid lg:grid-cols-5 gap-10 items-center">
        {/* ЛЯВО: заглавие/текст/CTA */}
        <div className="lg:col-span-2">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#E6C800] font-semibold">
            Покритие
          </p>
          <h2 className="text-3xl font-extrabold mt-2">
            Монтаж в цяла България
          </h2>
          <p className="text-white/85 mt-3">
            Собствени екипи и партньорска мрежа. Ясни срокове, гаранция и сервиз —
            от жилищни тераси до хотелски комплекси. Област <b>Благоевград</b> е наш фокус в Югозападна България.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-extrabold text-[#FDE047]">20+</div>
              <div className="text-white/80 text-sm">години опит</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#FDE047]">100+</div>
              <div className="text-white/80 text-sm">обекта</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#FDE047]">4</div>
              <div className="text-white/80 text-sm">партньора</div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/contact" className="bg-[#FDE047] text-[#154A2F] px-5 py-2.5 rounded-xl font-semibold shadow hover:brightness-95">
              Запитване
            </a>
            <a href="/gallery" className="bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold border border-white/20 hover:bg-white/20">
              Референции
            </a>
          </div>

          {error && (
            <div className="mt-4 text-sm text-red-300/90">
              {error}. Добави GeoJSON, за да се покажат линиите на областите.
            </div>
          )}
        </div>

        {/* ДЯСНО: карта с линии на областите */}
        <div className="lg:col-span-3 relative">
          {/* фонова „мрежа“ за техничен вид */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />

          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 2500 }}>
            <ZoomableGroup center={BULGARIA_CENTER} zoom={1}>
              <Graticule stroke="#ffffff10" />

              {/* Ако имаме GeoJSON на областите: рисуваме ги с контури */}
              {provinces ? (
                <Geographies geography={provinces}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const name =
                        geo.properties?.name ||
                        geo.properties?.NAME_1 ||
                        geo.properties?.NAME ||
                        "";
                      const isBlagoevgrad = /blagoevgrad/i.test(name);

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              fill: isBlagoevgrad ? "#F59E0B" : "#0b1220",
                              stroke: "#ffffff",
                              strokeWidth: 0.7,
                              outline: "none",
                            },
                            hover: {
                              fill: isBlagoevgrad ? "#f59e0bcc" : "#111827",
                              stroke: "#FDE047",
                              strokeWidth: 1,
                            },
                            pressed: {
                              fill: isBlagoevgrad ? "#f59e0b" : "#0b1220",
                              stroke: "#FDE047",
                              strokeWidth: 1,
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              ) : (
                <>
                  {/* Временен контур на BG (ако липсва GeoJSON с области) */}
                  <Marker coordinates={[25.4858, 42.7339]}>
                    <circle r={0} />
                  </Marker>
                  {/* Маркер Благоевград (fallback) */}
                  <Marker coordinates={[23.1, 41.9937]}>
                    <circle r={6} fill="#F59E0B" />
                  </Marker>
                </>
              )}
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
