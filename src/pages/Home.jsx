import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
  Marker,
} from "react-simple-maps";
import EuropeToBulgaria from "../components/EuropeToBulgaria"


/**
 * Начална страница (структура в стил EDPNC):
 * 1) HERO (ляво заглавие, твоя снимка, overlay)
 * 2) Текстови "кутии" (линкове)
 * 3) Frame с текст + жълти линии
 * 4) Карти със снимки + воден знак "ЗАЩО НАС"
 * 5) Черен frame: ТЕКСТ (вляво) + КАРТА НА БЪЛГАРИЯ С ОБЛАСТИ (вдясно)
 * 6) Оранжев разделител (SVG вълна)
 * 7) Pre-footer снимка с плавно преливане към бяло
 *
 * Изисквани активи в /public:
 * - /images/ImagesACS/... (твоите снимки – пътищата са реални)
 * - /maps/bulgaria-provinces.geojson (за линии на областите; по избор)
 * - /hero/hero.jpg (по избор – fallback за херо)
 */

/* ---------- Вътрешен компонент: карта на България с области (вдясно), текст (вляво) ---------- */

const BULGARIA_CENTER = [25.4858, 42.7339]; // lon, lat (център на България)

function BulgariaMapSection() {
  const [provinces, setProvinces] = useState(null);
  const [error, setError] = useState(null);

  // Зареждаме локалния GeoJSON с областите (ако липсва, показваме fallback)
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
            Собствени екипи и партньорска мрежа. Ясни срокове, гаранция и сервиз — от жилищни тераси до
            хотелски комплекси. Област <b>Благоевград</b> е наш фокус в Югозападна България.
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
                  {/* Fallback: маркер за Благоевград, докато добавиш GeoJSON */}
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

/* ----------------------------------- HOME ----------------------------------- */

const Home = () => {
  const [heroOk, setHeroOk] = useState(true);

  return (
    <main className="font-sans text-green-900 bg-white">

      {/* === 1) HERO: заглавие вляво, твоя снимка, силен overlay === */}
      <section className="relative min-h-[78vh] md:min-h-[86vh] overflow-hidden">
        {/* ТВОЯТА снимка за херо */}
        <img
          src="/images/ImagesACS/Pergola%20Bioklimatik%20s%20led%20i%20senzor/pergola-bioklimatik-led-senzor-2.jpg"
          alt="ACS — биоклиматична пергола с LED и остъкляване"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            heroOk || setHeroOk(false);
            e.currentTarget.style.display = "none";
          }}
        />
        {!heroOk && (
          <img
            src="/hero/hero.jpg"
            alt="ACS — перголи, остъкляване и фасади"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Overlay + лека периферна виниетка */}
        <div className="absolute inset-0 bg-black/58" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.22)_100%)]" />

        {/* Съдържание вляво */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto w-full max-w-[1280px] px-6">
            <div className="max-w-[820px]">
              {/* Градиентен текст в зелено/жълта гама */}
              <h1 className="font-extrabold leading-[1.05] tracking-[-0.02em] text-[36px] md:text-[62px] lg:text-[82px] text-transparent bg-clip-text bg-gradient-to-r from-[#BBF7D0] via-[#FDE047] to-white drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
                Перголи, остъкляване и фасадни решения
              </h1>
              <p className="text-white/90 text-base md:text-xl mt-5">
                20+ години опит • Перголи (LED/биоклиматични), дограми <b>Reynaers</b> и <b>KBE</b>,
                HPL/Бонд, модерно остъкляване — монтаж в цяла България.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-[#FDE047] text-[#154A2F] px-7 py-3 rounded-xl font-semibold shadow-lg hover:brightness-95"
                >
                  Започни проект
                </a>
                <a
                  href="/gallery"
                  className="bg-white/10 text-white px-7 py-3 rounded-xl font-semibold border border-white/30 hover:bg-white/20"
                >
                  Реализирани обекти
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 2) Текстови "кутии" (a href) === */}
      <section className="border-b border-green-900/10">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Перголи", href: "/services" },
            { t: "Остъкляване", href: "/services" },
            { t: "Облицовки", href: "/services" },
            { t: "Галерия", href: "/gallery" },
          ].map((i) => (
            <a
              key={i.t}
              href={i.href}
              className="group rounded-2xl border border-green-900/15 bg-white px-5 py-4 shadow hover:shadow-md transition"
            >
              <div className="text-sm text-green-900/60">Виж повече</div>
              <div className="mt-1 text-xl font-extrabold group-hover:underline">{i.t}</div>
            </a>
          ))}
        </div>
      </section>

      {/* === 3) Frame с текст + жълти линии === */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16">
          <div className="relative rounded-3xl bg-[#F8FAF9] p-8 md:p-12 overflow-hidden">
            {/* Декоративни линии */}
            <span className="absolute left-0 top-8 h-[3px] w-28 bg-[#FDE047]" />
            <span className="absolute left-0 bottom-8 h-[3px] w-40 bg-[#FDE047]" />

            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.01em]">
                Индивидуален подход и довършен детайл
              </h2>
              <p className="mt-3 text-green-800/90">
                Проектираме спрямо архитектурата, предлагаме оптимални техники за остъкляване и монтаж,
                и комбинираме материали за дълготрайност и стил. Комуникация, срокове и гаранция —
                прозрачно и професионално.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/colors" className="bg-white text-[#154A2F] px-5 py-2.5 rounded-xl font-semibold border border-green-900/20 hover:bg-green-50">
                  Цветове и покрития
                </a>
                <a href="/partners" className="bg-[#154A2F] text-white px-5 py-2.5 rounded-xl font-semibold hover:brightness-110">
                  Партньори
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 4) Карти със снимки + ВОДЕН ЗНАК „ЗАЩО НАС“ === */}
      <section className="relative overflow-hidden">
        {/* Воден знак отзад */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="text-[16vw] md:text-[10vw] font-extrabold tracking-[0.06em] text-green-900/15 select-none">
            ЗАЩО&nbsp;НАС
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 grid md:grid-cols-3 gap-6">
          {[
            {
              img: "/images/ImagesACS/Prozorechni%20fasadni%20sistemi/fasadna-sistema-reynaers-1.jpg",
              title: "Премиум системи",
              text: "Reynaers, KBE, STR Grup — висок клас профили и аксесоари.",
            },
            {
              img: "/images/ImagesACS/Aluminieva%20pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-2.jpg",
              title: "Дизайн и функционалност",
              text: "LED/биоклиматик, ZIP завеси, интелигентна автоматизация.",
            },
            {
              img: "/images/ImagesACS/Cqlostno%20izgrajdane%20na%20terasa/cqlostno-izgrajdane-terasa-2.jpg",
              title: "Монтаж в цяла БГ",
              text: "Собствени екипи, ясни срокове, гаранция и сервиз.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl overflow-hidden h-[320px] shadow-[0_12px_32px_rgba(0,0,0,0.10)] border border-green-900/10"
            >
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl font-extrabold">{c.title}</h3>
                <p className="text-white/90 mt-1 text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === 5) Черен frame: ТЕКСТ (вляво) + КАРТА С ОБЛАСТИ (вдясно) === */}
      <BulgariaMapSection />

      {/* === 6) Оранжев SVG „рол“ разделител === */}
      <section aria-hidden="true" className="bg-white">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-[80px] md:h-[120px]">
          <path
            fill="#F59E0B"
            d="M0,64L60,53.3C120,43,240,21,360,26.7C480,32,600,64,720,80C840,96,960,96,1080,85.3C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </section>

      {/* === 7) Pre-footer снимка с плавно преливане към бяло === */}
      <section className="relative">
        <div className="mx-auto w-full max-w-[1280px] px-6 my-12">
          <div
            className="rounded-3xl overflow-hidden h-[260px] md:h-[360px] bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/images/ImagesACS/Pergola%20Bioklimatik%20s%20led%20i%20senzor/pergola-bioklimatik-led-senzor-3.jpg')",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </section>

    </main>
  );
};

export default Home;
