import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({title, img, alt, to}) => (
  <article className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition" data-aos="fade-up">
    <img src={img} alt={alt} className="h-48 w-full object-cover" loading="lazy" />
    <div className="p-5">
      <h3 className="text-xl font-bold text-green-900 mb-3">{title}</h3>
      <NavLink to={to || "/contact"} className="inline-block bg-yellow-400 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-300">
        Запитване
      </NavLink>
    </div>
  </article>
);

const Products = () => (
  <section className="py-16 bg-yellow-50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-8">Продукти</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Перголи с осветление"
          img="/images/ImagesACS/Aluminieva-pergola%20s%20osvetlenie/aluminieva-pergola-s-osvetlenie-2.jpg"
          alt="Алуминиева пергола с LED осветление – ACS ЕООД"
        />
        <Card
          title="Биоклиматични перголи"
          img="/images/ImagesACS/Pergola%20Bioklimatik%20s%20led%20i%20senzor/pergola-bioklimatik-led-senzor-1.jpg"
          alt="Биоклиматик пергола – ACS ЕООД"
        />
        <Card
          title="Дограма Reynaers/KBE"
          img="/images/ImagesACS/Dogrami%20Reynaers%20Masterlain8/dograma-reynaers-masterlain8-hebe-schiebe-cp130-1.jpg"
          alt="Дограма Reynaers MasterLine 8 / CP130"
        />
        <Card
          title="Облицовки HPL"
          img="/images/ImagesACS/Oblicovka%20s%20HPL/oblicovka-hpl-obekt2.jpg"
          alt="Облицовка HPL"
        />
        <Card
          title="Облицовки Бонд"
          img="/images/ImagesACS/Darvesen%20flader/oblicovka-bond-darvesen-flader-2.jpg"
          alt="Облицовка Бонд – дървесен фладер"
        />
        <Card
          title="Огради и парапети"
          img="/images/ImagesACS/Aluminievi%20pana/ograda-panels-2.jpg"
          alt="Алуминиеви огради и парапети"
        />
      </div>
    </div>
  </section>
);

export default Products;
