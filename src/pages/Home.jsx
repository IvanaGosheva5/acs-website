import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlendIn from "../components/BlendIn";


// Кастъм стрелки, за да се виждат 100%
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      aria-label="Следващ"
      onClick={onClick}
      className="!z-20 absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow border border-green-900/10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      aria-label="Предишен"
      onClick={onClick}
      className="!z-20 absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow border border-green-900/10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

const slides = [
  {
    img: "/images/ImagesACS/Aluminieva-pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-1.jpg",
    title: "Алуминиеви перголи с LED",
    subtitle: "Автоматизация, сензори за вятър/дъжд и премиум покрития.",
    cta1: { label: "Виж перголите", to: "/products" },
    cta2: { label: "Запитване", to: "/contact" },
  },
  {
    img: "/images/ImagesACS/Pergola%20Bioklimatik%20s%20led%20i%20senzor/pergola-bioklimatik-led-senzor-1.jpg",
    title: "Биоклиматични перголи",
    subtitle: "Регулируеми ламели, ZIP завеси и остъкляване без профил.",
    cta1: { label: "Перголи", to: "/products" },
    cta2: { label: "Свържете се с нас", to: "/contact" },
  },
  {
    img: "/images/ImagesACS/Dogrami%20Reynaers%20Masterlain8/dograma-reynaers-masterlain8-antracit-1.jpg",
    title: "Дограма Reynaers / KBE",
    subtitle: "MasterLine 8, CP серия, троен стъклопакет и термомост.",
    cta1: { label: "Дограми", to: "/products" },
    cta2: { label: "Запитване", to: "/contact" },
  },
  {
    img: "/images/ImagesACS/Oblicovka%20s%20HPL/oblicovka-hpl-obekt1.jpg",
    title: "Фасадни облицовки HPL / Бонд",
    subtitle: "Модерна визия, издръжливост и бърз, чист монтаж.",
    cta1: { label: "Облицовки", to: "/products" },
    cta2: { label: "Консултация", to: "/contact" },
  },
];

const Home = () => {
  const settings = {
    dots: false,           // само стрелки
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,   // 4 секунди
    speed: 800,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <section className="relative">
      {/* HERO СЛАЙДЕР */}
      <div className="relative">
        <div className="relative">
          <Slider {...settings}>
            {slides.map((s, i) => (
              <div key={i}>
                <div
                  className="h-[72vh] md:h-[86vh] w-full bg-center bg-cover relative"
                  style={{ backgroundImage: `url('${s.img}')` }}
                >
                  {/* градиент за четливост */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

                  {/* overlay съдържание */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6">
                      <div className="bg-black/35 backdrop-blur-[1px] rounded-2xl inline-block p-6 md:p-8">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow mb-3">
                          {s.title}
                        </h1>
                        <p className="text-white/90 md:text-lg mb-6">
                          {s.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={s.cta1.to}
                            className="bg-yellow-400 text-green-900 px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-yellow-300"
                          >
                            {s.cta1.label}
                          </a>
                          <a
                            href={s.cta2.to}
                            className="bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold border border-white/30 hover:bg-white/20"
                          >
                            {s.cta2.label}
                          </a>
                        </div>
                      </div>

                      {/* бейджове доверие */}
                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="text-xs md:text-sm bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full">
                          Партньори: Reynaers • KBE • STR Grup
                        </span>
                        <span className="text-xs md:text-sm bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full">
                          Национално покритие
                        </span>
                        <span className="text-xs md:text-sm bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full">
                          Гаранция и сервиз
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        <BlendIn />

          {/* леко преливане долу, за да отдели от следващата секция */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white" />
        </div>
      </div>

      {/* РАЗШИРЕНО ВЪВЕДЕНИЕ ЗА ФИРМАТА — гарантирано отделна секция */}
      <div className="bg-white relative z-0">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
          {/* уводен текст */}
          <div className="md:col-span-3" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-extrabold text-green-900 mb-4">
              ACS ЕООД – премиум решения за външна архитектура
            </h2>
            <p className="text-green-800/90 mb-4">
              Проектираме, доставяме и монтираме перголи (LED и биоклиматични),
              алуминиева дограма <strong>Reynaers</strong>, PVC системи <strong>KBE</strong>,
              фасадни системи, облицовки <strong>HPL / Бонд</strong>, остъкляване и плъзгащи решения.
              Работим в цяла България с гаранция за качество и сервиз.
            </p>
            <p className="text-green-800/90">
              Като партньор на водещи производители и с над десет години опит,
              предлагаме индивидуален подход за жилищни и търговски обекти –
              от консултация и оферта до завършен монтаж и следгаранционно обслужване.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/products" className="bg-yellow-400 text-green-900 px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-yellow-300">
                Разгледай продуктите
              </a>
              <a href="/partners" className="bg-white text-green-900 px-5 py-2.5 rounded-xl font-semibold border border-green-900/20 hover:bg-green-50">
                Партньори и франчайз
              </a>
            </div>
          </div>

          {/* ползи */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4" data-aos="fade-left">
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
              <h3 className="font-bold text-green-900 mb-1">Персонален проект</h3>
              <p className="text-green-800/90 text-sm">Замерване, оферта и 3D визуализация по заявка.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
              <h3 className="font-bold text-green-900 mb-1">Премиум материали</h3>
              <p className="text-green-800/90 text-sm">Reynaers, KBE, STR Grup, висок клас покрития.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
              <h3 className="font-bold text-green-900 mb-1">Монтаж в цяла БГ</h3>
              <p className="text-green-800/90 text-sm">Собствени екипи, гаранционно/следгаранционно обслужване.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">
              <h3 className="font-bold text-green-900 mb-1">Срокове и контрол</h3>
              <p className="text-green-800/90 text-sm">Прозрачен график, проследимост на материалите.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
