import React from "react";

const partners = [
  {
    name: "Reynaers Aluminium",
    logo: "/images/partners/reynaers.png", // сложи логото тук
    desc: "Белгийски лидер в дизайнерска алуминиева дограма и фасадни системи (MasterLine 8, CP серия, фасади).",
    link: "https://www.reynaers.com/",
  },
  {
    name: "STR Grup",
    logo: "/images/partners/strgrup.png",
    desc: "Интелигентни перголи (Bioclimatic, BioRolling), ZIP завеси и автоматизация за външни пространства.",
    link: "https://www.strgrup.com/",
  },
  {
    name: "KBE PVC Systems",
    logo: "/images/partners/kbe.png",
    desc: "Немски PVC профили с висока енергийна ефективност и надеждност (70/76 системи).",
    link: "https://www.kbe-online.com/",
  },
  {
    name: "Laminam",
    logo: "/images/partners/laminam.png",
    desc: "Голямоформатни керамични плочи за фасади и интериор; устойчивост и елегантна визия.",
    link: "https://www.laminam.bg/",
  },
];

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-extrabold text-green-900">{value}</div>
    <div className="text-green-800/80">{label}</div>
  </div>
);

const Partners = () => {
  return (
    <div className="pb-16">
      {/* HERO / банер */}
      <section
        className="h-[280px] md:h-[340px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/ImagesACS/Obekt%20s%20HPL%20i%20Bond/obekt-hpl-bond-1.jpg')" }}
      >
        <div className="w-full bg-black/50">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Партньори и франчайз
            </h1>
            <p className="text-white/90 max-w-3xl">
              Работим с водещи международни марки за да предложим премиум решения в перголи, дограми, фасади и облицовки.
            </p>
          </div>
        </div>
      </section>

      {/* Статистика / доверие */}
      <section className="bg-yellow-50 border-y border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat value="20+" label="години опит" />
          <Stat value="100+" label="завършени обекта" />
          <Stat value="4" label="международни партньора" />
          <Stat value="В цяла България" label="национално покритие" />
        </div>
      </section>

      {/* Грид с партньорите */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">Нашите партньори</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <article
              key={p.name}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-green-900/10"
              data-aos="fade-up"
            >
              <div className="h-28 grid place-items-center bg-green-50">
                {/* ако логото липсва, покажем само име */}
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="h-16 object-contain" />
                ) : (
                  <span className="font-semibold text-green-900">{p.name}</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-green-900 mb-2">{p.name}</h3>
                <p className="text-green-800/90 text-sm mb-4">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm bg-yellow-400 text-green-900 px-4 py-2 rounded-lg shadow hover:bg-yellow-300"
                >
                  Научи повече
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Франчайз / партньорство – ползи */}
      <section className="max-w-7xl mx-auto px-6 pt-14">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-green-900/10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            Франчайз и партньорства
          </h2>
          <p className="text-green-800/90 mb-6">
            ACS ЕООД работи като оторизиран партньор/дистрибутор. Осигуряваме пълна верига – консултация,
            проектиране, доставка, монтаж и сервиз. С партньорите споделяме общ стандарт за качество и
            проследимост на материалите.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-green-900">
            <ul className="list-disc list-inside space-y-1">
              <li>Официални продуктови линии и профилни системи</li>
              <li>Техническа документация и обучение на екипи</li>
              <li>Гаранционни условия и следгаранционен сервиз</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Персонализирани решения за обекти</li>
              <li>Съобразяване с европейски стандарти</li>
              <li>Доставка и монтаж в цяла България</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg shadow hover:bg-yellow-300 text-center">
              Стани партньор / Изпрати запитване
            </a>
            <a href="/products" className="bg-white text-green-900 px-6 py-3 rounded-lg shadow border border-green-900/20 text-center">
              Виж продуктите
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
