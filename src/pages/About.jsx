import React from "react";

const About = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6">
      <img
        src="/images/ImagesACS/Obekt%20s%20HPL%20i%20Bond/obekt-hpl-bond-1.jpg"
        alt="Фасадна облицовка HPL и Бонд – ACS ЕООД"
        className="rounded-xl shadow" data-aos="fade-right"
      />
      <div data-aos="fade-left">
        <h2 className="text-3xl font-bold text-green-900 mb-4">За ACS ЕООД</h2>
        <p className="text-green-800 mb-4">
          Предлагаме алуминиеви перголи (LED, биоклиматични), дограми Reynaers/KBE, фасадни системи, облицовки HPL и Бонд, остъкляване и плъзгащи решения. Работим в цяла България.
        </p>
        <ul className="list-disc list-inside text-green-900 space-y-1">
          <li>Партньори: Reynaers, KBE, STR Grup</li>
          <li>Индивидуални проекти и монтаж</li>
          <li>Гаранционно и следгаранционно обслужване</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
