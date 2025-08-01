import React from "react";
import aboutImg from "../assets/about.jpg"; // добави подходяща снимка

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* Снимка */}
        <div>
          <img
            src={aboutImg}
            alt="ACS ЕООД - Алуминиеви системи и перголи"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Текст */}
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            За ACS ЕООД
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Ние от <strong>ACS ЕООД</strong> предлагаме модерни и иновативни
            решения за перголи, дограми, фасадни системи и остъкляване. Работим
            с доказани партньори като <strong>Reynaers (Белгия)</strong>,{" "}
            <strong>KBE (Германия)</strong> и <strong>STR Grup</strong>, за да
            осигурим качество и дълготрайност.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Нашите проекти включват алуминиеви перголи с LED осветление,
            облицовки с HPL и Бонд, както и висококачествени прозоречни и
            фасадни системи. Работим в цяла България, без ограничение по
            регион.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg shadow hover:bg-yellow-300"
          >
            Свържете се с нас
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
