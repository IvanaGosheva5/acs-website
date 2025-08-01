import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
   <section id="home" className="bg-green-100 p-10 text-center" data-aos="fade-up">
  <h1 className="text-4xl font-bold text-green-900 mb-4" data-aos="zoom-in">{t('home.title')}</h1>
  <p className="text-green-700 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="300">{t('home.description')}</p>
</section>

  );
};

export default Home;
