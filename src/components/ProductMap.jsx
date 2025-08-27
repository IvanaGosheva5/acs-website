import React from "react";

const ITEMS = [
  {
    title: "Перголи",
    points: ["LED осветление", "Биоклиматик (ламели)", "ZIP завеси", "Плъзгащо остъкляване"],
    img: "/images/ImagesACS/Aluminieva-pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-1.jpg",
  },
  {
    title: "Остъкляване",
    points: ["Плъзгане стъклопакет", "Безпрофилно", "Гилотина", "Термоплъзгане"],
    img: "/images/ImagesACS/Ostaklyavane%20na%20terasa/ostaklyavane-terrace-1.jpg",
  },
  {
    title: "Дограми",
    points: ["Reynaers ML8 / CP", "KBE PVC 70/76", "Троен стъклопакет", "Термомост"],
    img: "/images/ImagesACS/Dogrami%20Reynaers%20Masterlain8/dograma-reynaers-masterlain8-antracit-1.jpg",
  },
  {
    title: "Облицовки",
    points: ["HPL", "Бонд", "Coverlam", "Дървесни декори"],
    img: "/images/ImagesACS/Oblicovka%20s%20HPL/oblicovka-hpl-obekt1.jpg",
  },
  {
    title: "Огради и парапети",
    points: ["Алуминий", "Стъкло", "Плъзгащи портали", "Антрацит"],
    img: "/images/ImagesACS/Aluminieva%20ograda%20s%20pluzgashti%20se%20portali/ograda-portalna-plazgashta-1.jpg",
  },
];

const Card = ({ item }) => (
  <article className="rounded-2xl overflow-hidden border border-green-900/10 bg-white shadow hover:shadow-lg transition">
    <div
      className="h-40 bg-cover bg-center"
      style={{ backgroundImage: `url('${item.img}')` }}
    />
    <div className="p-5">
      <h3 className="text-lg font-bold text-green-900">{item.title}</h3>
      <ul className="mt-2 text-sm text-green-800/90 space-y-1 list-disc list-inside">
        {item.points.map(p => <li key={p}>{p}</li>)}
      </ul>
      <div className="mt-4">
        <a href="/contact" className="text-sm bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300">
          Запитване
        </a>
      </div>
    </div>
  </article>
);

const ProductMap = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">Нашите решения</h2>
        <p className="text-green-800/90 mt-2 mb-6 max-w-3xl">
          Ясна ориентация в портфолиото: перголи, остъкляване, дограми, облицовки, огради.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map(i => <Card key={i.title} item={i} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductMap;
