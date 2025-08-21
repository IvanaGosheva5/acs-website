import React from "react";

const services = [
  {
    title: "Алуминиеви перголи с осветление",
    img: "/images/ImagesACS/Aluminieva-pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-1.jpg",
    alt: "Алуминиева пергола с LED осветление – ACS ЕООД",
    bullets: [
      "LED осветление, автоматизация",
      "Вятърни и дъждовни сензори",
      "Индивидуален размер и цвят",
    ],
    ctaHref: "#gallery",
  },
  {
    title: "Биоклиматични перголи",
    img: "/images/ImagesACS/Pergola%20Bioklimatik%20s%20led%20i%20senzor/pergola-bioklimatik-led-senzor-1.jpg",
    alt: "Биоклиматик пергола със сензор – ACS ЕООД",
    bullets: [
      "Регулируеми ламели",
      "LED, автоматично управление",
      "ZIP завеси, остъкляване без профил",
    ],
    ctaHref: "#gallery",
  },
  {
    title: "Алуминиева дограма Reynaers",
    img: "/images/ImagesACS/Dogrami%20Reynaers%20Masterlain8/dograma-reynaers-masterlain8-antracit-1.jpg",
    alt: "Алуминиева дограма Reynaers MasterLine 8 – антрацит",
    bullets: [
      "MasterLine 8, Hebe-Schiebe CP130",
      "Троен стъклопакет",
      "Топлоизолация и дизайн",
    ],
    ctaHref: "#contact",
  },
  {
    title: "Облицовки HPL",
    img: "/images/ImagesACS/Oblicovka%20s%20HPL/oblicovka-hpl-obekt1.jpg",
    alt: "Фасадна облицовка с HPL панели – ACS ЕООД",
    bullets: [
      "Устойчивост на UV и влага",
      "Модерна визия, много текстури",
      "Бърз монтаж",
    ],
    ctaHref: "#gallery",
  },
  {
    title: "Облицовки Бонд",
    img: "/images/ImagesACS/Darvesen%20flader/oblicovka-bond-darvesen-flader-1.jpg",
    alt: "Облицовка с алуминиев композит (Бонд), дървесен фладер",
    bullets: [
      "Лека и здрава фасада",
      "Дървесни и метални фладери",
      "Идеална за рекламни зони",
    ],
    ctaHref: "#gallery",
  },
  {
    title: "Остъкляване и плъзгащи системи",
    img: "/images/ImagesACS/Ostaklyavane%20na%20terasa/ostaklyavane-terrace-1.jpg",
    alt: "Остъкляване на тераса – плъзгащи системи",
    bullets: [
      "Плъзгане, гилотини, безпрофилно",
      "Стъклопакет/триплекс",
      "Термо плъзгане",
    ],
    ctaHref: "#gallery",
  },
  {
    title: "Огради и парапети",
    img: "/images/ImagesACS/Aluminievi%20pana/ograda-panels-1.jpg",
    alt: "Алуминиеви огради и парапети – антрацит",
    bullets: [
      "Алуминий/стъкло, антрацит",
      "Плъзгащи портали",
      "Дълготрайни покрития",
    ],
    ctaHref: "#gallery",
  },
  {
    title: "Навеси и покривни решения",
    img: "/images/ImagesACS/Navesi%20s%20matiran%20tripleks/navest-terrace-triplex-1.jpg",
    alt: "Навес с матиран триплекс – терасно решение",
    bullets: [
      "Матиран триплекс",
      "За входове/тераси",
      "По проект и размер",
    ],
    ctaHref: "#contact",
  },
  {
    title: "Фасадни системи",
    img: "/images/ImagesACS/Prozorechni%20fasadni%20sistemi/fasadna-sistema-reynaers-1.jpg",
    alt: "Прозоречни и фасадни системи Reynaers",
    bullets: [
      "Енергийна ефективност",
      "Голяма остъклена площ",
      "Премиум визия",
    ],
    ctaHref: "#contact",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2"
          data-aos="fade-up"
        >
          Нашите услуги
        </h2>
        <p className="text-green-800 mb-8" data-aos="fade-up" data-aos-delay="150">
          Перголи, дограми, облицовки, остъкляване и фасадни решения – проектирани
          и изпълнени от ACS ЕООД в цяла България.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-900 mb-3">{s.title}</h3>
                <ul className="list-disc list-inside text-green-800 space-y-1 mb-4">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  href={s.ctaHref}
                  className="inline-block bg-yellow-400 text-green-900 px-4 py-2 rounded-lg shadow hover:bg-yellow-300"
                >
                  Виж повече
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
